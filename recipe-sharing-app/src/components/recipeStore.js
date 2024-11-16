import  create  from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],

  // Action to add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Action to set the recipes list (e.g., after fetching from an API)
  setRecipes: (recipes) => set({ recipes }),

  // Action to delete a recipe by ID
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),

  // Action to update a recipe by ID
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // New state for the search term
  searchTerm: '',

  // Action to update the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Filtered recipes based on the search term
  filteredRecipes: [],

  // Action to filter recipes based on the search term
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));

export default useRecipeStore;
