type ActiveTagButtonProps = {
  data: string | string[];
};

const ActiveTagButton = ({ data }: ActiveTagButtonProps) => {
  return (
    <button className="max-w-20 overflow-hidden rounded-full border border-primary bg-primary/10 p-0 px-3 font-mono text-xs font-bold uppercase tracking-wider text-light-100 md:hidden">
      {/* Prevents text from wrapping to the next line. */}
      <span className="truncate">{data}</span>
    </button>
  );
};

export default ActiveTagButton;
