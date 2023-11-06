"use client";

import { useToast } from "hooks/useToast";
import { validateFormData } from "lib/utils";
import { FormEvent } from "react";
import Input from "./InputField";
import SubmitButton from "./SubmitButton";

export default function Form({ type }: { type: "signup" | "signin" }) {
  const emitToast = useToast();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const rawFormData = event.target as HTMLFormElement;

      const processedFormData = validateFormData({
        username: rawFormData.username.value.trim(),
        email: rawFormData.email.value.trim(),
        password: rawFormData.password.value,
        confirmPassword: rawFormData.confirmPassword.value
      });
      console.log(processedFormData);
    } catch (error) {
      emitToast(error.message);
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-8 flex flex-col gap-6">
        <Input placeholder="Enter username" type="text" id="username" name="username" />
        <Input placeholder="Enter email" id="email" name="email" />
        <Input placeholder="Enter password" id="password" name="password" type="password" />
        <Input
          placeholder="Confirm password"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
        />
      </div>
      <SubmitButton>Sign up</SubmitButton>
    </form>
  );
}
