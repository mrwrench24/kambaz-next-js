"use client";
import { FaPerson } from "react-icons/fa6";
import { PageState, usePazzaContext } from "./PazzaContext";
import { useSelector } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";

export default function PazzaNavigation({ cid }: { cid: string }) {
  const { page, setPage } = usePazzaContext();

  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer,
  );

  return (
    <div className="bg-primary text-white p-1 d-flex align-items-center">
      <span className="fw-bold fs-4 p-2">Pazza</span>

      <div className="ms-auto d-flex align-items-center me-3">
        <span className="fw-bold fs-5 p-2">CS 4550</span>

        <span
          className={`p-2 ${page !== "manage_class" && "nav-link-selected"}`}
          role="button"
          onClick={() => setPage("cag")}
        >
          Q & A
        </span>

        {currentUser.role !== "STUDENT" && (
          <span
            className={`p-2 ${page === "manage_class" && "nav-link-selected"}`}
            role="button"
            onClick={() => setPage("manage_class")}
          >
            Manage Class
          </span>
        )}

        <FaPerson className="m-2" />
        <span>
          {currentUser.firstName} {currentUser.lastName}
        </span>
      </div>
    </div>
  );
}
