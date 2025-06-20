import React from 'react';
import { CiSearch } from 'react-icons/ci';

type SearchProps = {
  search: string;
  setSearch: (search: string) => void;
};

const Search = ({ search, setSearch }: SearchProps) => {
  return (
    <div className="flex items-center gap-1.5 p-1 border border-b-black rounded cursor-pointer">
      <CiSearch />
      <input
        className="outline-0 focus:placeholder-transparent"
        placeholder="Search..."
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
