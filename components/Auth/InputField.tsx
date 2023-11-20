import { InputProps } from "types";

export default function Input({ ...props }: InputProps) {
  return (
    <input
      type="text"
      autoComplete="off"
      className="h-16 w-full rounded-md border-0 border-b-2 border-silver-100 bg-black/50 text-lg text-white-300 transition selection:bg-black-600 focus:border-yellow-600 focus:bg-black-500 focus:text-yellow-700 focus:ring-0 focus:placeholder:text-gray-600 md:h-12"
      {...props}
    />
  );
}
