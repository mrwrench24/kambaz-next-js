import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import posts from "./database/posts";
import { NewPost, Post, PostSection } from "./types/types";

interface PostState {
  sections: PostSection[];
  nextPostNumber: number;
}

const initialState: PostState = {
  sections: [
    { id: "sec1", title: "Today", posts: [posts[0]] },
    { id: "sec2", title: "Yesterday", posts: [posts[1]] },
    { id: "sec3", title: "Last Week", posts: [posts[2], posts[3]] },
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
          { id: `${Math.random()}`, title: "Today", posts: [postToAdd] },
          ...state.sections,
        ];
      }

      state.nextPostNumber += 1;
    },
    // string = the id of the post to delete
    deletePost: (state, action: PayloadAction<string>) => {
      state.sections.forEach((section) => {
        section.posts = section.posts.filter(
          (post) => post.id !== action.payload,
        );
      });

      state.sections = state.sections.filter((section) => {
        return section.posts.length !== 0;
      });
    },
    updatePost: (state, action: PayloadAction<Post>) => {
      state.sections.forEach((section) => {
        section.posts = section.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post,
        );
      });
    },
  },
});

export const { createPost, deletePost, updatePost } = postsSlice.actions;
export default postsSlice.reducer;
