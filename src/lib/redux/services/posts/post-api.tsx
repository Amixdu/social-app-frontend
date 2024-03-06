import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Post = {
  id: string;
  title: string;
};

export const postApi = createApi({
  reducerPath: "postApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    // baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], null>({
      query: () => "posts",
    }),
    getPostById: builder.query<Post, { id: string }>({
      query: ({ id }) => `posts/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = postApi;