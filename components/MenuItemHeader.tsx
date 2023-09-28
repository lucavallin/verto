type MenuItemHeaderProps = {
  text: string;
};

export const MenuItemHeader = ({ text }: MenuItemHeaderProps) => (
  <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-slate">{text}</h3>
);
