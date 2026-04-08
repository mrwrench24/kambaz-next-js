import { FaCheckCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

export default function CAGScreen() {
  return (
    <div style={{ backgroundColor: "lightblue" }} className="p-2">
      <h4>Class at a Glance</h4>
      <div className="bg-secondary p-2 border border-black d-flex align-items-center">
        <div>
          <div>
            <FaCheckCircle style={{ color: "green" }} />
            <span className="ps-2">No unread posts</span>
          </div>
          <div>
            <FaCheckCircle style={{ color: "green" }} />
            <span className="ps-2">No unanswered posts</span>
          </div>
        </div>

        <div className="ms-auto pe-2">
          <div>27 total posts</div>
          <div>27 instructor responses</div>
          <div>27 student responses</div>
          <div>27 students enrolled</div>
        </div>
      </div>
    </div>
  );
}
