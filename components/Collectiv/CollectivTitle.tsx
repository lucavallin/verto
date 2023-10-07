type CollectivTitleProps = {
  text: string;
};

export const CollectivTitle = ({ text }: CollectivTitleProps) => (
  <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-[#F8F8F8]">{text}</h3>
);
