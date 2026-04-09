import { Button } from "react-bootstrap";
import { FaPencil } from "react-icons/fa6";

export default function ManageClassScreen() {
  const folders = [
    "hw1",
    "hw2",
    "hw3",
    "hw5",
    "hw5",
    "hw6",
    "project",
    "general",
  ];

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
          return (
            <div key={folder} className="d-flex align-items-center m-1">
              <span>
                <input type="checkbox" className="m-1" />
                Test
              </span>
              <div className="ms-auto">
                <Button>
                  <FaPencil /> Edit
                </Button>
              </div>
            </div>
          );
        })}

        <div className="d-flex align-items-center m-1">
          <span>
            <input type="checkbox" className="m-1" />
            Test
          </span>
          <div className="ms-auto">
            <Button className="m-1">Save</Button>
            <Button className="m-1">Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
