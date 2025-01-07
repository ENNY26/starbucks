import React, { useState } from 'react';
import Hero from '../Components/Hero';
import FilterTab from '../Components/FilterTab';
import SearchRecipe from '../Components/SearchRecipe';
import { recipeOptions, fetchData } from '../utils/fetchData';
import { Link } from 'react-router-dom';

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (search) => {
    if (search) {
      const recipeData = await fetchData(
        'https://starbucks-coffee-db2.p.rapidapi.com/api/recipes',
        recipeOptions
      );
      setRecipes(recipeData);
    }
  };

  return (
    <div>
      <Hero />
      <FilterTab />
      <SearchRecipe onSearch={handleSearch} />
      <div>
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <div key={index} className="p-4 border rounded-md shadow-md bg-white mb-4">
              <Link to={`/recipe/${recipe._id}`}>
                <h2 className="text-xl font-bold text-gray-800">{recipe.name}</h2>
                {recipe.image && (
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-40 object-cover rounded-md mt-4"
                  />
                )}
              </Link>
            </div>
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
