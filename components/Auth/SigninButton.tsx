"use client";

import { usePathPrefix } from "hooks/usePathData";
import Link from "next/link";

export const SigninButton = () => {
  const pageType = usePathPrefix();
  if (pageType === "auth") return;
  return (
    <Link
      href="/auth/signin"
      className="h-fit min-w-fit rounded-full border-2 border-yellow px-4 py-2 text-sm font-semibold text-yellow transition hover:bg-yellow hover:text-black active:opacity-50 md:inline"
    >
      Sign in
    </Link>
  );
};
