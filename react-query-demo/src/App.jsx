import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-[#FFF2D8] flex flex-col items-center p-6">
        <h1 className="text-2xl font-bold mb-4 text-[#5A4B1F]">
          React Query Demo
        </h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
