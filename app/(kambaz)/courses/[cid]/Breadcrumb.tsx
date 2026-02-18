"use client";
import React from "react";
import { usePathname } from "next/navigation";
export default function Breadcrumb({
  course,
}: {
  course: { name: string } | undefined;
}) {
  const pathname = usePathname();
  const lastPart = pathname.split("/").pop();
  const label = lastPart
    ? lastPart.slice(0, 1).toUpperCase() + lastPart.slice(1)
    : "";

  return (
    <span>
      {course?.name} &gt; {label}
    </span>
  );
}
