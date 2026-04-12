import { Post } from "./types/types";
import PostFollowup from "./post_components/PostFollowup";
import PostContent from "./post_components/PostContent";
import AnswerDisplay from "./post_components/AnswerDisplay";
import { useSelector } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";

export default function PostScreen({ post }: { post: Post }) {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer,
  );

  return (
    <div>
      <div className="d-flex align-items-center border border-dark ps-1">
        <div>
          {post.postType} @{post.postNumber}
        </div>
        <div className="bg-secondary ps-3 pe-3 ms-auto d-flex align-items-center me-3">
          1 View
        </div>
      </div>

      {/* using key prevents some weird issues (forces rerender) */}
      <PostContent key={post.id} post={post} />

      <div className="border border-dark p-2">
        {post.postType === "question" && (
          <div>
            <div id="pazza-student-answer" className="border border-dark">
              <h5 className="p-1 ps-2">the students' answer</h5>

              <AnswerDisplay
                answer={post.studentAnswer}
                canEdit={currentUser.role === "STUDENT"}
              />
            </div>

            <div
              id="pazza-instructor-answer"
              className="border border-dark pt-1 mt-2"
            >
              <h5 className="p-1 ps-2">the instructors' answer</h5>
              <AnswerDisplay
                answer={post.instructorAnswer}
                canEdit={currentUser.role !== "STUDENT"}
              />
            </div>
          </div>
        )}

        <div id="pazza-follow-up-discussions" className="mt-2">
          <h4>followup discussions</h4>

          {post.followups.map((followup) => {
            return <PostFollowup key={followup.id} followup={followup} />;
          })}

          <input
            type="text"
            placeholder="A new followup discussion..."
            className="mt-2 flex-fill form-control"
          />
        </div>
      </div>
    </div>
  );
}
