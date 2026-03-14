import { Modal, Button } from "react-bootstrap";
export default function AssignmentDeleter({
  assignmentToDelete,
  handleCancel,
  handleDelete,
}) {
  return (
    <Modal show={assignmentToDelete} onHide={handleCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Assignment?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCancel}>
          {" "}
          Cancel{" "}
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          {" "}
          Delete{" "}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
