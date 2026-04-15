"use client";
import { useParams } from "next/navigation";
import { ReactNode } from "react";
import PazzaNavigation from "./Navigation";
import FolderFilters from "./FolderFilters";
import PostNavigation from "./PostNavigation";
import { PazzaProvider } from "./PazzaContext";

export default function PazzaLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();

  return (
    <PazzaProvider cid={cid as string}>
      <div id="wd-pazza" className="pe-4">
        <div className="pazza-header">
          <PazzaNavigation cid={cid as string} />
          <FolderFilters />
        </div>
        <div className="d-flex">
          <div>
            <PostNavigation />
          </div>

          <div className="flex-fill">{children}</div>
        </div>
      </div>
    </PazzaProvider>
  );
}
