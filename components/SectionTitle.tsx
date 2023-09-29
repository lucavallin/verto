type SectionTitleProps = {
  text: string;
};

export const SectionTitle = ({ text }: SectionTitleProps) => (
  <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-secondary">{text}</h3>
);
