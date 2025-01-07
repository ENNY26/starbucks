import React, { useState } from 'react';

const SearchRecipe = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search); // Trigger the onSearch function from props
  };

  return (
    <form className="px-14 py-2 flex" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Starbucks recipes"
        className="w-full p-4 flex flex-1 items-center justify-center"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        name="search"
      />
      <button
        type="submit"
        className="bg-gray-700 w-[120px] rounded-lg border-0 text-white"
      >
        Search
      </button>
    </form>
  );
};

export default SearchRecipe;
