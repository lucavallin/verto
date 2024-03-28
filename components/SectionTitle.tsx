type SectionTitleProps = {
  text: string;
  className?: string;
};

function SectionTitle({ text, className }: SectionTitleProps) {
  return (
    <h3 className={`${className || ""} text-sm font-bold uppercase tracking-wider text-gray-900`}>
      <span className="truncate">{text}</span>
    </h3>
  );
}

export { SectionTitle };
