"use client";

import { useToast } from "hooks/useToast";
import { handleSignin, handleSignup } from "lib/handlers";
import { FormEvent, ReactNode } from "react";
import Input from "./InputField";
import Password from "./PasswordField";
import SubmitButton from "./SubmitButton";

export default function Form({
  children,
  variant
}: {
  children: ReactNode;
  variant: "signup" | "signin";
}) {
  const emitToast = useToast();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const rawFormData = event.target as HTMLFormElement;

    if (variant === "signup") {
      await handleSignup(rawFormData, emitToast);
    } else {
      await handleSignin(rawFormData, emitToast);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-8 flex flex-col gap-6">
        {variant === "signup" && (
          <Input placeholder="Enter username" id="username" name="username" />
        )}
        <Input placeholder="Enter email" id="email" name="email" />
        <Password placeholder="Enter password" id="password" name="password" />
        {variant === "signup" && (
          <Password placeholder="Confirm password" id="confirmPassword" name="confirmPassword" />
        )}
      </div>
      <SubmitButton>{children}</SubmitButton>
    </form>
  );
}
