import { useState } from "react";
import { Folder, Post } from "../types/types";
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
import { Button, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";
import Commendations from "./Commendations";
import { deletePost, updatePost } from "../reducers/postReducer";
import { usePazzaContext } from "../PazzaContext";
import * as client from "../clients/postsClient";

export default function PostContent({ postId }: { postId: string }) {
  const { sections } = useSelector((state: RootState) => state.postReducer);
  const post = sections
    .find((section) => section.posts.map((post) => post.id).includes(postId))
    .posts.find((post) => post.id === postId);

  const [editing, setEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(post.content);

  const { folders } = useSelector((state: RootState) => state.folderReducer);

  const postFolders = post.folders
    .map((folderId) => folders.find((folder) => folder.id === folderId))
    // for now, if the folder went missing, just safely ignore it / filter it out
    .filter((f): f is Folder => f !== undefined);

  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer,
  );

  const { setPage } = usePazzaContext();

  const canEdit =
    currentUser._id === post.author || currentUser.role !== "STUDENT";

  const dispatch = useDispatch();

  async function onEditPost() {
    if (editedContent.length === 0) {
      return;
    }

    await client.updatePost({ ...post, content: editedContent });
    dispatch(updatePost({ ...post, content: editedContent }));
    setEditing(false);
  }

  async function onDeletePost() {
    if (!post) {
      return;
    }

    await client.deletePost(post.id);
    dispatch(deletePost(post.id));
    setPage("cag");
  }

  return (
    <div className="border border-dark">
      <div id="pazza-question-content" className="ps-2 pb-2">
        <div className="d-flex align-items-center ps-2 pt-2">
          <div>
            <h2>{post.title}</h2>
          </div>

          {canEdit && (
            <div className="action-button ms-auto d-flex align-items-center">
              <Dropdown>
                <Dropdown.Toggle variant="outline-primary" size="sm">
                  Actions
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setEditing(true)}>
                    Edit
                  </Dropdown.Item>
                  <Dropdown.Item onClick={onDeletePost}>Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
        </div>

        <h5 className="ps-2">By {post.author}</h5>

        {editing ? (
          <div className="m-2">
            <EditorProvider>
              <Editor
                value={editedContent}
                className="p-3"
                onChange={(e) => setEditedContent(e.target.value)}
                key={post.id}
              >
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
        ) : (
          <div>
            <p className="p-2">{post.content}</p>
          </div>
        )}

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
        {/* TODO: add a cancel button */}
        {canEdit && (
          <Button
            onClick={() => {
              if (editing) {
                onEditPost();
              } else {
                setEditing(true);
              }
            }}
          >
            {editing ? "Save" : "Edit"}
          </Button>
        )}

        {editing && (
          <Button
            onClick={() => {
              setEditing(false);
              setEditedContent(post.content);
            }}
            className="ms-2"
            variant="danger"
          >
            Cancel
          </Button>
        )}
        <div className="ps-2">
          <Commendations
            commenders={post.commenders}
            commendationsFor={post.postType}
            onCommendationPressed={() => {
              const commended = post.commenders.includes(currentUser._id);

              if (commended) {
                dispatch(
                  updatePost({
                    ...post,
                    commenders: post.commenders.filter(
                      (c) => c !== currentUser._id,
                    ),
                  }),
                );
              } else {
                dispatch(
                  updatePost({
                    ...post,
                    commenders: [...post.commenders, currentUser._id],
                  }),
                );
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
