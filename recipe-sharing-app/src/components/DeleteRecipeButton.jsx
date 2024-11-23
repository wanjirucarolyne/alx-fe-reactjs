import  useRecipeStore  from '../recipeStore';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleDelete = () => {
    deleteRecipe(recipeId); // Delete the recipe
    onDelete(); // Trigger the onDelete function from RecipeDetails to navigate away
    navigate('/'); // Navigate to the home page (or recipe list) after deletion
  };

  return (
    <button onClick={handleDelete}>Delete Recipe</button>
  );
};

export default DeleteRecipeButton;
