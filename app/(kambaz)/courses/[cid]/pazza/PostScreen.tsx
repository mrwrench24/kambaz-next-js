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

export default function PostScreen({ post }: { post: Post }) {
  const postFolders = post.folders.map((folderId) =>
    folders.find((folder) => folder.id === folderId),
  );

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

      <div className="border border-dark">
        <div id="pazza-question-content" className="ps-2 pb-2">
          <div className="d-flex align-items-center ps-2 pt-2">
            <div>
              <h2>{post.title}</h2>
            </div>

            <div className="action-button ms-auto d-flex align-items-center">
              <Dropdown>
                <Dropdown.Toggle variant="outline-primary" size="sm">
                  Actions
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item>Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <h5 className="ps-2">By {post.author}</h5>
          <p className="p-2">{post.content}</p>

          <span className="p">
            {postFolders.map((folder) => {
              return (
                <span key={folder.id} className="folder-button">
                  {folder.name}
                </span>
              );
            })}
          </span>
        </div>

        <div className="bg-secondary ps-2 p-1 d-flex align-items-center">
          <Button>Edit</Button>
          <div className="ps-2">
            <span role="button" className="link-primary">
              good {post.postType}
            </span>{" "}
            | {post.commenders.length}
          </div>
        </div>
      </div>

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
            return (
              <div
                className="bg-secondary p-1 border border-dark m-1"
                key={followup.id}
              >
                <div className="bg-secondary">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                      <span>
                        <span className="ps-2">
                          <input type="radio" /> Resolved
                        </span>
                        <span className="ps-2">
                          <input type="radio" /> Unresolved
                        </span>
                      </span>
                    </div>

                    <div>
                      <div className="action-button ms-auto">
                        <Dropdown>
                          <Dropdown.Toggle variant="outline-primary" size="sm">
                            Actions
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Edit</Dropdown.Item>
                            <Dropdown.Item>Delete</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <div>
                      <b>{followup.author}</b> 3 hours ago
                      <div>{followup.content}</div>
                      {followup.replies.map((reply) => {
                        return (
                          <div key={reply.id} className="p-2">
                            <div className="d-flex align-items-center">
                              <div>
                                <b>{reply.author}</b> 2 hours ago
                                <p>{reply.content}</p>
                              </div>
                              <div className="action-button ms-auto">
                                <Dropdown>
                                  <Dropdown.Toggle
                                    variant="outline-primary"
                                    size="sm"
                                  >
                                    Actions
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <Dropdown.Item>Edit</Dropdown.Item>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="p-2 ms-2">
                  <input
                    type="text"
                    placeholder="Reply to this followup discussion..."
                    className="flex-fill form-control"
                  />
                </div>
              </div>
            );
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
