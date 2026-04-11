import { Button } from "react-bootstrap";
import { FaPencil } from "react-icons/fa6";
import folders from "./database/folders";
import { useState } from "react";

export default function ManageClassScreen() {
  const [editingId, setEditingId] = useState<string | null>();

  return (
    <div className="">
      <div className="bg-secondary d-flex align-items-center">
        <div className="ms-auto pe-2">Manage Folders</div>
      </div>

      <div className="p-2">
        <h3>Configure Class Folders</h3>

        <h5>Create New Folder</h5>
        <span>
          <input type="text" placeholder="Folder Name..." />

          <Button className="ms-2">Add Folder</Button>
        </span>

        <h5 className="mt-2">Manage Folders</h5>
        <Button className="bg-danger disabled">Delete Selected Folders</Button>

        {folders.map((folder) => {
          const editing = editingId && editingId === folder.id;

          return (
            <div key={folder.id}>
              {editing && (
                <div className="d-flex align-items-center m-1">
                  <span>
                    <input type="checkbox" className="m-1" />
                    <input type="text" defaultValue={folder.name} />
                  </span>

                  <div className="ms-auto">
                    <Button className="m-1" onClick={() => setEditingId(null)}>
                      Save
                    </Button>
                    <Button className="m-1" onClick={() => setEditingId(null)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
              {!editing && (
                <div key={folder.id} className="d-flex align-items-center m-1">
                  <span>
                    <input type="checkbox" className="m-1" />
                    {folder.name}
                  </span>

                  <div className="ms-auto">
                    <Button onClick={() => setEditingId(folder.id)}>
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
