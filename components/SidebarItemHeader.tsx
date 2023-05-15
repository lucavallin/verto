type SidebarItemHeaderProps = {
  text: string;
};

export const SidebarItemHeader = ({ text }: SidebarItemHeaderProps) => (
  <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-slate">{text}</h3>
);
