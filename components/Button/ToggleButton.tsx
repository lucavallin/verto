import Link from "next/link";
import { ReactNode } from "react";

export default function ToggleButton({
  children,
  toggleTo
}: {
  children: ReactNode;
  toggleTo: string;
}) {
  return (
    <Link href={toggleTo}>
      <h1 className="py-5 md:py-3">{children}</h1>
    </Link>
  );
}
