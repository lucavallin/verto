type SectionTitleProps = {
  text: string;
  className?: string;
};

export const SectionTitle = ({ text, className }: SectionTitleProps) => (
  <h3 className={`${className || ""} text-sm font-bold uppercase tracking-wider text-gray-900`}>
    <span className="truncate">{text}</span>
  </h3>
);
