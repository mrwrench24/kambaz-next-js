import { Button, FormControl } from "react-bootstrap";

export default function PazzaPage() {
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
      <div
        className="p-2"
        id="post-create"
        style={{ backgroundColor: "lightblue" }}
      >
        <div>
          Post To
          <span className="ps-4">
            <input type="radio" /> Entire Class
          </span>
          <span className="ps-4">
            <input type="radio" /> Individual Student(s) / Instructors
          </span>
        </div>

        <div>
          Select Folders
          <span>
            <span className="p-2">HW1</span>
            <span className="p-2">HW2</span>
            <span className="p-2">HW3</span>
            <span className="p-2">HW4</span>
            <span className="p-2">HW5</span>
            <span className="p-2">HW6</span>
            <span className="p-2">HW7</span>
          </span>
          <div className="ps-5">Manage and reorder folders</div>
        </div>

        <div className="d-flex align-items-center">
          Summary
          <input className="ms-2 flex-fill form-control" type="text" />
        </div>

        <div className="d-flex align-items-center">
          Details
          {/* Gets replaced with a "rich text editor" component */}
          <input className="ms-2 flex-fill form-control" type="text" />
        </div>

        <span className="ms-5">
          <Button className="p-2 m-2">Post My Question</Button>
          <Button className="p-2 m-2">Save Draft</Button>
          <Button className="p-2 m-2">Cancel</Button>
        </span>
      </div>
    </div>
  );
}
