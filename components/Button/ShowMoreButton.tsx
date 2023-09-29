type ShowMoreButtonProps = {
  hasMore: boolean;
  onClick: () => void;
};

export const ShowMoreButton = ({ hasMore, onClick }: ShowMoreButtonProps) => {
  return (
    <div
      className="group mx-1 border px-2 py-1 inline-block rounded-sm my-1 text-sm active-pill cursor-pointer transition-all hover:bg-primary_light transition-all hover:text-dark-400"
      onClick={onClick}
    >
      Show {hasMore ? "more..." : "less"}
    </div>
  );
};
