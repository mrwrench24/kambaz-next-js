import { Button } from "react-bootstrap";
import { FaChevronDown, FaI, FaNewspaper } from "react-icons/fa6";
import "./index.css";

export default function PostNavigation() {
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

  return (
    <div className="bg-secondary border border-dark">
      <div className="d-flex align-items-center p-1">
        <Button className="m-1">
          <FaNewspaper /> New Post
        </Button>
        <input type="text" placeholder="Search or add a post..." />
      </div>

      <div>
        {postLists.map((section) => {
          return (
            <div key={section.title}>
              <div className="post-section-header p-1 border border-dark">
                <span>
                  <FaChevronDown className="me-2" />
                  {section.title}
                </span>
              </div>

              <div>
                {section.posts.map((post) => {
                  return (
                    <div
                      key={post.title}
                      className="post-link border border-dark p-1 ps-3 d-flex align-items-start"
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
