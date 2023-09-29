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
        className={`block rounded-md border px-1 py-3 text-center font-bold uppercase transition-all transition-all ${
          secondary
            ? "border-primary hover:border-primary hover:text-primary"
            : "bg-primary text-dark-400 hover:bg-primary_light"
        }`}
        href={href}
        target="_blank"
      >
        {children}
      </a>
    </div>
  );
};
