import React from 'react';

const Recipe = ({ recipe }) => {
  return (
   
    
    <div className=" flex flex-1"> 
    <h1 className='text-3xl flex-none'>{recipe.name}</h1>
      {/* Recipe Image */}
     {recipe.image &&(
      <img
    src={recipe.image}
    alt={recipe.name}
    className=' w-[400px] h-[270px] rounded-md grid grid-cols-4'
/>
     )}

      {/* Ingredients List 
      {recipe.recipeIngredient && recipe.recipeIngredient.length > 0 ? (
        <ul className="mt-4">
          <h3 className="text-lg font-emibold text-gray-700">Ingredients:</h3>
          {recipe.recipeIngredient.map((ingredient, index) => (
            <li key={index} className="text-gray-600">
              - {ingredient}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 mt-4">No ingredients listed.</p>
      )}
      */}
    </div>
  );
};

export default Recipe;
