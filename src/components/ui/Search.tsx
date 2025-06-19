import React from 'react';
import { CiSearch } from 'react-icons/ci';

const Search = () => {
  return (
    <div className="flex items-center gap-1.5 p-1 border border-b-black rounded cursor-pointer">
      <CiSearch />
      <input className='outline-0 focus:placeholder-transparent' placeholder="Search..." type="search" />
    </div>
  );
};

export default Search;
