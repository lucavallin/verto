// searchbar.tsx
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRepositoryQuery } from "store";

function SearchBar() {
  const {
    query: { search },
    setQuery
  } = useRepositoryQuery();
  return (
    <div className="relative mt-4 flex rounded-md">
      <input
        type="text"
        className="block w-full rounded-md bg-transparent px-4 py-3 pl-11 text-sm text-gray-900"
        placeholder="Search in name, description, tags..."
        value={search}
        onChange={(e) => setQuery("search", e.target.value)}
      />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 flex items-center pl-4">
        <FontAwesomeIcon icon={faSearch} className={"text-silver-500"} />
      </div>
    </div>
  );
}

export { SearchBar };
