import { createSlice } from "@reduxjs/toolkit";
import posts from "./database/posts";
import { PostSection } from "./types/types";

interface PostState {
  sections: PostSection[];
}

const initialState: PostState = {
  sections: [
    { title: "Today", posts: [posts[0]] },
    { title: "Yesterday", posts: [posts[1]] },
    { title: "Last Week", posts: [posts[2], posts[3]] },
  ],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postsSlice.reducer;
