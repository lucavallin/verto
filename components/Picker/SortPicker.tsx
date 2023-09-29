import { RepositorySortOrder } from "../../types";
import { SectionTitle } from "../SectionTitle";

type SortPickerProps = {
  activeSort: RepositorySortOrder;
  sortOptions: RepositorySortOrder[];
  onSortOrderSelect: (sortOrder: RepositorySortOrder) => void;
};

export const SortPicker = ({ activeSort, sortOptions, onSortOrderSelect }: SortPickerProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center pt-6 md:pt-0">
      <div>
        <SectionTitle text="Sort Repositories" />
      </div>
      <div>
        {sortOptions.map((sortOption) => {
          return (
            <button
              key={sortOption}
              onClick={() => onSortOrderSelect(sortOption)}
              className={`group mx-1 border px-2 py-1 inline-block rounded-sm my-1 text-sm ${
                activeSort === sortOption
                  ? "active-pill"
                  : "border-secondary transition-all hover:text-primary transition-all hover:border-primary"
              }`}
            >
              {sortOption}
            </button>
          );
        })}
      </div>
    </div>
  );
};
