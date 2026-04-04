import { createSlice } from "@reduxjs/toolkit";

interface EnrollmentState {
  enrollments: {
    _id: string;
    user: string;
    course: string;
  }[];
}

const initialState: EnrollmentState = {
  enrollments: [],
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
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
      console.log(state.enrollments);
    },
  },
});

export const { enroll, unenroll, setEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
