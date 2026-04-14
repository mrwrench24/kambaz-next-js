"use client";
import { RootState } from "@/app/(kambaz)/store";
import { FaCheckCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { usePazzaContext } from "./PazzaContext";

export default function CAGScreen() {
  const { cid } = usePazzaContext();
  const { sections } = useSelector((state: RootState) => state.postReducer);

  // TODO: Incorrect
  const { enrollments } = useSelector(
    (state: RootState) => state.enrollmentReducer,
  );

  const numEnrollments = enrollments.filter((e) => e.course === cid).length;

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

  return (
    <div className="p-2 light-blue-bg">
      <h4>Class at a Glance</h4>
      <div className="bg-secondary p-2 border border-black d-flex align-items-center">
        <div>
          <div>
            <FaCheckCircle className="checkmark" />
            <span className="ps-2">No unread posts</span>
          </div>
          <div>
            <FaCheckCircle className="checkmark" />
            <span className="ps-2">No unanswered posts</span>
          </div>
        </div>

        <div className="ms-auto pe-2">
          <div>{numPosts} total post(s)</div>
          <div>{numInstructorAnswer} instructor response(s)</div>
          <div>{numStudentAnswer} student response(s)</div>
          <div>{numEnrollments} student(s) enrolled</div>
        </div>
      </div>
    </div>
  );
}
