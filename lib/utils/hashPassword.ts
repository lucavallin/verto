import { compare, hash } from "bcryptjs";

export const comparePasswords = async (
  passwords: string,
  hashedPassword: string
): Promise<boolean> => {
  const isPasswordCorrect = await compare(passwords, hashedPassword);
  return isPasswordCorrect;
};

export const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword = await hash(password, 10);
  return hashedPassword;
};
