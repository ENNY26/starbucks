import React, { useState } from 'react';
import Hero from '../Components/Hero';
import FilterTab from '../Components/FilterTab';
import SearchRecipe from '../Components/SearchRecipe';
import Recipes from '../Components/Recipes'; // Import the Recipe component
import { recipeOptions, fetchData } from '../utils/fetchData';

const Home = () => {
  const [recipes, setRecipes] = useState([]); // State to store fetched recipes

  const handleSearch = async (search) => {
    if (search) {
      const recipeData = await fetchData(
        'https://starbucks-coffee-db2.p.rapidapi.com/api/recipes',
        recipeOptions
      );
      setRecipes(recipeData); // Update recipes state
    }
  };

  return (
    <div>
      <Hero />
      <FilterTab />
      <SearchRecipe onSearch={handleSearch} /> {/* Pass handleSearch as prop */}
      
      {/* Render Recipes */}
      <div className="mt-4">
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <Recipes key={index} recipe={recipe} /> // Render Recipe component
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
