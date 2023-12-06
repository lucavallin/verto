import { ReactNode } from "react";
import Github from "./Button.Github";
import Gitlab from "./Button.Gitlab";

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div className="my-2 h-fit w-full select-none rounded-md border-0 text-center text-xl font-extrabold text-white-300 outline-0 ring-2 ring-silver-100 transition hover:bg-black-500 hover:text-primary hover:ring-primary active:bg-primary active:text-black-500 md:h-12 md:text-base">
    {children}
  </div>
);

export const GithubAuthButton = () => (
  <Wrapper>
    <Github>Continue with Github</Github>
  </Wrapper>
);

export const GitlabAuthButton = () => (
  <Wrapper>
    <Gitlab>Continue with Gitlab</Gitlab>
  </Wrapper>
);
