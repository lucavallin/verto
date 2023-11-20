"use client";

import { ReactNode } from "react";
import type { AuthSubmitButtonVariant as ButtonVariant } from "types";
import GithubAuthButton from "../Button/GithubAuthButton";
import ToggleButton from "../Button/ToggleButton";
import ButtonWrapper from "../UI/SubmitButtonWrapper";

export default function SubmitButton({
  children,
  variant
}: {
  children: ReactNode;
  variant?: ButtonVariant;
}) {
  return (
    <ButtonWrapper>
      {variant === "toggle_signup" && (
        <ToggleButton toggleTo="/auth/signup">{children}</ToggleButton>
      )}
      {variant === "toggle_signin" && (
        <ToggleButton toggleTo="/auth/signin">{children}</ToggleButton>
      )}
      {variant === "auth_github" && <GithubAuthButton>{children}</GithubAuthButton>}
      {!variant && (
        <button type="submit" className="h-full w-full py-5 md:py-3">
          {children}
        </button>
      )}
    </ButtonWrapper>
  );
}
