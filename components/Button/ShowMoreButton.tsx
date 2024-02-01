type ShowMoreButtonProps = {
  hasMore: boolean;
  onClick: () => void;
};

export const ShowMoreButton = ({ hasMore, onClick }: ShowMoreButtonProps) => {
  return (
    <button
      className="active-pill group m-1 inline-block cursor-pointer rounded-sm border px-2 py-1 transition-all hover:border-dashed hover:bg-primary/20 hover:text-white"
      onClick={onClick}
    >
      Show {hasMore ? "more..." : "less"}
    </button>
  );
};
