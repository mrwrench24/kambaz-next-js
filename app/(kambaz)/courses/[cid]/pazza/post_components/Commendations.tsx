import { RootState } from "@/app/(kambaz)/store";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Commendations({
  commendationsFor,
  commenders,
  onCommendationPressed,
}: {
  commendationsFor: "question" | "note" | "answer";
  commenders: string[];
  onCommendationPressed: () => void;
}) {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer,
  );

  const commended = commenders.includes(currentUser._id);

  return (
    <div>
      <span
        role="button"
        className={`${commended ? "commended" : "link-primary"}`}
        onClick={onCommendationPressed}
      >
        good {commendationsFor}
      </span>{" "}
      | {commenders.length}
    </div>
  );
}
