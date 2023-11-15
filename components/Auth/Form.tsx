"use client";

import { useToast } from "hooks/useToast";
import { handleSignin, handleSignup } from "lib/handlers";
import Input from "./InputField";
import SubmitButton from "./SubmitButton";

export default function Form({ type }: { type: "signup" | "signin" }) {
  const emitToast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const rawFormData = event.target as HTMLFormElement;

    if (type === "signup") {
      await handleSignup(rawFormData, emitToast);
    } else {
      await handleSignin(rawFormData, emitToast);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-8 flex flex-col gap-6">
        {type === "signup" && (
          <Input placeholder="Enter username" type="text" id="username" name="username" />
        )}
        <Input placeholder="Enter email" id="email" name="email" />
        <Input placeholder="Enter password" id="password" name="password" type="password" />
        {type === "signup" && (
          <Input
            placeholder="Confirm password"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
          />
        )}
      </div>
      {type === "signup" ? (
        <SubmitButton>Sign up</SubmitButton>
      ) : (
        <SubmitButton>Sign in</SubmitButton>
      )}
    </form>
  );
}
