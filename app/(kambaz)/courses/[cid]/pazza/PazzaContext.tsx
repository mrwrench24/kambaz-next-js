"use client";
import { createContext, useContext, useState } from "react";
import { Post } from "./types/types";

export type PageState = "new_post" | "cag" | Post | "manage_class";
type PazzaState = {
  cid: string;
  page: PageState;
  setPage: (p: PageState) => void;
};

const PazzaContext = createContext<PazzaState | null>(null);

export function PazzaProvider({
  cid,
  children,
}: {
  cid: string;
  children: React.ReactNode;
}) {
  const [page, setPage] = useState<PageState>("cag");

  return (
    <PazzaContext.Provider value={{ cid, page, setPage }}>
      {children}
    </PazzaContext.Provider>
  );
}

export function usePazzaContext() {
  const ctx = useContext(PazzaContext);
  if (!ctx) throw new Error("Not in Pazza!");
  return ctx;
}
