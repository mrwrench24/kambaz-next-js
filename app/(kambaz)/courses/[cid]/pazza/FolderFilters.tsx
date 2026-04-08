import { useState } from "react";

export default function FolderFilters() {
  const folders = ["hw1", "hw2", "hw3", "hw4", "hw5", "exam", "project"];

  const [selectedFolder, setSelectedFolder] = useState<string | null>("test");

  return (
    <div className="bg-secondary d-flex align-items-center border border-dark">
      <div className="ms-auto d-flex align-items-center me-3">
        {folders.map((folder) => (
          <span
            key={folder}
            className={`p-2 me-2 ${selectedFolder === folder && "folder-filter-selected"}`}
            role="button"
            onClick={() => {
              if (selectedFolder === folder) {
                setSelectedFolder(null);
              } else {
                setSelectedFolder(folder);
              }
            }}
          >
            {folder}
          </span>
        ))}
      </div>
    </div>
  );
}
