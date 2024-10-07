import React from 'react';

const Search = () => {
  return (
    <div className="absolute top-[95px] right-[150px] text-center p-12">
    <h2 className="text-secondary text-4xl">Find Your Book</h2>
    <div className="flex items-center justify-center">
      <input
        type="text"
        placeholder="Enter your Book Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={searchBook}
      />
      <button className="bg-white text-white px-2 ">
        <i className="fas fa-search text-gray-400"></i>
      </button>
    </div>
  </div>
  );
}

export default Search;
