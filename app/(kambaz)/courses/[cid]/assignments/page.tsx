import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        Assignments: 40% of Total <button>+</button>
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
            A2 - Node.JS and CSS
          </Link>
          <br></br>
          Multiple Modules | <b>Not available until</b> Jun. 21st, 2026 | Due
          Jun. 22nd @ 11:59 PM | 100 pts
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
      <h3 id="wd-assignments-title">
        Quizzes: 10% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            href="/courses/1234/assignments/123"
            className="wd-assignment-link"
          >
            Q1 - HTML
          </Link>
          <br></br>
          Multiple Modules | <b>Not available until</b> Jun. 23rd, 2026 | Due
          Jun. 24th @ 11:59 PM | 50 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/courses/1234/assignments/123"
            className="wd-assignment-link"
          >
            Q2 - CSS
          </Link>
          <br></br>
          Multiple Modules | <b>Not available until</b> Jun. 25th, 2026 | Due
          Jun. 28th @ 11:59 PM | 50 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/courses/1234/assignments/123"
            className="wd-assignment-link"
          >
            Q3 - React
          </Link>
          <br></br>
          Multiple Modules | <b>Not available until</b> Jun. 28th, 2026 | Due
          Jun. 30th @ 11:59 PM | 40 pts
        </li>
      </ul>
      <h3 id="wd-assignments-title">
        Exams: 30% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            href="/courses/1234/assignments/123"
            className="wd-assignment-link"
          >
            Exam 1
          </Link>
          <br></br>
          Multiple Modules | <b>Not available until</b> Jun. 19th, 2026 | Due
          Jun. 26th @ 11:59 PM | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/courses/1234/assignments/123"
            className="wd-assignment-link"
          >
            Exam 2
          </Link>
          <br></br>
          Multiple Modules | <b>Not available until</b> Jun. 25th, 2026 | Due
          Jun. 26th @ 11:59 PM | 100 pts
        </li>
      </ul>
      <h3 id="wd-assignments-title">
        Projects: 20% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            href="/courses/1234/assignments/123"
            className="wd-assignment-link"
          >
            Final Project
          </Link>
          <br></br>
          Multiple Modules | <b>Not available until</b> Jun. 23rd, 2026 | Due
          Jun. 24th @ 11:59 PM | 200 pts
        </li>
      </ul>
    </div>
  );
}
