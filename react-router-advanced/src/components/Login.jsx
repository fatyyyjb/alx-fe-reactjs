import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/profile/details");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <button
        onClick={handleLogin}
        className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700"
      >
        Login
      </button>
    </div>
  );
}

