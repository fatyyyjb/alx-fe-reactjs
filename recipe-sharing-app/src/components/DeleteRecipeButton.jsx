// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    const ok = window.confirm('Delete this recipe?');
    if (!ok) return;
    deleteRecipe(recipeId);
    // if we were on the recipe page, go back to list
    navigate('/');
  };

  return (
    <button onClick={handleDelete} style={{ color: 'red' }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
