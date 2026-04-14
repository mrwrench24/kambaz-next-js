import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import posts from "./database/posts";
import { NewPost, Post, PostSection } from "./types/types";

interface PostState {
  sections: PostSection[];
  nextPostNumber: number;
}

const initialState: PostState = {
  sections: [
    { title: "Today", posts: [posts[0]] },
    { title: "Yesterday", posts: [posts[1]] },
    { title: "Last Week", posts: [posts[2], posts[3]] },
  ],
  nextPostNumber: 59,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    createPost: (state, action: PayloadAction<NewPost>) => {
      const postToAdd: Post = {
        id: `${Math.random()}`,
        postNumber: state.nextPostNumber,
        title: action.payload.summary,
        content: action.payload.details,
        postType: action.payload.postType,
        author: action.payload.authorId,
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
      } else {
        // TODO: Test
        state.sections = [
          { title: "Today", posts: [postToAdd] },
          ...state.sections,
        ];
      }

      state.nextPostNumber += 1;
    },
  },
});

export const { createPost } = postsSlice.actions;
export default postsSlice.reducer;
