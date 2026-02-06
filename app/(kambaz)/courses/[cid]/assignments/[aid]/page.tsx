import {
  Button,
  Col,
  Form,
  FormCheck,
  FormControl,
  FormLabel,
  FormSelect,
  Row,
} from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <Form>
        <FormLabel>Assignment Name </FormLabel>
        <FormControl placeholder="Assignment Name..." />
        <FormControl
          className="mt-4"
          as="textarea"
          placeholder="Description..."
          rows={3}
        />

        <Row className="align-items-top mt-3">
          <Col sm={2}>
            <FormLabel>Points</FormLabel>
          </Col>
          <Col sm={10}>
            <FormControl placeholder="100" />
          </Col>
        </Row>

        <Row className="align-items-top mt-3">
          <Col sm={2}>
            <FormLabel>Assignment Group</FormLabel>
          </Col>
          <Col sm={10}>
            <FormSelect>
              <option value="ASSIGNMENTS">Assignments</option>
              <option value="EXAMS">Exams</option>
              <option value="QUIZZES">Quizzes</option>
            </FormSelect>
          </Col>
        </Row>

        <Row className="align-items-top mt-3">
          <Col sm={2}>
            <FormLabel>Display Grade as</FormLabel>
          </Col>
          <Col sm={10}>
            <FormSelect>
              <option value="PERCENTAGE">Percentage</option>
              <option value="POINTS">Points</option>
            </FormSelect>
          </Col>
        </Row>

        <Row className="align-items-top mt-3">
          <Col sm={2}>
            <FormLabel>Submission Type</FormLabel>
          </Col>
          <Col sm={10}>
            <div className="border rounded py-1 px-3">
              <FormSelect className="mt-2">
                <option value="ONLINE">Online</option>
                <option value="IN-PERSON">In-Person</option>
              </FormSelect>

              <FormCheck
                type="checkbox"
                defaultChecked={false}
                label="Text Entry"
                className="mt-2"
              />
              <FormCheck
                type="checkbox"
                defaultChecked={false}
                label="Website URL"
                className="mt-2"
              />
              <FormCheck
                type="checkbox"
                defaultChecked={false}
                label="Media"
                className="mt-2"
              />
              <FormCheck
                type="checkbox"
                defaultChecked={false}
                label="Student Annotation"
                className="mt-2"
              />
              <FormCheck
                type="checkbox"
                defaultChecked={false}
                label="File Upload"
                className="mt-2"
              />
            </div>
          </Col>
        </Row>

        <Row className="align-items-top mt-3">
          <Col sm={2}>
            <FormLabel>Assign</FormLabel>
          </Col>
          <Col sm={10}>
            <div className="border rounded py-1 px-3">
              <h4 className="mt-2">Assign to</h4>

              <FormControl placeholder="Students" />

              <h6 className="mt-2">Due</h6>
              <input type="date" defaultValue="2026-01-21" id="ae-until-date" />

              <Row className="mt-2 mb-2">
                <Col>
                  <h6>Available From</h6>
                  <input
                    type="date"
                    defaultValue="2026-01-21"
                    id="ae-until-date"
                  />
                </Col>
                <Col>
                  <h6>Until</h6>
                  <input
                    type="date"
                    defaultValue="2026-01-21"
                    id="ae-until-date"
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="align-items-end mt-3">
          <Col sm={2}></Col>
          <Col sm={10}>
            <Button
              variant="danger"
              size="lg"
              className="me-1 float-end"
              id="wd-add-assignment-btn"
            >
              Save
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="me-1 float-end"
              id="wd-add-assignment-btn"
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
