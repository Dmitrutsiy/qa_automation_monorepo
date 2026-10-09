import { test, expect } from "@playwright/test";

test.describe("вход в Tasteorama", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/auth/login");
  });
  test("успешный вход перебрасывает на главную страницу", async ({ page }) => {
    const emailField = page.locator("#email");
    const passwordField = page.locator("#password");
    const submitButton = page.locator('button[type="submit"]');
    await emailField.fill(process.env.TEST_EMAIL);
    await passwordField.fill(process.env.TEST_PASSWORD);
    await submitButton.click();
    await expect(page).toHaveURL("/");
  });
  test("неправильный пароль", async ({ page }) => {
    const emailField = page.locator("#email");
    const passwordField = page.locator("#password");
    const submitButton = page.locator('button[type="submit"]');
    await emailField.fill(process.env.TEST_EMAIL);
    await passwordField.fill("Duck-Duck");
    await submitButton.click();
    await expect(page.locator('[role="alert"]')).toHaveText(
      "UnauthorizedError",
    ); // выбран toHaveText потому что надпись статичная
    await expect(page).toHaveURL("/auth/login");
  });
});
test.describe("первая карточка списка рецептов", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });
  test("первая карточка списка видимая", async ({ page }) => {
    await expect(page.locator("article")).not.toHaveCount(0);
    await expect(page.locator("article").first()).toBeVisible(); //выбор за поицией законный, потому что требоваание проверяет первую карточку сайта, и карточки не меняются при перезагрузке сайта
  });
  test("действие меняет состояние элемента", async ({ page }) => {
    await expect(page.locator('[aria-label="previous page"]')).toBeDisabled(); //aria-label занимают третье место по шкале приоритетов, атрибутов с долее высоким значением нету, поэтому принято решение взять aria-label
    await page.locator('[aria-label="next page"]').click();
    await expect(page.locator('[aria-label="previous page"]')).toBeEnabled();
  });
});
