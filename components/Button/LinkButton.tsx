import Link from "next/link";
import React from "react";

type LinkButtonProps = {
  className?: string;
  href: string;
  secondary?: boolean;
  children: React.ReactNode;
};

export const LinkButton = ({ className, href, secondary, children }: LinkButtonProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={`block rounded-md border px-1 py-3 text-center font-bold uppercase transition-all ${
        secondary
          ? "border-pink hover:border-pink hover:text-pink"
          : "bg-pink text-black outline-offset-2 outline-pink hover:outline"
      }`}
    >
      {children}
    </Link>
  );
};
