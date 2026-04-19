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
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";
import { Post } from "./types/types";

export default function PostNavigation() {
  const { page, setPage, selectedFolder } = usePazzaContext();
  // ids of seections that are expanded
  const [showControls, setShowControls] = useState(true);

  const { sections } = useSelector((state: RootState) => state.postReducer);
  const [expanded, setExpanded] = useState<string[]>(() =>
    sections.length > 0 ? [sections[0].id] : [],
  );

  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer,
  );

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
        {sections.map((section) => {
          const isExpanded = expanded.includes(section.id);
          return (
            <div key={section.id}>
              <div
                className="post-section-header p-1 border border-dark"
                onClick={() => {
                  if (isExpanded) {
                    setExpanded(expanded.filter((sid) => sid !== section.id));
                  } else {
                    setExpanded([...expanded, section.id]);
                  }
                }}
              >
                <span>
                  {isExpanded ? (
                    <FaChevronDown className="me-2" />
                  ) : (
                    <FaChevronRight className="me-2" />
                  )}

                  {section.title}
                </span>
              </div>

              {isExpanded && (
                <div>
                  {section.posts.map((post) => {
                    if (
                      selectedFolder &&
                      !post.folders.includes(selectedFolder.id)
                    ) {
                      return;
                    }

                    const selected =
                      typeof page === "object" &&
                      "id" in page &&
                      page.id === post.id;

                    const timePostedStr = new Date(post.createdAt)
                      .toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                      .toLowerCase();

                    const viewed = post.viewers.includes(currentUser._id);

                    const byStudent = post.author.role === "STUDENT";

                    return (
                      // TODO: displaying whether this was posted by a student or an instructor.
                      <div
                        key={post.id}
                        className={`post-link border border-dark p-1 ps-3 d-flex align-items-start ${selected && "selected"}`}
                        onClick={() => setPage(post)}
                      >
                        <div className="flex-fill">
                          <span className="me-1">
                            {byStudent ? (
                              <span className="bg-secondary me-1 p-1">
                                Stud.
                              </span>
                            ) : (
                              <span className="bg-secondary me-1 p-1">
                                Inst.
                              </span>
                            )}
                            <span className="fw-bold">{post.title}</span>
                          </span>
                          <div
                            className={`text-truncate post-description ${!viewed && "fw-semibold"}`}
                            dangerouslySetInnerHTML={{
                              __html: post.content,
                            }}
                          ></div>
                        </div>
                        <div className="post-info text-end">
                          <div>{timePostedStr}</div>
                          <div>
                            {post.studentAnswer && (
                              <FaS className="student-s" />
                            )}

                            {post.instructorAnswer && (
                              <FaI className="instructor-i ms-1" />
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
