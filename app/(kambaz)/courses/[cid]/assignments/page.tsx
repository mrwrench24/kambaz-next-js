import Link from "next/link";
import AssignmentControls from "./AssignmentControls";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import {
  BsGripVertical,
  BsJournal,
  BsNewspaper,
  BsPencilSquare,
} from "react-icons/bs";
import AssignmentGroupButtons from "./AssignmentGroupButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentControls />
      <br />
      <br />
      <br />
      <br />

      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-assignment p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Assignments
            <AssignmentGroupButtons />
          </div>
          <ListGroup className="wd-assignments rounded-0 border-start border-4 border-success">
            <ListGroupItem className="wd-assignment p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <BsPencilSquare className="me-3 fs-5" />
              <Row>
                <span className="fw-bold">Assignment 1</span>
              </Row>
              <Row>
                <span className="text-muted fs-6">
                  Multiple Modules | Not available until May 6 at 12:00 AM | Due
                  May 13 at 11:59 PM | 100 pts
                </span>
              </Row>
              <AssignmentControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-assignment p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <BsPencilSquare className="me-3 fs-5" />
              <div className="d-inline-flex flex-column">
                <span className="fw-bold">Assignment 2</span>
                <span className="text-muted fs-6">
                  Multiple Modules | Not available until May 6 at 12:00 AM | Due
                  May 13 at 11:59 PM | 100 pts
                </span>
              </div>
              <AssignmentControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-assignment p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <BsPencilSquare className="me-3 fs-5" />
              <div className="d-inline-flex flex-column">
                <span className="fw-bold">Assignment 3</span>
                <span className="text-muted fs-6">
                  Multiple Modules | Not available until May 6 at 12:00 AM | Due
                  May 13 at 11:59 PM | 100 pts
                </span>
              </div>
              <AssignmentControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>

      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-assignment p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Exams
            <AssignmentGroupButtons />
          </div>
          <ListGroup className="wd-assignments rounded-0 border-start border-4 border-success">
            <ListGroupItem className="wd-assignment p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <BsPencilSquare className="me-3 fs-5" />
              <div
                className="d-inline-flex flex-column"
                style={{ width: "300px" }}
              >
                <span className="fw-bold">Exam 1</span>
                <span className="text-muted fs-6">
                  Multiple Modules | Not available until May 6 at 12:00 AM | Due
                  May 13 at 11:59 PM | 100 pts
                </span>
              </div>
              <AssignmentControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-assignment p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <BsPencilSquare className="me-3 fs-5" />
              <span className="fw-bold">Exam 2</span>
              <AssignmentControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
