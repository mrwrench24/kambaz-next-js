import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            href="/courses/1234/assignments/123"
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </Link>
          <br></br>
          Multiple Modules | <b>Not available until</b> Jun. 23rd, 2026 | Due
          Jun. 24th @ 11:59 PM | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/courses/1234/assignments/123"
            className="wd-assignment-link"
          >
            Mini Quiz - Node.JS and CSS
          </Link>
          <br></br>
          Multiple Modules | <b>Not available until</b> Jun. 25th, 2026 | Due
          Jun. 26th @ 11:59 PM | 50 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/courses/1234/assignments/123"
            className="wd-assignment-link"
          >
            A2 - React and State
          </Link>
          <br></br>
          Multiple Modules | <b>Not available until</b> Jun. 28th, 2026 | Due
          Jun. 29th @ 11:59 PM | 100 pts
        </li>
      </ul>
    </div>
  );
}
