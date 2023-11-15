"use client";

import { OAuthProvider } from "lib/api/actions";
import Link from "next/link";
import { ReactNode } from "react";

const ButtonStyles = {
  default:
    "w-full h-fit border-0 outline-0 text-white-300 text-xl text-center font-extrabold my-2 ring-2 ring-silver-100 rounded-md select-none transition",
  hover: "hover:text-yellow hover:ring-yellow hover:bg-black-500",
  active: "active:bg-yellow active:text-black-500",
  largeScreen: "md:text-base md:h-12",
  inherit: "w-full h-full p-5 md:p-3"
};

const ToggleButton = ({ children, toggleTo }: { children: ReactNode; toggleTo: string }) => {
  return (
    <Link href={toggleTo}>
      <h1 className="py-5 md:py-3">{children}</h1>
    </Link>
  );
};

const OAuthButton = ({ children, action }: { children: ReactNode; action: () => void }) => {
  return (
    <button type="button" onClick={action} className={`${ButtonStyles.inherit}`}>
      {children}
    </button>
  );
};

export default function SubmitButton({
  children,
  type = "submit"
}: {
  children: ReactNode;
  type?: "submit" | "github" | "signup" | "signin";
}) {
  return (
    <div
      className={`${ButtonStyles.default} ${ButtonStyles.hover} ${ButtonStyles.active}
      ${ButtonStyles.largeScreen} ${type === "github" && "my-5"}`}
    >
      {(() => {
        switch (type) {
          case "submit":
            return (
              <button type="submit" className={`${ButtonStyles.inherit}`}>
                {children}
              </button>
            );
          case "github":
            return <OAuthButton action={OAuthProvider[type]}>{children}</OAuthButton>;
          case "signup":
            return <ToggleButton toggleTo="/auth/signup">{children}</ToggleButton>;
          case "signin":
            return <ToggleButton toggleTo="/auth/signin">{children}</ToggleButton>;
        }
      })()}
    </div>
  );
}
