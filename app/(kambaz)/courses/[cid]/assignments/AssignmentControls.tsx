import { Button, FormControl, InputGroup } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import InputGroupText from "react-bootstrap/esm/InputGroupText";

export default function AssignmentControls() {
  return (
    <div id="wd-assignment-controls" className="text-nowrap d-flex">
      <InputGroup className="mb-3" style={{ maxWidth: "300px" }}>
        <InputGroupText>
          <BiSearch />
        </InputGroupText>
        <FormControl placeholder="Search..." />
      </InputGroup>

      <div className="ms-auto">
        <Button
          variant="danger"
          size="lg"
          className="me-1 float-end"
          id="wd-add-assignment-btn"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Assignment
        </Button>

        <Button
          variant="secondary"
          size="lg"
          className="me-1 float-end"
          id="wd-add-group"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Group
        </Button>
      </div>
    </div>
  );
}
