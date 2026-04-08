export default function FolderFilters() {
  const folders = ["hw1", "hw2", "hw3", "hw4", "hw5", "exam", "project"];

  return (
    <div className="bg-secondary d-flex align-items-center border border-dark">
      <div className="ms-auto d-flex align-items-center me-3">
        {folders.map((folder) => (
          <span key={folder} className="p-2 me-2">
            {folder}
          </span>
        ))}
      </div>
    </div>
  );
}
