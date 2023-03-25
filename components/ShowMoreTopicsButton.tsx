type ShowMoreTopicsButtonProps = {
  hasMoreTopics: boolean;
  onClick: () => void;
};

export const ShowMoreTopicsButton = ({ hasMoreTopics, onClick }: ShowMoreTopicsButtonProps) => {
  return (
    <div
      className="group mx-1 border px-2 py-1 inline-block rounded-sm my-1 text-sm active-pill cursor-pointer hover:bg-light_juniper hover:text-ink-400"
      onClick={onClick}
    >
      Show {hasMoreTopics ? "more..." : "less"}
    </div>
  );
};
