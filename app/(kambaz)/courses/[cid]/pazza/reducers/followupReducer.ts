import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Followup } from "../types/types";

interface FollowupState {
  followups: Followup[];
}

const initialState: FollowupState = {
  followups: [],
};

const followupsSlice = createSlice({
  name: "followups",
  initialState,
  reducers: {
    // createFollowup: (
    //   state,
    //   action: PayloadAction<{ id: string; content: string; authorId: string }>,
    // ) => {
    //   const newFollowup: Followup = {
    //     id: action.payload.id,
    //     resolved: false,
    //     createdAt: new Date().toISOString(),
    //     author: action.payload.authorId,
    //     content: action.payload.content,
    //     replies: [],
    //   };

    //   state.followups = [...state.followups, newFollowup];
    // },
    updateFollowup: (state, action: PayloadAction<Followup>) => {
      state.followups = state.followups.map((f) =>
        f.id === action.payload.id ? action.payload : f,
      );
    },
    deleteFollowup: (state, action: PayloadAction<string>) => {
      state.followups = state.followups.filter((f) => f.id !== action.payload);
    },
    setFollowups: (state, action: PayloadAction<Followup[]>) => {
      state.followups = action.payload;
    },
    addFollowup: (state, action: PayloadAction<Followup>) => {
      state.followups = [...state.followups, action.payload];
    },
  },
});

export const { updateFollowup, deleteFollowup, setFollowups, addFollowup } =
  followupsSlice.actions;
export default followupsSlice.reducer;
