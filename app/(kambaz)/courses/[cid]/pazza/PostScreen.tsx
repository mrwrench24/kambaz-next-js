import { Button } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa6";

export default function PostScreen() {
  const folders = ["hw1", "hw2", "general"];

  return (
    <div>
      <div className="d-flex align-items-center border border-dark ps-1">
        <div>question @57</div>
        <div className="bg-secondary ps-3 pe-3 ms-auto d-flex align-items-center me-3">
          1 View
        </div>
      </div>

      <div className="border border-dark">
        <div id="pazza-question-content" className="ps-2 pb-2">
          <div className="d-flex align-items-center ps-1">
            <div className="ms-auto d-flex align-items-center pe-2">
              Actions <FaChevronDown className="ps-1" />
            </div>
          </div>

          <div>
            <h2>Grade for Assignment 1</h2>
            <h5 className="pb-2">By Alan Turing</h5>
            <p>
              Hi professor <br /> This is a test. It seems to be oworking okay
              so far.
            </p>
          </div>

          <span className="p">
            {folders.map((folder) => {
              return (
                <span key={folder} className="p-2">
                  {folder}
                </span>
              );
            })}
          </span>
        </div>

        <div className="bg-secondary ps-2 p-1 d-flex align-items-center">
          <Button>Edit</Button>
          <div className="ps-2">good question | 0</div>
        </div>
      </div>

      <div className="border border-dark p-2">
        <div id="pazza-student-answer" className="border border-dark ps-1 pt-1">
          <h5>the students' answer</h5>

          <input
            type="text"
            placeholder="Start off the answer..."
            className="mt-2 mb-2 flex-fill form-control"
          />
        </div>

        <div
          id="pazza-instructor-answer"
          className="border border-dark pt-1 mt-2"
        >
          <div className="ps-2">
            <h5>the instructors' answer</h5>
            This is my answer from the instructor. <br />I am indeed the
            instructor. Respect my authoritah.
          </div>

          <div className="bg-secondary ps-2 p-1 d-flex align-items-center">
            <Button>Edit</Button>
            <div className="ps-2">good answer | 0</div>

            <div className="ms-auto">
              Updated 30 seconds ago by Eric Cartman
            </div>
          </div>
        </div>

        <div id="pazza-follow-up-discussions" className="mt-2">
          <h4>followup discussions</h4>

          <div className="bg-secondary p-1">
            <div className="bg-secondary d-flex align-items-center">
              <span>
                <span className="ps-2">
                  <input type="radio" /> Resolved
                </span>
                <span className="ps-2">
                  <input type="radio" /> Unresolved
                </span>
              </span>

              <div className="ms-auto pe-2">
                Actions <FaChevronDown className="ps-1" />
              </div>
            </div>
            <div>
              <b>Ada Lovelace</b> 3 hours ago
              <div>
                Also, what about the format of the assignment? Thanks in
                advance!
              </div>
            </div>

            <div className="p-2 ms-2">
              <div className="d-flex align-items-center">
                <b>NotAdaLovelace</b> &nbsp; 2 hours ago
                <div className="ms-auto pe-2">
                  <span>
                    Actions <FaChevronDown className="ps-1" />
                  </span>
                </div>
              </div>
              Can you stop asking stupid questions? Thanks in advance.
              <input
                type="text"
                placeholder="Reply to this followup discussion..."
                className="flex-fill form-control"
              />
            </div>
          </div>

          <input
            type="text"
            placeholder="A new followup discussion..."
            className="mt-2 flex-fill form-control"
          />
        </div>
      </div>
    </div>
  );
}
