"use client";

import { usePathPrefix } from "hooks/usePathData";
import Link from "next/link";

export const SigninButton = () => {
  const pageType = usePathPrefix();
  if (pageType === "auth") return;
  return (
    <Link
      href="/auth/signin"
      className="h-fit min-w-fit rounded-full border-2 border-primary px-4 py-2 text-sm font-semibold uppercase text-primary transition hover:bg-primary hover:text-black active:opacity-50 md:inline"
    >
      Sign in
    </Link>
  );
};
