import { test, expect } from "@playwright/test";

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
