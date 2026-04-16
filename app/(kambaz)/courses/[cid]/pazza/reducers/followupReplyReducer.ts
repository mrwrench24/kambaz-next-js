import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FollowupReply } from "../types/types";

interface FollowupReplyState {
  followupReplies: FollowupReply[];
}

const initialState: FollowupReplyState = {
  followupReplies: [
    
  ],
};

const followupRepliesSlice = createSlice({
  name: "followupReplies",
  initialState,
  reducers: {
    createReply: (state, action: PayloadAction<FollowupReply>) => {
      state.followupReplies = [...state.followupReplies, action.payload];
    },
    updateReply: (state, action: PayloadAction<FollowupReply>) => {
      state.followupReplies = state.followupReplies.map((f) =>
        f.id === action.payload.id ? action.payload : f,
      );
    },
    deleteReply: (state, action: PayloadAction<string>) => {
      state.followupReplies = state.followupReplies.filter(
        (f) => f.id !== action.payload,
      );
    },
    setReplies: (state, action: PayloadAction<FollowupReply[]>) => {
      state.followupReplies = action.payload;
    },
  },
});

export const { createReply, updateReply, deleteReply, setReplies } =
  followupRepliesSlice.actions;
export default followupRepliesSlice.reducer;
