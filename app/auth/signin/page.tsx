import Form from "@/components/Auth/Form";
import SubmitButton from "@/components/Auth/SubmitButton";

export default function SignupPage() {
  return (
    <section className="h-full w-full flex-col rounded-xl p-10">
      <Form type="signin" />
      {/* eslint-disable-next-line tailwindcss/no-contradicting-classname */}
      <div className="w-full bg-gradient-to-b from-black-400 from-[49%] via-silver-300 via-50% to-black-400 to-[51%] p-4 text-center text-gray-400">
        <span className="h-fit w-fit select-none bg-black-400 px-3">or</span>
      </div>
      <SubmitButton type="signup">Create a new Account</SubmitButton>
      <SubmitButton type="github">Sign in with Github</SubmitButton>
    </section>
  );
}
