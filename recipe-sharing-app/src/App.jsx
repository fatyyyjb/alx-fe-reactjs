// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20 }}>
        <h1>🍳 Recipe Sharing App</h1>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />

          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />

          {/* Fallback to home */}
          <Route path="*" element={<div>Not found. <a href="/">Go home</a></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
