import React from 'react';
import heroimg from '../assets/Images/heroimg.png';

const ProfilePage = () => {
  return (
    <div className="p-4 flex flex-col lg:flex-row gap-6">
      {/* Left Section: Profile Info */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <img
          src={heroimg}
          alt="placeholder img"
          width={160}
          className="rounded-full mb-4"
        />
        <h1 className="text-xl font-semibold mb-2">Name Name</h1>
        <div className="border-2 rounded-md py-2 px-4 text-center hover:bg-gray-100 transition">
          <h3 className="text-sm font-medium">Edit Profile</h3>
        </div>
        <span className="text-sm text-gray-600 mt-4">
          5 recipes saved · 3 ingredients in wishlist
        </span>
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


            {/* ingredients wishlist*/}


    </div>
  );
};

export default ProfilePage;
