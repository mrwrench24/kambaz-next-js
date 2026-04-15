"use client";
import { createContext, useContext, useState } from "react";
import { Folder, Post } from "./types/types";
import { useSelector } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";

export type PageState = "new_post" | "cag" | Post | "manage_class";
type PazzaState = {
  cid: string;
  page: PageState;
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

  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer,
  );

  const setPage = (p: PageState) => {
    if (currentUser.role === "STUDENT" && p === "manage_class") {
      return;
    }

    setPageDirect(p);
  };

  return (
    <PazzaContext.Provider
      value={{
        cid,
        page,
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
