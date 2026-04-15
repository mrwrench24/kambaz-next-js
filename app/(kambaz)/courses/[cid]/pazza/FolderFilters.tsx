import { useSelector } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";
import { usePazzaContext } from "./PazzaContext";

export default function FolderFilters() {
  const { folders } = useSelector((state: RootState) => state.folderReducer);
  const { selectedFolder, setSelectedFolder } = usePazzaContext();

  return (
    <div className="bg-secondary d-flex align-items-center border border-dark">
      <div className="ms-auto d-flex align-items-center me-3">
        {folders.map((folder) => (
          <span
            key={folder.id}
            className={`p-2 me-2 ${
              selectedFolder?.id === folder.id ? "folder-filter-selected" : ""
            }`}
            role="button"
            onClick={() => {
              if (selectedFolder && selectedFolder.id === folder.id) {
                setSelectedFolder(null);
              } else {
                setSelectedFolder(folder);
              }
            }}
          >
            {folder.name}
          </span>
        ))}
      </div>
    </div>
  );
}
