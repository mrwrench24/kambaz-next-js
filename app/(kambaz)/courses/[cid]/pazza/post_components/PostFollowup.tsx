import { Dropdown } from "react-bootstrap";
import { Followup } from "../types/types";
import { useState } from "react";
import PostFollowupReply from "./PostFollowupReply";

export default function PostFollowup({ followup }: { followup: Followup }) {
  const [resolved, setResolved] = useState(followup.resolved);

  return (
    <div className="bg-secondary p-1 border border-dark m-1" key={followup.id}>
      <div className="bg-secondary">
        <div className="d-flex align-items-center">
          <div className="flex-grow-1">
            <span>
              <span className="ps-2">
                <input
                  type="radio"
                  id={`${followup.id}-resolved`}
                  name={followup.id}
                  checked={resolved}
                  onChange={() => setResolved(true)}
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
                  checked={!resolved}
                  onChange={() => setResolved(false)}
                />
                <label htmlFor={`${name}-unresolved`} className="ps-1">
                  {" "}
                  Unresolved
                </label>
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
              return <PostFollowupReply key={reply.id} reply={reply} />;
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
}
