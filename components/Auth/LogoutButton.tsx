"use client";

import { signOut } from "next-auth/react";

export const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="h-fit min-w-fit rounded-full border-2 border-yellow px-4 py-2 text-sm font-semibold text-yellow transition hover:bg-yellow hover:text-black active:opacity-50 md:inline"
    >
      Sign out
    </button>
  );
};
