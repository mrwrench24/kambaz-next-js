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
import { Answer } from "../types/types";
import { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import Commendations from "./Commendations";

export default function AnswerDisplay({
  answer,
  canEdit,
}: {
  answer: Answer | null;
  canEdit: boolean;
}) {
  const [editValue, setEditValue] = useState(answer ? answer.content : "");
  const [editing, setEditing] = useState(false);

  if (answer && !editing) {
    return (
      <div>
        <div className="d-flex align-items-center">
          <div className="p-2">{answer.content}</div>
          {canEdit && (
            <div className="ms-auto m-2">
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
        <div className="bg-secondary ps-2 p-1 d-flex align-items-center">
          {canEdit && <Button onClick={() => setEditing(true)}>Edit</Button>}
          <div className="ps-2">
            <Commendations
              initialCommenders={answer.commenders}
              commendationsFor="answer"
            />
          </div>

          <div className="ms-auto">
            Updated 30 seconds ago by {answer.contributors.join(" and ")}
          </div>
        </div>
      </div>
    );
  } else if (editing || canEdit) {
    return (
      <div className="m-2">
        <EditorProvider>
          <Editor
            value={editValue}
            className="p-2"
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

        <Button onClick={() => setEditing(false)} className="mt-2">
          Save
        </Button>
      </div>
    );
  } else {
    return <div className="p-2">No answer yet...</div>;
  }
}
