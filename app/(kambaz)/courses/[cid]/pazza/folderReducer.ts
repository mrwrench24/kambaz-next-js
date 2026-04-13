import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Folder } from "./types/types";

interface FolderState {
  folders: Folder[];
}

const initialState: FolderState = {
  folders: [
    { id: "f1", name: "hw1" },
    { id: "f2", name: "hw2" },
    { id: "f3", name: "hw3" },
    { id: "f4", name: "hw4" },
    { id: "f5", name: "final_exam" },
    { id: "f6", name: "project" },
    { id: "f7", name: "logistics" },
  ],
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
  },
});

export const { createFolder, updateFolder, deleteFolders } =
  foldersSlice.actions;
export default foldersSlice.reducer;
