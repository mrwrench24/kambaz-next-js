import { Button } from "react-bootstrap";
import {
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaI,
  FaNewspaper,
} from "react-icons/fa6";
import "./index.css";
import { usePazzaContext } from "./PazzaContext";
import { useState } from "react";

export default function PostNavigation() {
  const { setPage } = usePazzaContext();
  const [expanded, setExpanded] = useState([true, true, false]);
  const [showControls, setShowControls] = useState(true);

  const postLists = [
    {
      title: "Today",
      posts: [
        {
          title: "post1",
          description:
            "post1 description which is pretty long and i want to make sure this is handled okay and maybe its not!",
        },
      ],
    },
    {
      title: "Yesterday",
      posts: [
        {
          title: "post2",
          description: "post2 description",
        },
      ],
    },
    {
      title: "Last Week",
      posts: [
        {
          title: "post3",
          description: "post3 description",
        },
        {
          title: "post4",
          description: "post4 description",
        },
      ],
    },
  ];

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
        {postLists.map((section, index) => {
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
                        onClick={() => setPage("post")}
                      >
                        <div className="flex-fill">
                          <div className="fw-bold">{post.title}</div>
                          <div className="text-truncate post-description">
                            {post.description}
                          </div>
                        </div>
                        <div className="post-info text-end">
                          <div>02:43 pm</div>
                          <div>
                            <FaI className="instructor-i" />
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
