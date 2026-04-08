import { Button } from "react-bootstrap";
import { DiSnapSvg } from "react-icons/di";
import { FaChevronDown, FaI } from "react-icons/fa6";

export default function PostNavigation() {
  const postLists = [
    {
      title: "Today",
      posts: [
        {
          title: "post1",
          description: "post1 description",
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
        <Button>New Post</Button>
        <input type="text" placeholder="Search or add a post..." />
      </div>

      <div>
        {postLists.map((section) => {
          return (
            <div key={section.title}>
              <div className="bg-secondary p-1 border border-dark">
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
                      className="bg-white border border-dark p-1 ps-3 d-flex align-items-center"
                    >
                      <div className="flex-fill">
                        <div className="fw-bold">{post.title}</div>
                        {post.description}
                      </div>
                      <div className="text-end">
                        <div>02:43 pm</div>
                        <div>
                          <FaI style={{ backgroundColor: "orange" }} />
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
