// src/components/SearchBar.jsx
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(event) => setSearchTerm(event.target.value)}
      style={{ display: 'block', width: '100%', marginBottom: 16 }}
    />
  );
};

export default SearchBar;
