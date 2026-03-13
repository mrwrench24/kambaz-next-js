"use client";
import { useParams } from "next/navigation";
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
import { RootState } from "../../../../store";
import { useDispatch, useSelector } from "react-redux";

import { addAssignment, updateAssignment } from "../reducer";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const { assignments } = useSelector(
    (state: RootState) => state.assignmentReducer,
  );

  const existingAssignment = assignments.find((a) => a._id === aid);
  const [assignment, setAssignment] = useState(
    existingAssignment ?? {
      _id: aid as string,
      title: "",
      course: cid as string,
      description: "",
      points: 100,
      due: "",
      availableFrom: "",
      availableUntil: "",
    },
  );

  useEffect(() => {
    if (existingAssignment) {
      setAssignment(existingAssignment);
    }
  }, [aid]);

  const dispatch = useDispatch();

  return (
    <div id="wd-assignments-editor">
      <Form>
        <FormLabel>Assignment Name </FormLabel>
        <FormControl
          placeholder="Assignment Name..."
          value={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
        />
        <FormControl
          className="mt-4"
          as="textarea"
          placeholder="Description..."
          value={assignment?.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
          rows={3}
        />

        <Row className="align-items-top mt-3">
          <Col sm={2}>
            <FormLabel>Points</FormLabel>
          </Col>
          <Col sm={10}>
            <FormControl
              placeholder="100"
              value={assignment?.points}
              onChange={(e) =>
                setAssignment({ ...assignment, points: Number(e.target.value) })
              }
            />
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
              <input
                type="date"
                value={assignment.due}
                onChange={(e) =>
                  setAssignment({ ...assignment, due: e.target.value })
                }
                id="ae-until-date"
              />

              <Row className="mt-2 mb-2">
                <Col>
                  <h6>Available From</h6>
                  <input
                    type="date"
                    value={assignment.availableFrom}
                    onChange={(e) =>
                      setAssignment({
                        ...assignment,
                        availableFrom: e.target.value,
                      })
                    }
                    id="ae-until-date"
                  />
                </Col>
                <Col>
                  <h6>Until</h6>
                  <input
                    type="date"
                    value={assignment.availableUntil}
                    onChange={(e) =>
                      setAssignment({
                        ...assignment,
                        availableUntil: e.target.value,
                      })
                    }
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
            <Link href={`/courses/${cid}/assignments`}>
              <Button
                variant="danger"
                size="lg"
                className="me-1 float-end"
                id="wd-add-assignment-btn"
                onClick={() =>
                  dispatch(
                    existingAssignment
                      ? updateAssignment(assignment)
                      : addAssignment(assignment),
                  )
                }
              >
                Save
              </Button>
            </Link>

            <Button
              href={`/courses/${cid}/assignments`}
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
