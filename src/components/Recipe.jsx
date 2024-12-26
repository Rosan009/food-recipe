import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Recipe = () => {
  const { id } = useParams(); // Get the recipe ID from URL params
  const { state } = useLocation();
  const recipe = state?.recipe || getRecipeById(id); // Fallback to fetching by ID

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>{recipe.heading}</h1>
      <img src={recipe.image} alt={recipe.heading} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      <p><strong>Description:</strong> {recipe.description}</p>
      <p><strong>Duration:</strong> {recipe.duration}</p>
      <p><strong>Rating:</strong> {recipe.rating} ⭐</p>
      <button onClick={() => alert('Let\'s start cooking!')} style={{ backgroundColor: '#FFA500', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
        Start Cooking
      </button>
    </div>
  );
};

export default Recipe;
