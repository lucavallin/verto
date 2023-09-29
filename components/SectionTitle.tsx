type SectionTitleProps = {
  text: string;
};

export const SectionTitle = ({ text }: SectionTitleProps) => (
  <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-secondary">{text}</h3>
);
