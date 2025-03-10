import React, { useState } from 'react';
import FilterTab from '../Components/FilterTab';
import SearchRecipe from '../Components/SearchRecipe';
import Recipes from '../Components/Recipes';
import Pagination from '../Components/Pagination';
import { recipeOptions, fetchData } from '../utils/fetchData';

const SearchPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 10;

  const handleSearch = async (search) => {
    if (search) {
      const recipeData = await fetchData(
        'https://starbucks-coffee-db2.p.rapidapi.com/api/recipes',
        recipeOptions
      );
      setRecipes(recipeData);
      setCurrentPage(1);
    }
  };

  const handleSaveRecipe = (recipe) => {
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    if (savedRecipes.some(r => r.name === recipe.name)) return; // Avoid duplicate saves
    const newSavedRecipes = [...savedRecipes, { name: recipe.name, image: recipe.image }];
    localStorage.setItem("savedRecipes", JSON.stringify(newSavedRecipes));
  };

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <FilterTab />
      <SearchRecipe onSearch={handleSearch} />

      <div className="mt-4">
        {currentRecipes.length > 0 ? (
          currentRecipes.map((recipe, index) => (
            <Recipes key={index} recipe={recipe} onSave={handleSaveRecipe} />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>

      {recipes.length > recipesPerPage && (
        <Pagination
          recipesPerPage={recipesPerPage}
          totalRecipes={recipes.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default SearchPage;
