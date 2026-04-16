import { Button, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";
import { useState } from "react";
import { deleteReply, updateReply } from "../reducers/followupReplyReducer";
import * as client from "../clients/repliesClient";
import { FollowupReply } from "../types/types";

export default function PostFollowupReply({ reply }: { reply: FollowupReply }) {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer,
  );

  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(reply.content);

  const canEdit =
    currentUser.role !== "STUDENT" || reply.author === currentUser._id;

  async function onDeleteReply(id: string) {
    await client.deleteReply(id);
    dispatch(deleteReply(reply.id));
  }

  async function onEditReply() {
    if (editValue === "") {
      return;
    }

    await client.updateReply({ ...reply, content: editValue });
    dispatch(updateReply({ ...reply, content: editValue }));
    setEditing(false);
  }

  if (!reply) {
    return;
  }

  return (
    <div key={reply.id} className="p-1 ms-2">
      <div className="d-flex align-items-center">
        {editing ? (
          <div>
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              style={{ minWidth: "400px" }}
              className="p-1"
            />
            <Button className="m-2" onClick={onEditReply}>
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
                <Dropdown.Item onClick={() => onDeleteReply(reply.id)}>
                  Delete
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}
      </div>
    </div>
  );
}
