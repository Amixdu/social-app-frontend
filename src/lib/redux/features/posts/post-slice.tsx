import { createSlice } from "@reduxjs/toolkit";
import { postApi } from "../../services/posts/post-api";
//
type Post = {
  id: string;
  title: string;
};
type PostState = {
  posts: {
    docs: Post[];
  };
};
//
const initialState = {
  posts: {
    docs: [],
  },
} as PostState;
/**
 * Redux slice for the post feature
 */
const postSlice = createSlice({
  name: "feature/posts",
  initialState,
  reducers: {
    setData: (state, action) => ({
      ...state,
      posts: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      postApi.endpoints.getPosts.matchFulfilled,
      (state, action) => {
        state.posts.docs = action.payload;
      }
    );
  },
});
//
export const { setData } = postSlice.actions;
export default postSlice;
