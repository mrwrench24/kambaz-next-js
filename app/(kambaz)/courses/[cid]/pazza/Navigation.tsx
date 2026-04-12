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

  // pages == when should it be "selected"
  const links: { title: string; page: PageState; pages: PageState[] }[] = [
    { title: "Q & A", page: "cag", pages: ["cag", "post", "new_post"] },
    { title: "Manage Class", page: "manage_class", pages: ["manage_class"] },
  ];
  return (
    <div className="bg-primary text-white p-1 d-flex align-items-center">
      <span className="fw-bold fs-4 p-2">Pazza</span>

      <div className="ms-auto d-flex align-items-center me-3">
        <span className="fw-bold fs-5 p-2">CS 4550</span>
        {links.map((link) => {
          return (
            <span
              key={link.title}
              className={`p-2 ${link.pages.includes(page) && "nav-link-selected"}`}
              role="button"
              onClick={() => setPage(link.page)}
            >
              {link.title}
            </span>
          );
        })}

        <FaPerson className="m-2" />
        <span>
          {currentUser.firstName} {currentUser.lastName}
        </span>
      </div>
    </div>
  );
}
