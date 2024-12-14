import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetching mock data
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
          >
            <div className="overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
              {/* Use Link to navigate to RecipeDetail page */}
              <Link
                to={`/recipe/${recipe.id}`}
                className="text-indigo-500 hover:underline mt-2 inline-block"
              >
                View Recipe
              </Link>
              
      {/* Add Recipe Link */}
      <div className="text-center mt-8">
        <Link
          to="/add-recipe"
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
        >
          Add a New Recipe
        </Link>
        </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
