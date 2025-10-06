import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blog Post</h1>
      <p>Viewing blog post with ID: {id}</p>
    </div>
  );
}
