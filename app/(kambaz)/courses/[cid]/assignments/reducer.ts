import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    // payload = new assignment object
    addAssignment: (state, action) => {
      state.assignments = [...state.assignments, action.payload];
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
    },
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignments,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
