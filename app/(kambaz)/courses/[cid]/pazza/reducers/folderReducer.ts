import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Folder } from "../types/types";

interface FolderState {
  folders: Folder[];
}

const initialState: FolderState = {
  folders: [],
};

const foldersSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {
    // payload is the name
    createFolder: (state, action: PayloadAction<string>) => {
      state.folders = [
        ...state.folders,
        { id: `${Math.random()}`, name: action.payload },
      ];
    },
    updateFolder: (state, action: PayloadAction<Folder>) => {
      state.folders = state.folders.map((folder) =>
        folder.id === action.payload.id ? action.payload : folder,
      );
    },
    // payload is the ids to delete
    deleteFolders: (state, action: PayloadAction<string[]>) => {
      state.folders = state.folders.filter(
        (folder) => !action.payload.includes(folder.id),
      );
    },
    setFolders: (state, action: PayloadAction<Folder[]>) => {
      console.log("setting folders");
      state.folders = action.payload;
    },
  },
});

export const { createFolder, updateFolder, deleteFolders, setFolders } =
  foldersSlice.actions;
export default foldersSlice.reducer;
