import React, { useState } from "react";

const SearchRecipe = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search); // Trigger the onSearch function from props
  };

  return (
    <form 
      className="flex items-center gap-4 max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-full border border-gray-300"
      onSubmit={handleSubmit}
    >
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search Starbucks recipes..."
        className="flex-1 p-3 pl-5 text-gray-700 rounded-full border-none outline-none focus:ring-2 focus:ring-[#086942] shadow-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Search Button */}
      <button
        type="submit"
        className="bg-gradient-to-r from-[#086942] to-[#075c39] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all"
      >
        Search
      </button>
    </form>
  );
};

export default SearchRecipe;
