import React from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  const { postId } = useParams();
  return <p>Viewing post with ID: {postId}</p>;
}
