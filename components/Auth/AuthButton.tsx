import { getUserCredentials } from "lib/api/auth";
import { LogoutButton } from "./LogoutButton";
import { SigninButton } from "./SigninButton";

export default async function AuthButton() {
  const user = await getUserCredentials();
  return user ? <LogoutButton /> : <SigninButton />;
}
