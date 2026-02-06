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
              <AssignmentControlButtons />
              <div className="d-flex">
                <BsGripVertical className="me-2 fs-3" />
                <BsPencilSquare className="me-3 fs-5 text-success" />
                <div>
                  <a href="assignments/123" className="fw-bold">
                    Assignment 1
                  </a>
                  <div className="text-muted fs-6">
                    <span className="text-danger">Multiple Modules</span> |{" "}
                    <b>Not available until</b> May 6 at 12:00 AM | Due May 13 at
                    11:59 PM | 100 pts
                  </div>
                </div>
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-assignment p-3 ps-1">
              <AssignmentControlButtons />
              <div className="d-flex">
                <BsGripVertical className="me-2 fs-3" />
                <BsPencilSquare className="me-3 fs-5 text-success" />
                <div>
                  <a href="assignments/123" className="fw-bold">
                    Assignment 2
                  </a>
                  <div className="text-muted fs-6">
                    <span className="text-danger">Multiple Modules</span> |{" "}
                    <b>Not available until</b> May 6 at 12:00 AM | Due May 13 at
                    11:59 PM | 100 pts
                  </div>
                </div>
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-assignment p-3 ps-1">
              <AssignmentControlButtons />
              <div className="d-flex">
                <BsGripVertical className="me-2 fs-3" />
                <BsPencilSquare className="me-3 fs-5 text-success" />
                <div>
                  <a href="assignments/123" className="fw-bold">
                    Assignment 3
                  </a>
                  <div className="text-muted fs-6">
                    <span className="text-danger">Multiple Modules</span> |{" "}
                    <b>Not available until</b> May 6 at 12:00 AM | Due May 13 at
                    11:59 PM | 100 pts
                  </div>
                </div>
              </div>
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
              <AssignmentControlButtons />
              <div className="d-flex">
                <BsGripVertical className="me-2 fs-3" />
                <BsPencilSquare className="me-3 fs-5 text-success" />
                <div>
                  <a href="assignments/123" className="fw-bold">
                    Exam 1
                  </a>
                  <div className="text-muted fs-6">
                    <span className="text-danger">Multiple Modules</span> |{" "}
                    <b>Not available until</b> May 6 at 12:00 AM | Due May 13 at
                    11:59 PM | 100 pts
                  </div>
                </div>
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-assignment p-3 ps-1">
              <AssignmentControlButtons />
              <div className="d-flex">
                <BsGripVertical className="me-2 fs-3" />
                <BsPencilSquare className="me-3 fs-5 text-success" />
                <div>
                  <a href="assignments/123" className="fw-bold">
                    Exam 2
                  </a>
                  <div className="text-muted fs-6">
                    <span className="text-danger">Multiple Modules</span> |{" "}
                    <b>Not available until</b> May 6 at 12:00 AM | Due May 13 at
                    11:59 PM | 100 pts
                  </div>
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
