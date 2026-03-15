import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../../database/index";

const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    // payload = new assignment object
    addAssignment: (state, action) => {
      state.assignments = [...state.assignments, action.payload];

      console.log(state.assignments);
    },
    // payload = id of assignment
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter((assignment) => {
        return assignment._id !== action.payload;
      });
    },
    // payload = updated assignment object
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((oldAssignment) => {
        return oldAssignment._id === action.payload._id
          ? action.payload
          : oldAssignment;
      });

      console.log(state.assignments);
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
