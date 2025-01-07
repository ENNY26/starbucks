import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData, recipeOptions } from '../utils/fetchData';

const Recipedetails = () => {
  const { id } = useParams(); // Extract _id from the URL
  const [recipe, setRecipe] = useState(null); // State to hold recipe details
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    const getRecipeDetails = async () => {
      try {
        console.log('Fetching details for ID:', id); // Debugging: Check the id
        // Fetch the recipe details using the _id from the URL
        const data = await fetchData(
          `https://starbucks-coffee-db2.p.rapidapi.com/api/recipes/${id}`,
          recipeOptions
        );
        console.log('Fetched data:', data); // Debugging: Log the fetched data
        if (data && data._id) {
          setRecipe(data); // If the data contains _id, update state
        } else {
          console.error('Recipe not found');
          setRecipe(null);
        }
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    getRecipeDetails();
  }, [id]); // Re-run when id changes

  if (loading) return <p>Loading...</p>; // Show loading message while fetching data
  if (!recipe) return <p>No recipe found.</p>; // Handle case where no recipe is returned

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{recipe.name || 'Unnamed Recipe'}</h1>
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-60 object-cover rounded-md mt-4"
        />
      )}
      <p className="mt-4">{recipe.description || 'No description available.'}</p>
      <h3 className="text-lg font-semibold mt-4">Ingredients:</h3>
      {recipe.recipeIngredient && recipe.recipeIngredient.length > 0 ? (
        <ul>
          {recipe.recipeIngredient.map((ingredient, index) => (
            <li key={index} className="text-gray-600">
              - {ingredient}
            </li>
          ))}
        </ul>
      ) : (
        <p>No ingredients listed.</p>
      )}
    </div>
  );
};

export default Recipedetails;
