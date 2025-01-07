import React from 'react';

const Recipe = ({ recipe }) => {
  return (
    <div className="p-4 border rounded-md shadow-md bg-white mb-4 flex flex-col md:flex-row items-start">
      {/* Recipe Image */}
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-40 h-40 object-cover rounded-md mr-4 mb-4 md:mb-0"
        />
      )}

      {/* Recipe Details */}
      <div className="flex-1">
        {/* Recipe Title */}
        <h2 className="text-xl font-bold text-gray-800">{recipe.name}</h2>
        
        {/* Category */}
        <p className="text-gray-500 mt-2">
          <strong>Category:</strong> {recipe.category || 'Not categorized.'}
        </p>
        
        {/* Description */}
        <p className="text-gray-600 mt-2">{recipe.description || 'No description available.'}</p>

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

        {/* Recipe Instructions */}
        {recipe.recipeInstructions && recipe.recipeInstructions.length > 0 ? (
          <ol className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700">Instructions:</h3>
            {recipe.recipeInstructions.map((instruction, index) => (
              <li key={index} className="text-gray-600 mb-2">
                <strong>Step {instruction.name}:</strong> {instruction.text}
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-gray-500 mt-4">No instructions available.</p>
        )}
      </div>
    </div>
  );
};

export default Recipe;
