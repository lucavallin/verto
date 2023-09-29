type ShowMoreButtonProps = {
  hasMore: boolean;
  onClick: () => void;
};

export const ShowMoreButton = ({ hasMore, onClick }: ShowMoreButtonProps) => {
  return (
    <div
      className="active-pill group mx-1 my-1 inline-block cursor-pointer rounded-sm border px-2 py-1 text-sm transition-all transition-all hover:bg-primary_light hover:text-dark-400"
      onClick={onClick}
    >
      Show {hasMore ? "more..." : "less"}
    </div>
  );
};
