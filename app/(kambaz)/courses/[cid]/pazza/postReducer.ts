import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import posts from "./database/posts";
import { NewPost, Post, PostSection } from "./types/types";

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
  reducers: {
    createPost: (state, action: PayloadAction<NewPost>) => {
      const postToAdd: Post = {
        id: `${Math.random()}`,
        postNumber: 58,
        title: action.payload.summary,
        content: action.payload.details,
        postType: action.payload.postType,
        author: "Somebody",
        commenders: [],
        // TODO: onlyVisibleTo
        folders: action.payload.folders,
        studentAnswer: null,
        instructorAnswer: null,
        followups: [],
      };

      const todaySection = state.sections.find(
        (section) => section.title === "Today",
      );

      if (todaySection) {
        todaySection.posts = [postToAdd, ...todaySection.posts];
      }
    },
  },
});

export const { createPost } = postsSlice.actions;
export default postsSlice.reducer;
