import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="relative flex rounded-md mt-4 hidden">
      <input
        type="text"
        className="py-3 px-4 pl-11 block w-full rounded-l-md text-sm text-secondary"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
        <FontAwesomeIcon icon={faSearch} className={"text-secondary"} />
      </div>
      <button
        type="button"
        className="w-20 py-3 px-4 inline-flex flex-shrink-0 justify-center items-center rounded-r-md border border-primary transition-all hover:bg-primary font-semibold text-whitetransition-all text-sm"
        onClick={() => alert(`Show repositories that have "${query}" in the owner, name, language or tags or issue title`)}
      >
        Search
      </button>
    </div>
  );
};
