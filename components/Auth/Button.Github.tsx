"use client";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";
import { ReactNode } from "react";

export default function GithubAuthButton({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={() => signIn("github", { callbackUrl: "/" })}
      className="h-full w-full p-5 md:p-3"
    >
      <FontAwesomeIcon icon={faGithub} className="mr-2" />
      {children}
    </button>
  );
}
