import { Loader } from "@/components/Loader";
import { SectionTitle } from "@/components/SectionTitle";
import { useRepositoryQuery } from "store";
import { RepositorySortOrder } from "types";

interface Props {
  isLoading: boolean;
}

function SortPicker({ isLoading }: Props) {
  const {
    query: { sort },
    setQuery
  } = useRepositoryQuery();

  return (
    <div
      className="flex flex-col justify-between pt-6 lg:flex-row lg:items-center lg:pt-0"
      id="repositories-list"
    >
      <div className="flex gap-4">
        <SectionTitle className="mb-2" text="Sort Repositories" />
        {isLoading && (
          <div className="mt-1">
            <Loader />
          </div>
        )}
      </div>

      <div>
        {Object.values(RepositorySortOrder).map((option) => {
          return (
            <button
              key={option}
              onClick={() => setQuery("sort", option)}
              className={`group m-1 inline-block rounded-sm border px-2 py-1 ${
                sort === option
                  ? "active-pill"
                  : "border-silver-100 transition-all hover:border-primary hover:text-primary"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export { SortPicker };
