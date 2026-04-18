"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { Folder, Post } from "./types/types";
import { useSelector } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";
import { findUsersForCourse } from "../../client";

export type PageState = "new_post" | "cag" | Post | "manage_class";
type PazzaState = {
  cid: string;
  page: PageState;
  numEnrolled: number;
  setPage: (p: PageState) => void;
  selectedFolder: Folder | null;
  setSelectedFolder: (f: Folder) => void;
};

const PazzaContext = createContext<PazzaState | null>(null);

export function PazzaProvider({
  cid,
  children,
}: {
  cid: string;
  children: React.ReactNode;
}) {
  const [page, setPageDirect] = useState<PageState>("cag");
  const [selectedFolder, setSelectedFolder] = useState<Folder | null>(null);
  const [numEnrolled, setNumEnrolled] = useState(1);

  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer,
  );

  const setPage = (p: PageState) => {
    if (currentUser.role === "STUDENT" && p === "manage_class") {
      return;
    }

    setPageDirect(p);
  };

  useEffect(() => {
    if (!cid) {
      return;
    }

    findUsersForCourse(cid as string).then((users) =>
      setNumEnrolled(users.length),
    );
  }, [cid]);

  return (
    <PazzaContext.Provider
      value={{
        cid,
        page,
        numEnrolled,
        setPage,
        selectedFolder,
        setSelectedFolder,
      }}
    >
      {children}
    </PazzaContext.Provider>
  );
}

export function usePazzaContext() {
  const ctx = useContext(PazzaContext);
  if (!ctx) throw new Error("Not in Pazza!");
  return ctx;
}
