import { Button } from "react-bootstrap";
import {
  FaBars,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaI,
  FaNewspaper,
  FaS,
} from "react-icons/fa6";
import "./index.css";
import { usePazzaContext } from "./PazzaContext";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";

export default function PostNavigation() {
  const { setPage } = usePazzaContext();
  const [expanded, setExpanded] = useState([true, true, false]);
  const [showControls, setShowControls] = useState(true);

  const { sections } = useSelector((state: RootState) => state.postReducer);

  if (!showControls) {
    return (
      <div className="bg-secondary border border-dark">
        <div>
          <FaChevronRight
            role="button"
            className="m-2"
            onClick={() => setShowControls(true)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-secondary border border-dark">
      <div>
        <FaChevronLeft
          role="button"
          className="m-2"
          onClick={() => setShowControls(false)}
        />
      </div>

      <div className="d-flex align-items-center p-1">
        <Button className="m-1" onClick={() => setPage("new_post")}>
          <FaNewspaper /> New Post
        </Button>
        <input type="text" placeholder="Search or add a post..." />
      </div>

      <div>
        {sections.map((section, index) => {
          return (
            <div key={section.title}>
              <div
                className="post-section-header p-1 border border-dark"
                onClick={() =>
                  setExpanded((prev) =>
                    prev.map((v, i) => (i === index ? !v : v)),
                  )
                }
              >
                <span>
                  {expanded[index] ? (
                    <FaChevronDown className="me-2" />
                  ) : (
                    <FaChevronRight className="me-2" />
                  )}

                  {section.title}
                </span>
              </div>

              {expanded[index] && (
                <div>
                  {section.posts.map((post) => {
                    return (
                      <div
                        key={post.title}
                        className="post-link border border-dark p-1 ps-3 d-flex align-items-start"
                        onClick={() => setPage(post)}
                      >
                        <div className="flex-fill">
                          <div className="fw-bold">{post.title}</div>
                          <div className="text-truncate post-description">
                            {post.content}
                          </div>
                        </div>
                        <div className="post-info text-end">
                          <div>02:43 pm</div>
                          <div>
                            {post.instructorAnswer && (
                              <FaI className="instructor-i" />
                            )}

                            {post.studentAnswer && !post.instructorAnswer && (
                              <FaS className="student-s" />
                            )}

                            {post.postType === "note" && (
                              <FaBars className="note-lines" />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
