"use client";

import { ReactNode } from "react";
import GithubAuthButton from "../Button/GithubAuthButton";
import ToggleButton from "../Button/ToggleButton";
import ButtonWrapper from "../ui/SubmitButtonWrapper";

type ButtonVariant = "toggle_signup" | "toggle_signin" | "auth_github";

export default function SubmitButton({
  children,
  variant
}: {
  children: ReactNode;
  variant?: ButtonVariant;
}) {
  switch (variant) {
    case "toggle_signup":
      return (
        <ButtonWrapper>
          <ToggleButton toggleTo="/auth/signup">{children}</ToggleButton>
        </ButtonWrapper>
      );
    case "toggle_signin":
      return (
        <ButtonWrapper>
          <ToggleButton toggleTo="/auth/signin">{children}</ToggleButton>
        </ButtonWrapper>
      );
    case "auth_github":
      return (
        <ButtonWrapper>
          <GithubAuthButton>{children}</GithubAuthButton>
        </ButtonWrapper>
      );
    default:
      return (
        <ButtonWrapper>
          <button type="submit" className="h-full w-full py-5 md:py-3">
            {children}
          </button>
        </ButtonWrapper>
      );
  }
}
