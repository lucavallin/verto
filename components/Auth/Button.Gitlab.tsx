"use client";

import { faGitlab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";
import { ReactNode } from "react";

export default function GithubAuthButton({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={() => signIn("gitlab", { callbackUrl: "/" })}
      className="h-full w-full p-5 md:p-3"
    >
      <FontAwesomeIcon icon={faGitlab} className="mr-2" />
      {children}
    </button>
  );
}
