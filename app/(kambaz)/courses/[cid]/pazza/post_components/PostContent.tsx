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
import { deletePost } from "../postReducer";
import { usePazzaContext } from "../PazzaContext";

export default function PostContent({ post }: { post: Post }) {
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(post.content);

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
                  <Dropdown.Item
                    onClick={() => {
                      dispatch(deletePost(post.id));
                      setPage("cag");
                    }}
                  >
                    Delete
                  </Dropdown.Item>
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
                value={editValue}
                className="p-3"
                onChange={(e) => setEditValue(e.target.value)}
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
        {canEdit && (
          <Button onClick={() => setEditing(!editing)}>
            {editing ? "Save" : "Edit"}
          </Button>
        )}
        <div className="ps-2">
          <Commendations
            initialCommenders={post.commenders}
            commendationsFor={post.postType}
          />
        </div>
      </div>
    </div>
  );
}
