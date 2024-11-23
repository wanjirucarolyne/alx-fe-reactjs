import React from 'react';
import { useQuery } from 'react-query';

// Fetch posts from the API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // React Query's useQuery with advanced options
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery(
    'posts', // Key for the query
    fetchPosts, // Function to fetch data
    {
      refetchOnWindowFocus: true, // Refetch data when the window regains focus
      keepPreviousData: true, // Keep old data while new data loads
      staleTime: 5000, // Data is considered fresh for 5 seconds
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>Refetch Posts</button>
      {isFetching && <p>Updating data...</p>}
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
