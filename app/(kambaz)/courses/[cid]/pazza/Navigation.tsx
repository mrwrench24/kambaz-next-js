import { FaPerson } from "react-icons/fa6";

export default function PazzaNavigation({ cid }: { cid: string }) {
  const links = ["Q & A", "Manage Class"];
  return (
    <div className="bg-primary text-white p-1 d-flex align-items-center">
      <span className="fw-bold fs-4 p-2">Pazza</span>

      <div className="ms-auto d-flex align-items-center me-3">
        <span className="fw-bold fs-5 p-2">CS 4550</span>
        {links.map((link) => {
          return (
            <span key={link} className="p-3">
              {link}
            </span>
          );
        })}

        <FaPerson className="m-2" />
        <span>Jake Squatrito</span>
      </div>
    </div>
  );
}
