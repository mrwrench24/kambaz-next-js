import { Button, Dropdown, FormControl } from "react-bootstrap";
import { useState } from "react";
import PostFollowupReply from "./PostFollowupReply";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";
import { deleteFollowup, updateFollowup } from "../followupReducer";

export default function PostFollowup({ followupId }: { followupId: string }) {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer,
  );

  const { followups } = useSelector(
    (state: RootState) => state.followupReducer,
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
                    <Dropdown.Item
                      onClick={() => dispatch(deleteFollowup(followup.id))}
                    >
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
                />
                <Button
                  className="m-2"
                  onClick={() => {
                    dispatch(
                      updateFollowup({ ...followup, content: editValue }),
                    );
                    setEditing(false);
                  }}
                >
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
              return <PostFollowupReply key={replyId} replyId={replyId} />;
            })}
          </div>
        </div>
      </div>

      <div className="p-1 ms-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            setReplyValue("");
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
