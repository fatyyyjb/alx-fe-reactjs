import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

// Step 1: Define fetch function
const fetchPosts = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

export default function PostsComponent() {
  // Step 2: Use React Query with keepPreviousData
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery("posts", fetchPosts, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
    keepPreviousData: true, // 👈 keeps old data in cache during refetch
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md w-[600px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#5A4B1F]">Posts</h2>
        <button
          onClick={() => refetch()}
          className="bg-yellow-600 text-white px-3 py-1 rounded-md hover:bg-yellow-700"
        >
          {isFetching ? "Refreshing..." : "Refetch"}
        </button>
      </div>

      <ul className="space-y-3 max-h-[400px] overflow-y-auto">
        {posts.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="border-b border-gray-200 pb-2 last:border-none"
          >
            <p className="font-semibold">{post.title}</p>
            <p className="text-sm text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>

      {isFetching && <p className="text-sm text-gray-500 mt-2">Updating cache...</p>}
    </div>
  );
}
