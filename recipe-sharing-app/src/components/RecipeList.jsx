import  useRecipeStore  from './recipeStore';
import { Link } from 'react-router-dom';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };


    useEffect(() => {
        filterRecipes();
      }, [filterRecipes]);
      
    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    );
  };

  export default RecipeList;
