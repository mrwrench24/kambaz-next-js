import { IoEllipsisVertical } from "react-icons/io5";
import { BiPlus } from "react-icons/bi";

export default function AssignmentGroupButtons() {
  return (
    <div className="float-end">
      <span className="m-4 border rounded-pill py-1 px-3">40% of total</span>
      <BiPlus />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
