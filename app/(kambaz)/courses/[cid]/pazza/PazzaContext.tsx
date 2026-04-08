"use client";
import { createContext, useContext, useState } from "react";

export type PageState = "new_post" | "cag" | "post" | "manage_class";
type PazzaState = {
  page: PageState;
  setPage: (p: PageState) => void;
};

const PazzaContext = createContext<PazzaState | null>(null);

export function PazzaProvider({ children }: { children: React.ReactNode }) {
  const [page, setPage] = useState<PageState>("cag");

  return (
    <PazzaContext.Provider value={{ page, setPage }}>
      {children}
    </PazzaContext.Provider>
  );
}

export function usePazzaContext() {
  const ctx = useContext(PazzaContext);
  if (!ctx) throw new Error("Not in Pazza!");
  return ctx;
}
