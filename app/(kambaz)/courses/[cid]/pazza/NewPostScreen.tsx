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
import folders from "./database/folders";

export default function NewPostScreen() {
  const [value, setValue] = useState("simple text");
  const { setPage } = usePazzaContext();

  const [selected, setSelected] = useState<string[]>([]);

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

        <div className="pt-3">
          Select Folders
          <div className="d-flex flex-wrap gap-2 pt-1">
            {folders.map((folder) => {
              const isSelected = selected.includes(folder.id);

              return (
                <span
                  className={`folder-button ${isSelected && "selected"}`}
                  key={folder.id}
                  role="button"
                  onClick={() => {
                    if (isSelected) {
                      setSelected(selected.filter((fid) => fid !== folder.id));
                    } else {
                      setSelected([...selected, folder.id]);
                    }
                  }}
                >
                  {folder.name}
                </span>
              );
            })}
          </div>
          <div
            className="ps-5 pt-2 pb-1 link-primary"
            role="button"
            onClick={() => setPage("manage_class")}
          >
            Manage and reorder folders
          </div>
        </div>

        <div className="d-flex align-items-center pt-3">
          Summary
          <input className="ms-2 flex-fill form-control" type="text" />
        </div>

        <div className="d-flex align-items-center pt-3">
          Details
          <div className="bg-white flex-fill m-2">
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
