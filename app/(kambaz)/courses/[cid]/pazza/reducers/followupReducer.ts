import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Followup } from "../types/types";

interface FollowupState {
  followups: Followup[];
}

const initialState: FollowupState = {
  followups: [
    {
      id: "fu1",
      resolved: true,
      author: "Ada Lovelace",
      content: "Any updates on this?",
      replies: [],
    },
    {
      id: "fu2",
      resolved: false,
      author: "Ada Lovelace",
      content: "Again, updates on this?",
      replies: ["fr1"],
    },
  ],
};

const followupsSlice = createSlice({
  name: "followups",
  initialState,
  reducers: {
    createFollowup: (
      state,
      action: PayloadAction<{ id: string; content: string; authorId: string }>,
    ) => {
      const newFollowup: Followup = {
        id: action.payload.id,
        resolved: false,
        author: action.payload.authorId,
        content: action.payload.content,
        replies: [],
      };

      state.followups = [...state.followups, newFollowup];
    },
    updateFollowup: (state, action: PayloadAction<Followup>) => {
      state.followups = state.followups.map((f) =>
        f.id === action.payload.id ? action.payload : f,
      );
    },
    deleteFollowup: (state, action: PayloadAction<string>) => {
      state.followups = state.followups.filter((f) => f.id !== action.payload);
    },
  },
});

export const { createFollowup, updateFollowup, deleteFollowup } =
  followupsSlice.actions;
export default followupsSlice.reducer;
