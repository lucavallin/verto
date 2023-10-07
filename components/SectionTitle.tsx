type SectionTitleProps = {
  text: string;
};

export const SectionTitle = ({ text }: SectionTitleProps) => (
  <div className="flex items-center gap-[6px]">
    <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-secondary">{text}</h3>
  </div>
);
