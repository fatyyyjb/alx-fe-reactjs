// src/components/EditRecipeForm.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) => state.recipes.find((r) => r.id === id));
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    updateRecipe({ id, title, description });
    navigate(`/recipes/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ display: 'block', width: '100%', marginBottom: 8 }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{ display: 'block', width: '100%', marginBottom: 8 }}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditRecipeForm;
