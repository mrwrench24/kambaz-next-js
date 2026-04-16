import PostFollowup from "./post_components/PostFollowup";
import PostContent from "./post_components/PostContent";
import AnswerDisplay from "./post_components/AnswerDisplay";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";
import { updatePost } from "./reducers/postReducer";
import { useEffect, useState } from "react";
import { createFollowup, setFollowups } from "./reducers/followupReducer";
import * as followupClient from "./clients/followupsClient";
import * as repliesClient from "./clients/repliesClient";
import { setReplies } from "./reducers/followupReplyReducer";

export default function PostScreen({ postId }: { postId: string }) {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer,
  );
  const { sections } = useSelector((state: RootState) => state.postReducer);
  const { followups } = useSelector(
    (state: RootState) => state.followupReducer,
  );

  const dispatch = useDispatch();

  const [newFollowup, setNewFollowup] = useState("");

  const post = sections
    .find((section) => section.posts.map((post) => post.id).includes(postId))
    .posts.find((post) => post.id === postId);

  useEffect(() => {
    if (!post) {
      return;
    }

    followupClient.getFollowupsByIds(post.followups).then((followups) => {
      if (!followups) {
        return;
      }

      dispatch(setFollowups(followups));

      const replyIds = followups.flatMap((f) => f.replies);

      repliesClient.getReplyByIds(replyIds).then((replies) => {
        if (!replies) {
          return;
        }

        dispatch(setReplies(replies));
      });
    });
  }, [post]);

  function handleStudentAnswerChange(newAnswer: string) {
    const prevStudentAnswer = post.studentAnswer;

    if (!prevStudentAnswer) {
      dispatch(
        updatePost({
          ...post,
          studentAnswer: {
            content: newAnswer,
            contributors: [currentUser._id],
            commenders: [],
          },
        }),
      );
    } else {
      const updatedContributors = prevStudentAnswer.contributors.includes(
        currentUser._id,
      )
        ? prevStudentAnswer.contributors
        : [...prevStudentAnswer.contributors, currentUser._id];

      dispatch(
        updatePost({
          ...post,
          studentAnswer: {
            content: newAnswer,
            contributors: updatedContributors,
            commenders: prevStudentAnswer.commenders,
          },
        }),
      );
    }
  }

  function handleInstructorAnswerChange(newAnswer: string) {
    const prevInstructorAnswer = post.instructorAnswer;

    if (!prevInstructorAnswer) {
      dispatch(
        updatePost({
          ...post,
          instructorAnswer: {
            content: newAnswer,
            contributors: [currentUser._id],
            commenders: [],
          },
        }),
      );
    } else {
      const updatedContributors = prevInstructorAnswer.contributors.includes(
        currentUser._id,
      )
        ? prevInstructorAnswer.contributors
        : [...prevInstructorAnswer.contributors, currentUser._id];

      dispatch(
        updatePost({
          ...post,
          instructorAnswer: {
            content: newAnswer,
            contributors: updatedContributors,
            commenders: prevInstructorAnswer.commenders,
          },
        }),
      );
    }
  }

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
      <PostContent postId={post.id} />

      <div className="border border-dark p-2">
        {post.postType === "question" && (
          <div>
            <div id="pazza-student-answer" className="border border-dark">
              <h5 className="p-1 ps-2">the students' answer</h5>

              <AnswerDisplay
                answer={post.studentAnswer}
                canEdit={currentUser.role === "STUDENT"}
                onEdit={handleStudentAnswerChange}
                changeCommended={(to) => {
                  if (to) {
                    dispatch(
                      updatePost({
                        ...post,
                        studentAnswer: {
                          ...post.studentAnswer,
                          commenders: [
                            ...post.studentAnswer.commenders,
                            currentUser._id,
                          ],
                        },
                      }),
                    );
                  } else {
                    dispatch(
                      updatePost({
                        ...post,
                        studentAnswer: {
                          ...post.studentAnswer,
                          commenders: post.studentAnswer.commenders.filter(
                            (c) => c !== currentUser._id,
                          ),
                        },
                      }),
                    );
                  }
                }}
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
                onEdit={handleInstructorAnswerChange}
                changeCommended={(to) => {
                  if (to) {
                    dispatch(
                      updatePost({
                        ...post,
                        instructorAnswer: {
                          ...post.instructorAnswer,
                          commenders: [
                            ...post.instructorAnswer.commenders,
                            currentUser._id,
                          ],
                        },
                      }),
                    );
                  } else {
                    dispatch(
                      updatePost({
                        ...post,
                        instructorAnswer: {
                          ...post.instructorAnswer,
                          commenders: post.instructorAnswer.commenders.filter(
                            (c) => c !== currentUser._id,
                          ),
                        },
                      }),
                    );
                  }
                }}
              />
            </div>
          </div>
        )}

        <div id="pazza-follow-up-discussions" className="mt-2">
          <h4>followup discussions</h4>

          {post.followups.map((followupId) => {
            const followup = followups.find((f) => f.id === followupId);

            if (!followup) {
              return;
            }

            return <PostFollowup key={followup.id} followupId={followup.id} />;
          })}

          <form
            onSubmit={(e) => {
              e.preventDefault();

              const id = `${Math.random()}`;

              dispatch(
                createFollowup({
                  id,
                  content: newFollowup,
                  authorId: currentUser._id,
                }),
              );

              dispatch(
                updatePost({
                  ...post,
                  followups: [...post.followups, id],
                }),
              );

              setNewFollowup("");
            }}
          >
            <input
              type="text"
              placeholder="A new followup discussion..."
              className="mt-2 flex-fill form-control"
              value={newFollowup}
              onChange={(e) => setNewFollowup(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
