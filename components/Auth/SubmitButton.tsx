"use client";
import { ReactNode } from "react";

const ButtonStyles = {
  default:
    "w-full h-fit border-0 outline-0 text-white-300 p-5 text-xl font-extrabold my-2 ring-2 ring-silver-100 rounded-md select-none transition",
  hover: "hover:text-yellow hover:ring-yellow hover:bg-black-500",
  active: "active:bg-yellow active:text-black-500",
  largeScreen: "md:text-base md:h-12 md:p-3"
};

export default function SubmitButton({ children }: { children: ReactNode }) {
  return (
    <button
      type="submit"
      className={`${ButtonStyles.default} ${ButtonStyles.hover} ${ButtonStyles.active} ${ButtonStyles.largeScreen}`}
    >
      {children}
    </button>
  );
}
