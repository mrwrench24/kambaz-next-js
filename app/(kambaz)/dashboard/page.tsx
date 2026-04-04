"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  FormControl,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as client from "../courses/client";
import {
  addNewCourse,
  deleteCourse,
  updateCourse,
  setCourses,
} from "../courses/reducer";
import { RootState } from "../store";
import { enroll, setEnrollments, unenroll } from "./reducer";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const dispatch = useDispatch();
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer,
  );
  const { enrollments } = useSelector(
    (state: RootState) => state.enrollmentReducer,
  );

  const [showAll, setShowAll] = useState(false);

  const [course, setCourse] = useState<any>({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const fetchUsersCourses = async () => {
    try {
      const courses = await client.findMyCourses();
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAllCourses = async () => {
    try {
      const courses = await client.fetchAllCourses();
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchEnrollments = async () => {
    try {
      const enrollments = await client.findMyEnrollments();
      dispatch(setEnrollments(enrollments));
    } catch (error) {
      console.error(error);
    }
  };

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
  };

  const onDeleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        }),
      ),
    );
  };

  const onEnroll = async (cid: string) => {
    const newEnrollment = await client.enrollIntoCourse(currentUser._id, cid);
    dispatch(setEnrollments([...enrollments, newEnrollment]));
  };

  const onUnenroll = async (cid: string) => {
    const enrollment = await client.unenrollFromCourse(currentUser._id, cid);
    dispatch(
      setEnrollments(
        enrollments.filter((e) => e.course !== cid && e.course._id !== cid),
      ),
    );
    dispatch(setCourses(courses.filter((c) => c._id !== enrollment.course)));
  };

  useEffect(() => {
    fetchUsersCourses();
    fetchEnrollments();
  }, [currentUser]);

  useEffect(() => {
    if (showAll) {
      fetchAllCourses();
    } else {
      fetchUsersCourses();
    }
  }, [showAll]);

  console.log(enrollments);

  if (!currentUser) {
    return "No user";
  } else {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        {currentUser.role === "FACULTY" && (
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={onAddNewCourse}
            >
              {" "}
              Add{" "}
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={onUpdateCourse}
              id="wd-update-course-click"
            >
              Update{" "}
            </button>
          </h5>
        )}
        {currentUser.role === "FACULTY" && (
          <span>
            <hr />
            <FormControl
              value={course.name}
              className="mb-2"
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
            <FormControl
              value={course.description}
              onChange={(e) =>
                setCourse({ ...course, description: e.target.value })
              }
            />
          </span>
        )}
        <h2 id="wd-dashboard-published">
          Published Courses ({courses.length})
        </h2>{" "}
        <Button
          variant="primary"
          className="float-end me-2"
          onClick={() => setShowAll(!showAll)}
        >
          {" "}
          Enrollments{" "}
        </Button>
        <hr />
        <div id="wd-dashboard-courses">
          <Row xs={1} md={5} className="g-4">
            {courses.map((course) => (
              <Col
                key={course._id}
                className="wd-dashboard-course"
                style={{ width: "300px" }}
              >
                <Card>
                  <Link
                    href={`/courses/${course._id}/home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <CardImg
                      src="/images/reactjs.jpg"
                      variant="top"
                      width="100%"
                      height={160}
                    />
                    <CardBody className="card-body">
                      <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course.name}{" "}
                      </CardTitle>
                      <CardText
                        className="wd-dashboard-course-description overflow-hidden"
                        style={{ height: "100px" }}
                      >
                        {course.description}{" "}
                      </CardText>

                      {currentUser.role === "FACULTY" && (
                        <span>
                          <button
                            className="btn btn-danger"
                            onClick={(event) => {
                              event.preventDefault();
                              onDeleteCourse(course._id);
                            }}
                          >
                            Delete
                          </button>

                          <button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end"
                          >
                            Edit
                          </button>
                        </span>
                      )}

                      {enrollments.some(
                        (enrollment) =>
                          enrollment.user === currentUser._id &&
                          (enrollment.course._id === course._id ||
                            enrollment.course === course._id),
                      ) && <Button variant="primary"> Go </Button>}

                      {/* yeah, nasty arrow function, but needed to have enrollments
                        available as a variable to read in here... */}
                      {(() => {
                        const enrollment = enrollments.find(
                          (e) =>
                            e.user === currentUser._id &&
                            (e.course._id === course._id ||
                              e.course === course._id),
                        );

                        return enrollment ? (
                          <Button
                            className="btn btn-danger float-end"
                            onClick={async (e) => {
                              e.preventDefault();
                              await onUnenroll(enrollment.course);
                            }}
                          >
                            Unenroll
                          </Button>
                        ) : (
                          <Button
                            className="btn btn-success float-end"
                            onClick={async (e) => {
                              e.preventDefault();
                              await onEnroll(course._id);
                            }}
                          >
                            Enroll
                          </Button>
                        );
                      })()}
                    </CardBody>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}
