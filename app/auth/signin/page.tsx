import { GithubAuthButton, GitlabAuthButton } from "@/components/Auth/Buttons";

export default async function SignupPage() {
  return (
    <section className="flex h-full w-full flex-col gap-2 rounded-xl p-10">
      <GithubAuthButton />
      <GitlabAuthButton />
    </section>
  );
}
