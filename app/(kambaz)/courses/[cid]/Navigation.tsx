"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function CourseNavigation({ cid }: { cid: string }) {
  const links = [
    "Home",
    "Modules",
    "Pazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  const pathname = usePathname();

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        return (
          <Link
            key={link}
            href={`/courses/${cid}/${link.toLowerCase()}`}
            id={`wd-course-${link.toLowerCase()}-link`}
            className={`list-group-item 
              ${pathname.includes(link.toLowerCase()) ? "active" : "text-danger"}
              border-0`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
