"use client";
import { RootState } from "@/app/(kambaz)/store";
import { FaCheckCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { usePazzaContext } from "./PazzaContext";
import { FaCircleXmark } from "react-icons/fa6";

export default function CAGScreen() {
  const { usersInCourse } = usePazzaContext();
  const { sections } = useSelector((state: RootState) => state.postReducer);
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer,
  );

  const numPosts = sections.reduce(
    (count, section) => (count += section.posts.length),
    0,
  );

  const numInstructorAnswer = sections.reduce(
    (count, section) =>
      count + section.posts.filter((post) => post.instructorAnswer).length,
    0,
  );

  const numStudentAnswer = sections.reduce(
    (count, section) =>
      count + section.posts.filter((post) => post.studentAnswer).length,
    0,
  );

  const numUnanswered = sections.reduce(
    (count, section) =>
      count +
      section.posts.filter(
        (post) =>
          post.postType === "question" &&
          post.instructorAnswer === null &&
          post.studentAnswer === null,
      ).length,
    0,
  );

  const numUnread = sections.reduce(
    (count, section) =>
      count +
      section.posts.filter((post) => !post.viewers.includes(currentUser._id))
        .length,
    0,
  );

  return (
    <div className="p-2 light-blue-bg">
      <h4>Class at a Glance</h4>
      <div className="bg-secondary p-2 border border-black d-flex align-items-center">
        <div>
          {numUnread === 0 ? (
            <div>
              <FaCheckCircle className="checkmark" />
              <span className="ps-2">No unread posts</span>
            </div>
          ) : (
            <div>
              <FaCircleXmark className="xmark" />
              <span className="ps-2">{numUnread} unread posts</span>
            </div>
          )}
          {numUnanswered === 0 ? (
            <div>
              <FaCheckCircle className="checkmark" />
              <span className="ps-2">No unanswered posts</span>
            </div>
          ) : (
            <div>
              <FaCircleXmark className="xmark" />
              <span className="ps-2">{numUnanswered} unanswered posts</span>
            </div>
          )}
        </div>

        <div className="ms-auto pe-2">
          <div>{numPosts} total post(s)</div>
          <div>{numInstructorAnswer} instructor response(s)</div>
          <div>{numStudentAnswer} student response(s)</div>
          <div>{usersInCourse.length} student(s) enrolled</div>
        </div>
      </div>
    </div>
  );
}
