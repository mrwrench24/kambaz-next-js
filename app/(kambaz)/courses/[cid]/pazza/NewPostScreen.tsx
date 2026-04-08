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

export default function NewPostScreen() {
  const [value, setValue] = useState("simple text");

  return (
    <div>
      <div className="p-2 d-flex align-items-center" id="post-types">
        Post Type
        <span className="ps-4">
          <input type="radio" /> Question
        </span>
        <span className="ps-4">
          <input type="radio" /> Note
        </span>
      </div>
      <div className="p-2 light-blue-bg" id="post-create">
        <div className="pt-2">
          Post To
          <span className="ps-4">
            <input type="radio" /> Entire Class
          </span>
          <span className="ps-4">
            <input type="radio" /> Individual Student(s) / Instructors
          </span>
        </div>

        <div className="pt-2">
          Select Folders
          <span>
            <span className="folder-button">HW1</span>
            <span className="folder-button">HW2</span>
            <span className="folder-button">HW3</span>
            <span className="folder-button">HW4</span>
            <span className="folder-button">HW5</span>
            <span className="folder-button">HW6</span>
            <span className="folder-button">HW7</span>
          </span>
          <div className="ps-5">Manage and reorder folders</div>
        </div>

        <div className="d-flex align-items-center pt-2">
          Summary
          <input className="ms-2 flex-fill form-control" type="text" />
        </div>

        <div className="d-flex align-items-center pt-2">
          Details
          <div className="bg-white flex-fill m-2">
            {/* Gets replaced with a "rich text editor" component */}
            <EditorProvider>
              <Editor value={value}>
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
          <Button className="p-2 m-2">Post My Question</Button>
          <Button className="p-2 m-2">Cancel</Button>
        </span>
      </div>
    </div>
  );
}
