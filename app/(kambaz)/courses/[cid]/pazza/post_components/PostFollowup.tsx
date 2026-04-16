import { Button, Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import PostFollowupReply from "./PostFollowupReply";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";
import { deleteFollowup, updateFollowup } from "../reducers/followupReducer";
import { createReply, setReplies } from "../reducers/followupReplyReducer";
import * as client from "../clients/followupsClient";
import * as replyClient from "../clients/repliesClient";

export default function PostFollowup({ followupId }: { followupId: string }) {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer,
  );

  const { followups } = useSelector(
    (state: RootState) => state.followupReducer,
  );

  const { followupReplies } = useSelector(
    (state: RootState) => state.followupRepliesReducer,
  );

  const followup = followups.find((f) => f.id === followupId);

  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(followup.content);
  const [replyValue, setReplyValue] = useState("");

  const canEdit =
    currentUser.role !== "STUDENT" || followup.author === currentUser._id;

  const dispatch = useDispatch();

  function handleResolvedChange(setTo: boolean) {
    dispatch(updateFollowup({ ...followup, resolved: setTo }));
  }

  async function onEditFollowup() {
    if (editValue.length === 0) {
      return;
    }

    dispatch(updateFollowup({ ...followup, content: editValue }));
    setEditing(false);
  }

  async function onDeleteFollowup() {
    await client.deleteFollowup(followup.id);
    dispatch(deleteFollowup(followup.id));
  }

  async function onCreateReply() {
    if (replyValue.length === 0) {
      return;
    }

    const reply = await replyClient.createReply(replyValue, currentUser._id);
    dispatch(createReply(reply));

    dispatch(
      updateFollowup({
        ...followup,
        replies: [...followup.replies, reply.id],
      }),
    );

    setReplyValue("");
  }

  return (
    <div className="bg-secondary p-1 border border-dark m-1" key={followup.id}>
      <div className="bg-secondary m-1">
        <div className="d-flex align-items-center m-1">
          <div className="flex-grow-1">
            <span>
              <span className="ps-2">
                <input
                  type="radio"
                  id={`${name}-resolved`}
                  name={followup.id}
                  checked={followup.resolved}
                  onChange={() => handleResolvedChange(true)}
                />
                <label htmlFor={`${name}-resolved`} className="ps-1">
                  {" "}
                  Resolved
                </label>
              </span>

              <span className="ps-2">
                <input
                  type="radio"
                  id={`${name}-unresolved`}
                  name={followup.id}
                  checked={!followup.resolved}
                  onChange={() => handleResolvedChange(false)}
                />
                <label htmlFor={`${name}-unresolved`} className="ps-1">
                  {" "}
                  Unresolved
                </label>
              </span>
            </span>
          </div>

          {canEdit && (
            <div>
              <div className="action-button ms-auto">
                <Dropdown>
                  <Dropdown.Toggle variant="outline-primary" size="sm">
                    Actions
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setEditing(true)}>
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item onClick={onDeleteFollowup}>
                      Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          )}
        </div>

        <div className="d-flex align-items-center">
          <div>
            {editing ? (
              <div>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  style={{ minWidth: "400px" }}
                  className="p-1"
                />
                <Button className="m-2" onClick={onEditFollowup}>
                  Save
                </Button>
              </div>
            ) : (
              <div>
                <b>{followup.author}</b> 2 hours ago
                <p>{followup.content}</p>
              </div>
            )}
            {followup.replies.map((replyId) => {
              const reply = followupReplies.find((r) => r.id === replyId);

              if (!reply) {
                return;
              }

              return <PostFollowupReply key={reply.id} reply={reply} />;
            })}
          </div>
        </div>
      </div>

      <div className="p-1 ms-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onCreateReply();
          }}
        >
          <input
            type="text"
            placeholder="Reply to this followup discussion..."
            className="flex-fill form-control"
            value={replyValue}
            onChange={(e) => setReplyValue(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}
