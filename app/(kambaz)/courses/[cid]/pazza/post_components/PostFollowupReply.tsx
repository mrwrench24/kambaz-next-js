import { Button, Dropdown } from "react-bootstrap";
import { FollowupReply } from "../types/types";
import { useSelector } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";
import { useState } from "react";
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

export default function PostFollowupReply({ reply }: { reply: FollowupReply }) {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer,
  );

  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(reply.content);

  const canEdit =
    currentUser.role !== "student" || reply.author === currentUser._id;

  return (
    <div key={reply.id} className="p-2">
      <div className="d-flex align-items-center">
        {editing ? (
          <div>
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <Button className="m-2" onClick={() => setEditing(false)}>
              Save
            </Button>
          </div>
        ) : (
          <div>
            <b>{reply.author}</b> 2 hours ago
            <p>{reply.content}</p>
          </div>
        )}

        {canEdit && !editing && (
          <div className="action-button ms-auto">
            <Dropdown>
              <Dropdown.Toggle variant="outline-primary" size="sm">
                Actions
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setEditing(true)}>
                  Edit
                </Dropdown.Item>
                <Dropdown.Item>Delete</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}
      </div>
    </div>
  );
}
