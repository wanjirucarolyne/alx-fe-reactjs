import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from JSON
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((recipe) => recipe.id.toString() === id);
        if (selectedRecipe) {
          setRecipe(selectedRecipe);
        } else {
          navigate('/'); // Redirect to Home if no recipe is found
        }
      })
      .catch((error) => console.error("Error loading recipe details:", error));
  }, [id, navigate]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-600 mb-6">{recipe.summary}</p>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-700">
              {recipe.ingredients?.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Cooking Instructions</h2>
            <ol className="list-decimal list-inside text-gray-700">
              {recipe.instructions?.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          <button
            onClick={() => navigate('/')}
            className="mt-6 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
