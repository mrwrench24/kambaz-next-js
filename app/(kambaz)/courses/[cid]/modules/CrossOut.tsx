import { FaCircle, FaCircleXmark, FaCross } from "react-icons/fa6";
export default function CrossOut() {
  return (
    <span className="me-1 position-relative">
      <FaCircleXmark
        style={{ top: "2px" }}
        className="me-1 position-absolute fs-5"
      />
      <FaCircle className="text-white me-1 fs-6" />
    </span>
  );
}
