// src/components/RecipeDetails.jsx
import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to list</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <p><strong>ID:</strong> {recipe.id}</p> {/* ✅ Explicit reference to recipe.id */}

      <div style={{ display: 'flex', gap: 8 }}>
        <Link to={`/recipes/${recipe.id}/edit`}>Edit</Link> {/* ✅ Using recipe.id */}
        <DeleteRecipeButton recipeId={recipe.id} />
        <Link to="/">Back</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
