import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); // changed from single error
  const navigate = useNavigate();

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required.";
    else if (ingredients.split("\n").length < 2)
      newErrors.ingredients = "Please list at least two ingredients.";

    if (!steps.trim()) newErrors.steps = "Steps are required.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const newRecipe = {
        id: Date.now(),
        title,
        summary: steps.split("\n")[0],
        image: "https://via.placeholder.com/400x250",
        ingredients: ingredients.split("\n"),
        steps: steps.split("\n"),
      };

      onAddRecipe(newRecipe);
      navigate("/");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-white rounded-3xl shadow-2xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Add New Recipe</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-lg font-medium mb-2">Recipe Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 mt-1">{errors.title}</p>}
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Ingredients (one per line)</label>
          <textarea
            className="w-full border border-gray-300 rounded-xl p-3 h-36 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          {errors.ingredients && <p className="text-red-500 mt-1">{errors.ingredients}</p>}
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Steps (one per line)</label>
          <textarea
            className="w-full border border-gray-300 rounded-xl p-3 h-36 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
          {errors.steps && <p className="text-red-500 mt-1">{errors.steps}</p>}
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
