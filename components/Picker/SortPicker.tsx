import { RepositorySortOrder } from "../../types";
import { SectionTitle } from "../SectionTitle";

type SortPickerProps = {
  activeSort: RepositorySortOrder;
  sortOptions: RepositorySortOrder[];
  onSortOrderSelect: (sortOrder: RepositorySortOrder) => void;
};

export const SortPicker = ({ activeSort, sortOptions, onSortOrderSelect }: SortPickerProps) => {
  return (
    <div
      className="flex flex-col justify-between pt-6 md:flex-row md:items-center md:pt-0"
      id="repositories-list"
    >
      <div>
        <SectionTitle className="mb-2" text="Sort Repositories" />
      </div>
      <div>
        {sortOptions.map((sortOption) => {
          return (
            <button
              key={sortOption}
              onClick={() => onSortOrderSelect(sortOption)}
              className={`group mx-1 my-1 inline-block rounded-sm border px-2 py-1 text-sm ${
                activeSort === sortOption
                  ? "active-pill"
                  : "border-secondary transition-all hover:border-primary hover:text-primary"
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
