import React from "react";
import TodoList from "./components/TodoList"; // 👈 import TodoList

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF2D8] flex items-center justify-center">
      <TodoList /> {/* 👈 render the TodoList component */}
    </div>
  );
}
