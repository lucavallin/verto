"use client";

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import { InputProps } from "types";

export default function PasswordField({ ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="group relative flex flex-col items-end justify-center">
      <input
        type={`${showPassword ? "text" : "password"}`}
        autoComplete="off"
        className="h-16 w-full select-none rounded-md border-0 border-b-2 border-silver-100 bg-black/50 pr-16 text-lg text-white-300 transition selection:bg-transparent focus:placeholder:text-gray-600 group-focus-within:border-yellow-600 group-focus-within:bg-black-500 group-focus-within:text-yellow-700 group-focus-within:ring-0 md:h-12"
        {...props}
      />
      <button
        type="button"
        tabIndex={-1}
        onClick={() => setShowPassword(!showPassword)}
        className="absolute m-6 scale-125 text-white-300 group-focus-within:text-yellow-700"
      >
        {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
      </button>
    </div>
  );
}
