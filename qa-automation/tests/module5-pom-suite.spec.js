import { test, expect } from "@playwright/test";
import { LoginPage } from "../pageObjects/LoginPage.js";
import { generateTestUser } from "../helpers/testData.js";

test.describe("вход в Tasteorama (Page Object)", () => {
  let loginPage;
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.open();
  });
  test("успешный вход перебрасывает на главную страницу", async ({ page }) => {
    await Promise.all([
      page.waitForResponse((res) => res.url().includes("/auth/login")),
      loginPage.login(process.env.TEST_EMAIL, process.env.TEST_PASSWORD),
    ]);
    await expect(page).toHaveURL("/");
  });
  test("неправильный пароль", async ({ page }) => {
    await loginPage.login(
      process.env.TEST_EMAIL,
      process.env.TEST_wrong_PASSWORD,
    );
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(page).toHaveURL("/auth/login");
  });
});
test.describe("проверка хелпера generateTestUser", () => {
  test("возвращает объект с ожидаемой формрй", () => {
    const testUser = generateTestUser();
    const keys = Object.keys(testUser);
    expect(keys).toContain("username");
    expect(keys).toContain("email");
    expect(keys).toContain("password");
    expect(typeof testUser.email).toBe("string");
  });
  test("копия через spread равняется оригиналу по содержанию, хотя это другой объект", () => {
    const testUser = generateTestUser();
    const copy = { ...testUser };
    expect(copy).toEqual(testUser);
    expect(copy === testUser).toBe(false);
  });
  test("spread даёт вариацию не меняя оригинал", () => {
    const testUser = generateTestUser();
    const invalidUser = { ...testUser, password: "" };
    expect(invalidUser.password).toBe("");
    expect(testUser.password).not.toBe("");
  });
});
test.describe("вход несущесвующего пользователя", () => {
  test("сгенерированыый хелпером пользователь видит оштбку входа", async ({
    page,
  }) => {
    const nonExistentUser = generateTestUser();
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(nonExistentUser.email, nonExistentUser.password);
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(page).toHaveURL("/auth/login");
  });
});
