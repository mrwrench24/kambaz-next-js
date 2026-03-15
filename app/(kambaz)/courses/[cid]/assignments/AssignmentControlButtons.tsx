import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa6";
export default function AssignmentControlButtons({
  handleClick,
}: {
  handleClick: () => void;
}) {
  return (
    <div className="float-end">
      <FaTrash onClick={handleClick} color="red" className="fs-4 m-2" />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
