// searchbar.tsx
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useAppData } from "../hooks/useAppData";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { filterRepositoriesByQuery } = useAppData();

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    filterRepositoriesByQuery(searchQuery); 
  };

  const handleSearchButtonClick = () => {
    filterRepositoriesByQuery(query); 
  };

  return (
    <div className="relative mt-4 flex rounded-md">
      <input
        type="text"
        className="block w-full rounded-l-md px-4 py-3 pl-11 text-sm text-secondary"
        placeholder="Search in name, description, tags..."
        value={query} 
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 flex items-center pl-4">
        <FontAwesomeIcon icon={faSearch} className={"text-secondary"} />
      </div>
    </div>
  );
};
