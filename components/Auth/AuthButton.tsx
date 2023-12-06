import { getUserCredentials } from "lib/auth";
import { SigninButton } from "./Button.SignIn";
import { SignoutButton } from "./Button.SignOut";

export default async function AuthButton() {
  const user = await getUserCredentials();
  return user ? <SignoutButton /> : <SigninButton />;
}
