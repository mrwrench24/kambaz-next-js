"use client";
import { useState } from "react";
import { Button } from "react-bootstrap";
import {
  BtnBold,
  BtnItalic,
  BtnUnderline,
  Editor,
  EditorProvider,
  Toolbar,
} from "react-simple-wysiwyg";
import { usePazzaContext } from "./PazzaContext";
import { NewPost } from "./types/types";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./reducers/postReducer";
import { RootState } from "@/app/(kambaz)/store";
import * as client from "./clients/postsClient";
import { useParams } from "next/navigation";

export default function NewPostScreen() {
  const { setPage, usersInCourse } = usePazzaContext();

  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer,
  );

  const { cid } = useParams();

  const [newPost, setNewPost] = useState<NewPost>({
    postType: "question",
    postTo: "all",
    folders: [],
    summary: "",
    details: "",
    authorId: currentUser._id,
  });

  const [showWarning, setShowWarning] = useState(false);
  const [selectedUserIds, setSelectedUserIds] = useState([]);

  const { folders } = useSelector((state: RootState) => state.folderReducer);

  const dispatch = useDispatch();

  async function handlePostClicked() {
    if (
      newPost.summary.length <= 0 ||
      newPost.summary.length > 100 ||
      newPost.folders.length === 0
    ) {
      setShowWarning(true);
      return;
    }

    const post = await client.createPost(cid as string, newPost);
    dispatch(addPost(post));
    setPage("cag");
  }

  return (
    <div>
      <div className="p-2 d-flex align-items-center" id="post-types">
        Post Type
        <span className="ps-4">
          <input
            id="post-type-q"
            name="postType"
            type="radio"
            checked={newPost.postType === "question"}
            onChange={() => setNewPost({ ...newPost, postType: "question" })}
          />{" "}
          <label htmlFor="post-type-q">Question</label>
        </span>
        <span className="ps-4">
          <input
            id="post-type-n"
            name="postType"
            type="radio"
            checked={newPost.postType === "note"}
            onChange={() => setNewPost({ ...newPost, postType: "note" })}
          />{" "}
          <label htmlFor="post-type-n">Note</label>
        </span>
      </div>
      <div className="p-2 light-blue-bg" id="post-create">
        {showWarning && (
          <div className="border border-danger p-2">
            A summary of no more than 100 characters at least one folder are
            needed. Please fill out all fields!
          </div>
        )}

        <div className="pt-2">
          Post To
          <span className="ps-4">
            <input
              id="post-to-entire"
              name="postTo"
              type="radio"
              checked={newPost.postTo === "all"}
              onChange={() => setNewPost({ ...newPost, postTo: "all" })}
            />{" "}
            <label htmlFor="post-to-entire">Entire Class</label>
          </span>
          <span className="ps-4">
            <input
              id="post-to-individual"
              name="postTo"
              type="radio"
              checked={newPost.postTo === "individual"}
              onChange={() => setNewPost({ ...newPost, postTo: "individual" })}
            />{" "}
            <label htmlFor="post-to-individual">
              Individual Student(s) / Instructors
            </label>
          </span>
          {newPost.postTo === "individual" && (
            <div>
              {usersInCourse.map((user) => {
                const selected = selectedUserIds.includes(user._id);

                return (
                  <span key={user._id} className="m-2 p-1 bg-secondary">
                    <input
                      type="checkbox"
                      className="me-1"
                      checked={selected}
                      onChange={() =>
                        setSelectedUserIds(() =>
                          selected
                            ? selectedUserIds.filter((uid) => uid !== user._id)
                            : [...selectedUserIds, user._id],
                        )
                      }
                    />
                    {user.firstName + " " + user.lastName}
                  </span>
                );
              })}
            </div>
          )}
        </div>

        <div className="pt-3">
          Select Folders
          <div className="d-flex flex-wrap gap-2 pt-1">
            {folders.map((folder) => {
              const isSelected = newPost.folders.includes(folder.id);

              return (
                <span
                  className={`folder-button ${isSelected && "selected"}`}
                  key={folder.id}
                  role="button"
                  onClick={() => {
                    if (isSelected) {
                      setNewPost({
                        ...newPost,
                        folders: newPost.folders.filter((f) => f !== folder.id),
                      });
                    } else {
                      setNewPost({
                        ...newPost,
                        folders: [...newPost.folders, folder.id],
                      });
                    }
                  }}
                >
                  {folder.name}
                </span>
              );
            })}
          </div>
          {currentUser.role !== "STUDENT" && (
            <div
              className="ps-5 pt-2 pb-1 link-primary"
              role="button"
              onClick={() => setPage("manage_class")}
            >
              Manage and reorder folders
            </div>
          )}
        </div>

        <div className="d-flex align-items-center pt-3">
          Summary
          <input
            className="ms-2 flex-fill form-control"
            type="text"
            placeholder="A brief summary here..."
            value={newPost.summary}
            onChange={(e) =>
              setNewPost({ ...newPost, summary: e.target.value })
            }
          />
        </div>

        <div className="d-flex align-items-center pt-3">
          Details
          <div className="bg-white flex-fill m-2">
            <EditorProvider>
              <Editor
                value={newPost.details}
                onChange={(e) =>
                  setNewPost({ ...newPost, details: e.target.value })
                }
                placeholder="Your question / note here..."
              >
                <Toolbar>
                  <BtnBold />
                  <BtnItalic />
                  <BtnUnderline />
                </Toolbar>
              </Editor>
            </EditorProvider>
          </div>
        </div>

        <span className="ms-5 pt-2">
          <Button className="p-2 m-2" onClick={handlePostClicked}>
            Post My Question
          </Button>
          <Button className="p-2 m-2" onClick={() => setPage("cag")}>
            Cancel
          </Button>
        </span>
      </div>
    </div>
  );
}
