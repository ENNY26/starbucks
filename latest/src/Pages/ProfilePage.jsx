import React, { useState, useEffect } from "react";
import heroimg from "../assets/Images/heroimg.png";
import coffeeBean from '../assets/Icons/coffee-bean.svg'
const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState(localStorage.getItem("profileName") || "Name Name");
  const [profileImg, setProfileImg] = useState(localStorage.getItem("profileImg") || heroimg);
  const [tempName, setTempName] = useState(name);
  const [tempImg, setTempImg] = useState(profileImg);
  const [inputValue, setInputValue] = useState("");
  const [ingredients, setIngredients] = useState(JSON.parse(localStorage.getItem("ingredients")) || []);

  // Load data from local storage when the component mounts
  useEffect(() => {
    const savedName = localStorage.getItem("profileName");
    const savedImg = localStorage.getItem("profileImg");
    const savedIngredients = localStorage.getItem("ingredients");

    if (savedName) setName(savedName);
    if (savedImg) setProfileImg(savedImg);
    if (savedIngredients) setIngredients(JSON.parse(savedIngredients));
  }, []);

  // Save data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("profileName", name);
    localStorage.setItem("profileImg", profileImg);
    localStorage.setItem("ingredients", JSON.stringify(ingredients));
  }, [name, profileImg, ingredients]);

  // Function to open and close the modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle saving profile updates
  const handleSave = () => {
    setName(tempName);
    setProfileImg(tempImg);
    closeModal();
  };

  // Handle file selection for profile image
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setTempImg(imageUrl);
    }
  };

  // Handle ingredient input
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Add new ingredient
  const addIngredient = () => {
    if (inputValue.trim() === "") return;
    const newIngredients = [...ingredients, inputValue];
    setIngredients(newIngredients);
    localStorage.setItem("ingredients", JSON.stringify(newIngredients)); // Save to local storage
    setInputValue("");
  };

  // Remove an ingredient
  const removeIngredient = (index) => {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
    localStorage.setItem("ingredients", JSON.stringify(updatedIngredients)); // Save to local storage
  };

  return (
    <div className="p-4 flex flex-col lg:flex-row gap-6">
      {/* Left Section: Profile Info */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <img src={profileImg} alt="Profile" width={160} className="rounded-full mb-4" />
        <h1 className="text-xl font-semibold mb-2">{name}</h1>
        <button onClick={openModal} className="border-2 rounded-md py-2 px-4 text-center hover:bg-gray-100 transition">
          <h3 className="text-sm font-medium">Edit Profile</h3>
        </button>
        <span className="text-sm text-gray-600 mt-4">{ingredients.length} ingredients in wishlist</span>

        {/* Ingredients List Section */}
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

      {/* Right Section: Saved Recipes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="border rounded-md overflow-hidden shadow-sm">
            <img src={heroimg} alt="Recipe" className="w-full h-40 object-cover" />
            <div className="p-2">
              <h1 className="text-sm font-semibold">Name Name Of Recipe</h1>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>

            {/* Profile Image Preview */}
            <div className="mb-4">
              <img src={tempImg} alt="Preview" className="w-24 h-24 rounded-full mx-auto mb-2" />
              <input type="file" accept="image/*" className="border p-2 w-full" onChange={handleFileChange} />
            </div>

            {/* Profile Name Input */}
            <input
              type="text"
              className="border p-2 w-full mb-4"
              placeholder="Enter new name"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
            />

            {/* Buttons */}
            <div className="flex justify-end gap-2">
              <button onClick={closeModal} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
              <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
