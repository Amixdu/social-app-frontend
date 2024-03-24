"use client";

import Post from "@/components/Post";
import { useGetPostsQuery } from "@/lib/redux/services/posts/post-api";

const Page = () => {
  const { isFetching, isLoading, data, error } = useGetPostsQuery(null);
  return (
    <>
      {error ? (
        <p> There was an error fetching the data :/ </p>
      ) : isLoading || isFetching ? (
        <p> Loading ... </p>
      ) : (
        <>
          <ul>
            {data?.map((post) => (
              <Post key={post.id} content={post.title}/>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Page;
