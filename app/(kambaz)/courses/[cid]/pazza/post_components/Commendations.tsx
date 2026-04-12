import { RootState } from "@/app/(kambaz)/store";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Commendations({
  commendationsFor,
  initialCommenders,
}: {
  commendationsFor: "question" | "note" | "answer";
  initialCommenders: string[];
}) {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer,
  );
  const [commenders, setCommenders] = useState(initialCommenders);

  const commended = commenders.includes(currentUser._id);

  return (
    <div>
      <span
        role="button"
        className={`${commended ? "commended" : "link-primary"}`}
        onClick={() => {
          if (commended) {
            setCommenders(commenders.filter((com) => com !== currentUser._id));
          } else {
            setCommenders([...commenders, currentUser._id]);
          }
        }}
      >
        good {commendationsFor}
      </span>{" "}
      | {commenders.length}
    </div>
  );
}
