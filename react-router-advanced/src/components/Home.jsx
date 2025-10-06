import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <Link to="/profile/details" className="text-blue-600 hover:underline mr-4">Profile Details</Link>
      <Link to="/profile/settings" className="text-blue-600 hover:underline">Profile Settings</Link>
      <br/>
      <Link to="/post/1" className="text-green-600 hover:underline mt-2 block">View Post 1</Link>
    </div>
  );
}
