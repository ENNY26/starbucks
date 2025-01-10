import React, { useState } from 'react';
import Hero from '../Components/Hero';
import FilterTab from '../Components/FilterTab';
import SearchRecipe from '../Components/SearchRecipe';
import Recipes from '../Components/Recipes';
import Pagination from '../Components/Pagination'; // Create this component separately
import { recipeOptions, fetchData } from '../utils/fetchData';

const Home = () => {
  const [recipes, setRecipes] = useState([]); // State for fetched recipes
  const [currentPage, setCurrentPage] = useState(1); // State to track current page
  const recipesPerPage = 10; // Define how many recipes per page

  // Fetch recipes on search
  const handleSearch = async (search) => {
    if (search) {
      const recipeData = await fetchData(
        'https://starbucks-coffee-db2.p.rapidapi.com/api/recipes',
        recipeOptions
      );
      setRecipes(recipeData); // Store recipes
      setCurrentPage(1); // Reset to the first page after a new search
    }
  };

  // Calculate the recipes for the current page
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  // Function to handle page changes
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Hero />
      <FilterTab />
      <SearchRecipe onSearch={handleSearch} />

      {/* Render current recipes */}
      <div className="mt-4">
        {currentRecipes.length > 0 ? (
          currentRecipes.map((recipe, index) => (
            <Recipes key={index} recipe={recipe} />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>

      {/* Pagination Component */}
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

export default Home;
