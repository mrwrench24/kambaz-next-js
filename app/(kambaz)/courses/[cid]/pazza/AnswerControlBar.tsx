import { Button } from "react-bootstrap";

export default function AnswerControlBar({
  contributors,
}: {
  contributors: string[];
}) {
  return (
    <div className="bg-secondary ps-2 p-1 d-flex align-items-center">
      <Button>Edit</Button>
      <div className="ps-2">
        <span role="button" className="link-primary">
          good answer
        </span>{" "}
        | 0
      </div>

      <div className="ms-auto">
        Updated 30 seconds ago by {contributors.join(" and ")}
      </div>
    </div>
  );
}
