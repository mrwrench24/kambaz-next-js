import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewPost, Post, PostSection } from "../types/types";

interface PostState {
  sections: PostSection[];
  nextPostNumber: number;
}

const initialState: PostState = {
  sections: [],
  nextPostNumber: 999,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // createPost: (state, action: PayloadAction<NewPost>) => {
    //   const postToAdd: Post = {
    //     id: `${Math.random()}`,
    //     postNumber: state.nextPostNumber,
    //     title: action.payload.summary,
    //     content: action.payload.details,
    //     postType: action.payload.postType,
    //     author: action.payload.authorId,
    //     commenders: [],
    //     onlyVisibleTo: null,
    //     // TODO: onlyVisibleTo
    //     folders: action.payload.folders,
    //     studentAnswer: null,
    //     instructorAnswer: null,
    //     followups: [],
    //   };

    //   const todaySection = state.sections.find(
    //     (section) => section.title === "Today",
    //   );

    //   if (todaySection) {
    //     todaySection.posts = [postToAdd, ...todaySection.posts];
    //   } else {
    //     // TODO: Test
    //     state.sections = [
    //       { id: `${Math.random()}`, title: "Today", posts: [postToAdd] },
    //       ...state.sections,
    //     ];
    //   }

    //   state.nextPostNumber += 1;
    // },
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
    addPost: (state, action: PayloadAction<Post>) => {
      const todaySection = state.sections.find(
        (section) => section.title === "Today",
      );

      if (todaySection) {
        todaySection.posts = [action.payload, ...todaySection.posts];
      } else {
        // TODO: Test
        state.sections = [
          { id: `${Math.random()}`, title: "Today", posts: [action.payload] },
          ...state.sections,
        ];
      }
    },
    addAllPosts: (state, action: PayloadAction<Post[]>) => {
      state.sections = [{ id: "sec1", title: "Today", posts: action.payload }];
    },
  },
});

export const { deletePost, updatePost, addAllPosts, addPost } =
  postsSlice.actions;
export default postsSlice.reducer;
