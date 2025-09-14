// src/components/RecipeList.jsx
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one!</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid #ddd', padding: 12, marginBottom: 8 }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <Link to={`/recipes/${recipe.id}`}>View</Link>
              <Link to={`/recipes/${recipe.id}/edit`}>Edit</Link>
              <DeleteRecipeButton recipeId={recipe.id} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
