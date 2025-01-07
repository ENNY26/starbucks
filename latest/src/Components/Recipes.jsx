import { Link } from 'react-router-dom';

const Recipes = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe._id}`}>
      <div className="p-4 border rounded-md shadow-md bg-white mb-4">
        <h2 className="text-xl font-bold text-gray-800">{recipe.name}</h2>
        <p className="text-gray-600 mt-2">{recipe.description || 'No description available.'}</p>
        {recipe.image && (
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-40 object-cover rounded-md mt-4"
          />
        )}
      </div>
    </Link>
  );
};

export default Recipes;
