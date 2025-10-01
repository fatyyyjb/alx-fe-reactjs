import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState(""); // changed from instructions
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !ingredients.trim() || !steps.trim()) {
      setError("All fields are required.");
      return;
    }

    if (ingredients.split("\n").length < 2) {
      setError("Please list at least two ingredients (one per line).");
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      summary: steps.split("\n")[0],
      image: "https://via.placeholder.com/400x250",
      ingredients: ingredients.split("\n"),
      steps: steps.split("\n"), // changed key to steps
    };

    onAddRecipe(newRecipe);
    navigate("/"); // redirect to home
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-white rounded-3xl shadow-2xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Add New Recipe</h2>
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-lg font-medium mb-2">Recipe Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Ingredients (one per line)</label>
          <textarea
            className="w-full border border-gray-300 rounded-xl p-3 h-36 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Steps (one per line)</label>
          <textarea
            className="w-full border border-gray-300 rounded-xl p-3 h-36 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 rounded-xl hover:from-blue-600 hover:to-indigo-600 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
