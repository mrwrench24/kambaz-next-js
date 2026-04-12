import { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa6";
import {
  BtnBold,
  BtnBulletList,
  BtnItalic,
  BtnStrikeThrough,
  BtnUnderline,
  Editor,
  EditorProvider,
  Toolbar,
} from "react-simple-wysiwyg";
import { Post } from "./types/types";
import folders from "./database/folders";
import AnswerControlBar from "./AnswerControlBar";
import PostFollowup from "./post_components/PostFollowup";
import PostContent from "./post_components/PostContent";

export default function PostScreen({ post }: { post: Post }) {
  const [value, setValue] = useState("Test data");

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

              {post.studentAnswer ? (
                <AnswerControlBar
                  contributors={["Eric Cartman", "Stan Marsh"]}
                />
              ) : (
                <div className="m-2">
                  <EditorProvider>
                    <Editor value={value} className="p-2">
                      <Toolbar>
                        <BtnBold />
                        <BtnItalic />
                        <BtnUnderline />
                        <BtnBulletList />
                        <BtnStrikeThrough />
                      </Toolbar>
                    </Editor>
                  </EditorProvider>
                </div>
              )}
            </div>

            <div
              id="pazza-instructor-answer"
              className="border border-dark pt-1 mt-2"
            >
              <h5 className="p-1 ps-2">the instructors' answer</h5>
              {post.instructorAnswer ? (
                <AnswerControlBar contributors={["Eric Cartman"]} />
              ) : (
                <div className="m-2">
                  <EditorProvider>
                    <Editor value={value} className="p-2">
                      <Toolbar>
                        <BtnBold />
                        <BtnItalic />
                        <BtnUnderline />
                        <BtnBulletList />
                        <BtnStrikeThrough />
                      </Toolbar>
                    </Editor>
                  </EditorProvider>
                </div>
              )}
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
