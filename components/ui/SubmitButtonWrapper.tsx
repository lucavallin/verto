import { ReactNode } from "react";

export default function ButtonWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="my-2 h-fit w-full select-none rounded-md border-0 text-center text-xl font-extrabold text-white-300 outline-0 ring-2 ring-silver-100 transition hover:bg-black-500 hover:text-yellow hover:ring-yellow active:bg-yellow active:text-black-500 md:h-12 md:text-base">
      {children}
    </div>
  );
}
