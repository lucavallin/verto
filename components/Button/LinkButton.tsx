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
            ? "border-pink hover:border-pink hover:text-pink"
            : "bg-pink text-white outline-offset-2 outline-pink hover:outline"
        }`}
        href={href}
        target="_blank"
      >
        {children}
      </a>
    </div>
  );
};
