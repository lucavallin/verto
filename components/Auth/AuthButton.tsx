import { getUserCredentials } from "lib/api/auth";
import { LogoutButton } from "./LogoutButton";
import { SigninButton } from "./SigninButton";

export default async function Auth() {
  const user = await getUserCredentials();
  return user ? <LogoutButton /> : <SigninButton />;
}
