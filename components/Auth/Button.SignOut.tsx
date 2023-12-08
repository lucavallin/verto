"use client";

import { signOut } from "next-auth/react";

export const SignoutButton = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="h-fit min-w-fit rounded-full border-2 border-primary px-4 py-2 text-sm font-semibold uppercase text-primary transition hover:bg-primary hover:text-black active:opacity-50 md:inline"
    >
      Sign out
    </button>
  );
};
