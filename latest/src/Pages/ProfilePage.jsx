import React, { useState, useEffect } from "react";
import heroimg from "../assets/Images/heroimg.png";
import coffeeBean from '../assets/Icons/coffee-bean.svg';

const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState(localStorage.getItem("profileName") || "Name Name");
  const [profileImg, setProfileImg] = useState(localStorage.getItem("profileImg") || heroimg);
  const [tempName, setTempName] = useState(name);
  const [tempImg, setTempImg] = useState(profileImg);
  const [inputValue, setInputValue] = useState("");
  const [ingredients, setIngredients] = useState(JSON.parse(localStorage.getItem("ingredients")) || []);
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    const savedName = localStorage.getItem("profileName");
    const savedImg = localStorage.getItem("profileImg");
    const savedIngredients = localStorage.getItem("ingredients");
    const storedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];

    if (savedName) setName(savedName);
    if (savedImg) setProfileImg(savedImg);
    if (savedIngredients) setIngredients(JSON.parse(savedIngredients));

    setSavedRecipes(storedRecipes); // Load saved recipes
  }, []);

  useEffect(() => {
    localStorage.setItem("profileName", name);
    localStorage.setItem("profileImg", profileImg);
    localStorage.setItem("ingredients", JSON.stringify(ingredients));
  }, [name, profileImg, ingredients]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSave = () => {
    setName(tempName);
    setProfileImg(tempImg);
    closeModal();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setTempImg(imageUrl);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const addIngredient = () => {
    if (inputValue.trim() === "") return;
    const newIngredients = [...ingredients, inputValue];
    setIngredients(newIngredients);
    setInputValue("");
  };

  const removeIngredient = (index) => {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
  };

  return (
    <div className="p-4 flex flex-col lg:flex-row gap-6">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <img src={profileImg} alt="Profile" width={160} className="rounded-full mb-4" />
        <h1 className="text-xl font-semibold mb-2">{name}</h1>
        <button onClick={openModal} className="border-2 rounded-md py-2 px-4 hover:bg-gray-100">
          Edit Profile
        </button>
        <span className="text-sm text-gray-600 mt-4">{ingredients.length} ingredients in wishlist</span>

        <div className="mt-6 w-full">
          <h2 className="text-lg font-semibold mb-2">My Ingredients List</h2>
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Enter an ingredient"
              className="border p-2 flex-1"
            />
            <button onClick={addIngredient} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
          </div>
          <ul className="mt-2">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="border p-2 my-1 rounded flex items-center">
                <img src={coffeeBean} alt="coffee-bean" width={20} /> {ingredient}
                <button onClick={() => removeIngredient(index)} className="text-green-500 ml-2">X</button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Saved Recipes Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
        {savedRecipes.length > 0 ? (
          savedRecipes.map((recipe, index) => (
            <div key={index} className="border rounded-md overflow-hidden shadow-sm">
              <img src={recipe.image} alt={recipe.name} className="w-full h-40 object-cover" />
              <div className="p-2">
                <h1 className="text-sm font-semibold">{recipe.name}</h1>
              </div>
            </div>
          ))
        ) : (
          <p>No saved recipes yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
