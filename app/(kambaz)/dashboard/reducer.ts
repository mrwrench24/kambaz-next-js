import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../database";

interface EnrollmentState {
  enrollments: {
    _id: string;
    user: string;
    course: string;
  }[];
}

const initialState: EnrollmentState = {
  enrollments: enrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enroll: (state, { payload: { uid, cid } }) => {
      state.enrollments = [
        ...state.enrollments,
        {
          _id: `${Math.random()}`,
          user: uid,
          course: cid,
        },
      ];
    },
    unenroll: (state, { payload: { uid, cid } }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) => enrollment.user !== uid || enrollment.course !== cid,
      );
    },
  },
});

export const { enroll, unenroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
