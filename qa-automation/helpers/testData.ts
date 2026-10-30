import { GeneratedTestUser } from "../types/fixtures";
export function generateTestUser({
  prefix = "user",
  domain = "gmail.com",
}: {
  prefix?: string;
  domain?: string;
} = {}): GeneratedTestUser {
  const random = Math.floor(Math.random() * 1000000);
  const username = `${prefix}_${random}`;
  return {
    username,
    email: `${username}@${domain}`,
    password: "ytkalub712",
  };
}
