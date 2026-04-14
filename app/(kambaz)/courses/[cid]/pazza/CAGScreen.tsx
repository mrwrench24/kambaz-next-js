"use client";
import { RootState } from "@/app/(kambaz)/store";
import { FaCheckCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function CAGScreen() {
  const { sections } = useSelector((state: RootState) => state.postReducer);

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
          <div>{numPosts} total posts</div>
          <div>{numInstructorAnswer} instructor responses</div>
          <div>{numStudentAnswer} student responses</div>
          <div>123414512345 students enrolled</div>
        </div>
      </div>
    </div>
  );
}
