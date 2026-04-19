import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewPost, Post, PostSection } from "../types/types";

interface PostState {
  sections: PostSection[];
}

const initialState: PostState = {
  sections: [],
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
        state.sections = [
          { id: `${Math.random()}`, title: "Today", posts: [action.payload] },
          ...state.sections,
        ];
      }
    },
    addAllPosts: (state, action: PayloadAction<Post[]>) => {
      const now = new Date();

      const sections: {
        id: string;
        title: string;
        posts: Post[];
      }[] = [
        { id: "today", title: "Today", posts: [] },
        { id: "yesterday", title: "Yesterday", posts: [] },
        { id: "lastWeek", title: "Last Week", posts: [] },
        { id: "older", title: "Weeks ago", posts: [] },
      ];

      const getDaysDiff = (dateStr: string) => {
        const created = new Date(dateStr);
        return (now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24);
      };

      action.payload.forEach((post) => {
        const days = getDaysDiff(post.createdAt);

        if (days < 1) {
          sections[0].posts.push(post);
        } else if (days < 2) {
          sections[1].posts.push(post);
        } else if (days < 7) {
          sections[2].posts.push(post);
        } else {
          sections[3].posts.push(post);
        }
      });

      // don't have empty sections
      state.sections = sections.filter((section) => section.posts.length > 0);
    },
  },
});

export const { deletePost, updatePost, addAllPosts, addPost } =
  postsSlice.actions;
export default postsSlice.reducer;
