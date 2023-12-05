type ActiveTagButtonProps = {
  data: string | string[];
};

const ActiveTagButton = ({ data }: ActiveTagButtonProps) => {
  return (
    <button className="overflow-hidden rounded-full border border-primary bg-primary/10 p-0 px-3 font-mono text-xs font-bold uppercase tracking-wider text-silver-500 md:hidden">
      <span className="truncate">{data}</span>
    </button>
  );
};

export default ActiveTagButton;
