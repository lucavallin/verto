interface InputProps {
  placeholder?: string;
  type?: "text" | "email" | "password";
  name?: string;
  id?: string;
}

const InputStyles = {
  default:
    "h-16 w-full rounded-md border-0 border-b-2 border-silver-100 bg-black bg-opacity-50 text-lg text-white-300 transition selection:bg-black-600 md:h-12",
  focus:
    "focus:border-yellow-600 focus:bg-black-500 focus:text-yellow-700 focus:ring-0 focus:placeholder:text-gray-600"
};

export default function Input({ ...props }: InputProps) {
  return (
    <input
      autoComplete="off"
      className={`${InputStyles.default} ${InputStyles.focus} ${
        props?.type === "password" && "select-none selection:bg-transparent"
      }`}
      {...props}
    />
  );
}
