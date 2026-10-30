import { TestUser } from "../types/fixtures";
import { WrongPassword } from "../types/fixtures";
export const DEFAULT_USER: TestUser = {
  email: process.env.TEST_EMAIL ?? "",
  password: process.env.TEST_PASSWORD ?? "",
};
export const WRONG_PASSWORD: WrongPassword = {
  wrongPassword: process.env.TEST_wrong_PASSWORD ?? "",
};
