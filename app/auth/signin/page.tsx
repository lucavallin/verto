import Form from "@/components/Auth/Form";
import SubmitButton from "@/components/Auth/SubmitButton";
import Divider from "@/components/ui/Divider";

export default function SignupPage() {
  return (
    <section className="h-full w-full flex-col rounded-xl p-10">
      <Form variant="signin">Sign in</Form>
      <Divider />
      <div className="flex flex-col gap-2">
        <SubmitButton variant="toggle_signup">Create a new Account</SubmitButton>
        <SubmitButton variant="auth_github">Sign in with Github</SubmitButton>
      </div>
    </section>
  );
}
