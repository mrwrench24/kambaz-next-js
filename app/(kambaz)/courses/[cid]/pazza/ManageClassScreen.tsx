"use client";
import { Button } from "react-bootstrap";
import { FaPencil } from "react-icons/fa6";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";
import {
  createFolder,
  deleteFolders,
  updateFolder,
} from "./reducers/folderReducer";
import { Folder } from "./types/types";
import * as client from "./clients/foldersClient";
import { useParams } from "next/navigation";

export default function ManageClassScreen() {
  const { folders } = useSelector((state: RootState) => state.folderReducer);
  const { cid } = useParams();

  const [newFolderName, setNewFolderName] = useState("");
  const [editFolder, setEditFolder] = useState<Folder | null>(null);
  const [selectedFolders, setSelectedFolders] = useState<string[]>([]);

  const dispatch = useDispatch();

  async function onCreateFolder() {
    if (newFolderName.length === 0 || !cid) {
      return;
    }

    await client.createFolder(cid as string, newFolderName);
    dispatch(createFolder(newFolderName));
    setNewFolderName("");
  }

  async function onDeleteFolders() {
    if (selectedFolders.length === 0) {
      return;
    }

    await client.deleteFolders(selectedFolders);
    dispatch(deleteFolders(selectedFolders));
    setSelectedFolders([]);
  }

  async function onEditFolder() {
    if (editFolder === null) {
      return;
    }

    await client.updateFolder(editFolder);
    dispatch(updateFolder(editFolder));
    setEditFolder(null);
  }

  return (
    <div className="">
      <div className="bg-secondary d-flex align-items-center">
        <div className="ms-auto pe-2">Manage Folders</div>
      </div>

      <div className="p-2">
        <h3>Configure Class Folders</h3>

        <h5>Create New Folder</h5>
        <span>
          <input
            type="text"
            placeholder="Folder Name..."
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
          />

          <Button
            className="ms-2"
            disabled={newFolderName.length === 0}
            onClick={onCreateFolder}
          >
            Add Folder
          </Button>
        </span>

        <h5 className="mt-2">Manage Folders</h5>
        <Button
          className="bg-danger"
          disabled={selectedFolders.length === 0}
          onClick={onDeleteFolders}
        >
          Delete Selected Folders
        </Button>

        {folders.map((folder) => {
          const editing = editFolder && editFolder.id === folder.id;
          const selected = selectedFolders.includes(folder.id);

          return (
            <div key={folder.id}>
              {editing && (
                <div className="d-flex align-items-center m-1">
                  <span>
                    <input
                      type="checkbox"
                      className="m-1"
                      checked={selected}
                      onChange={() =>
                        setSelectedFolders(() =>
                          selected
                            ? selectedFolders.filter((fid) => fid !== folder.id)
                            : [...selectedFolders, folder.id],
                        )
                      }
                    />
                    <input
                      type="text"
                      defaultValue={folder.name}
                      placeholder="Folder Name..."
                      onChange={(e) =>
                        setEditFolder({ ...editFolder, name: e.target.value })
                      }
                    />
                  </span>

                  <div className="ms-auto">
                    <Button className="m-1" onClick={onEditFolder}>
                      Save
                    </Button>
                    <Button className="m-1" onClick={() => setEditFolder(null)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
              {!editing && (
                <div key={folder.id} className="d-flex align-items-center m-1">
                  <span>
                    <input
                      type="checkbox"
                      className="m-1"
                      checked={selected}
                      onChange={() =>
                        setSelectedFolders(() =>
                          selected
                            ? selectedFolders.filter((fid) => fid !== folder.id)
                            : [...selectedFolders, folder.id],
                        )
                      }
                    />
                    {folder.name}
                  </span>

                  <div className="ms-auto">
                    <Button onClick={() => setEditFolder(folder)}>
                      <FaPencil /> Edit
                    </Button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
