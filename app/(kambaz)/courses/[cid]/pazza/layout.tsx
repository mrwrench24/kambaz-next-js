"use client";
import { useParams } from "next/navigation";
import { ReactNode } from "react";
import PazzaNavigation from "./Navigation";
import FolderFilters from "./FolderFilters";
import PostNavigation from "./PostNavigation";

export default function PazzaLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();

  return (
    <div id="wd-pazza" className="pe-4">
      <div>
        <PazzaNavigation cid={cid as string} />
        <FolderFilters />
      </div>
      <div className="d-flex">
        {/*  */}
        <div style={{ width: "400px", minWidth: "400px" }}>
          <PostNavigation />
        </div>

        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
