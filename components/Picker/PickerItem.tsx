import Link from "next/link";

import { Tag } from "../../types";

type PickerItemLinkProps = {
  className: string;
  totalOccurrences: number;
  href: string;
  text: Tag["display"];
};

export const PickerItem = ({ className, totalOccurrences, href, text }: PickerItemLinkProps) => {
  return (
    <Link href={href} className={className}>
      {text}
      <span className="text-white-400 transition-all group-hover:text-yellow">
        &nbsp;&times;{totalOccurrences}
      </span>
    </Link>
  );
};
