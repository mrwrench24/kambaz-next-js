import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BiPlus } from "react-icons/bi";
export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <BiPlus className="m-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
