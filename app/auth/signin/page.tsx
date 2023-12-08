import { GithubAuthButton, GitlabAuthButton } from "@/components/Auth/Buttons";

export default async function SignupPage() {
  return (
    <section className="flex h-full w-full flex-col gap-2 rounded-xl px-6 pb-6">
      <GithubAuthButton />
      <GitlabAuthButton />
    </section>
  );
}
