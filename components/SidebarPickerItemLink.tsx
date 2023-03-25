import Link from "next/link";

import { Tag } from "../types";

type SidebarPickerItemLinkProps = {
  className: string;
  totalOccurrences: number;
  href: string;
  text: Tag["display"];
};

export const SidebarPickerItemLink = ({
  className,
  totalOccurrences,
  href,
  text
}: SidebarPickerItemLinkProps) => {
  return (
    <Link href={href} className={className}>
      {text}
      <span className={`text-vanilla-400 group-hover:text-juniper`}>
        &nbsp;&times;{totalOccurrences}
      </span>
    </Link>
  );
};
