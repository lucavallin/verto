import { RepositorySortOrder } from "../types";
import { MenuItemHeader } from "./MenuItemHeader";

type RepositorySortPickerProps = {
  activeSort: RepositorySortOrder;
  sortOptions: RepositorySortOrder[];
  onSortOrderSelect: (sortOrder: RepositorySortOrder) => void;
};

export const RepositorySortPicker = ({
  activeSort,
  sortOptions,
  onSortOrderSelect
}: RepositorySortPickerProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center">
      <div>
        <MenuItemHeader text="Sort Repositories" />
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
                  : "border-slate hover:text-juniper hover:border-juniper"
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
