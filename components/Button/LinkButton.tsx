import React from "react";

type LinkButtonProps = {
  href: string;
  secondary?: boolean;
  children: React.ReactNode;
};

export const LinkButton = ({ href, secondary, children }: LinkButtonProps) => {
  return (
    <div className="pt-4">
      <a
        className={`block rounded-md border px-1 py-3 text-center font-bold uppercase transition-all ${
          secondary
            ? "border-yellow hover:border-yellow hover:text-yellow"
            : "bg-yellow text-black outline-offset-2 outline-yellow hover:outline"
        }`}
        href={href}
        target="_blank"
      >
        {children}
      </a>
    </div>
  );
};
