import React from 'react';
import heart from '../assets/Icons/heart.svg';

const Recipes = ({ recipe, onSave }) => {
  return (
    <div className="border rounded-md overflow-hidden shadow-sm relative">
      <img src={recipe.image} alt={recipe.name} className="w-[105px]" />
      <div className="p-2">
        <h1 className="text-sm font-semibold">{recipe.name}</h1>
      </div>
      {/* Heart icon for saving */}
      <img
        src={heart}
        alt="Save to profile"
        className="w-6 h-6 cursor-pointer absolute top-2 right-2"
        onClick={() => onSave(recipe)}
      />

    <p>{recipe.description}</p>

         {/* Ingredients List */}
         {recipe.recipeIngredient && recipe.recipeIngredient.length > 0 ? (
          <ul className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700">Ingredients:</h3>
            {recipe.recipeIngredient.map((ingredient, index) => (
              <li key={index} className="text-gray-600">
                - {ingredient}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 mt-4">No ingredients listed.</p>
        )}


    
    </div>
  );
};

export default Recipes;
