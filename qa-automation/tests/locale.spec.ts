import { test, expect } from "@playwright/test";
test.skip( ({ browserName }) =>
    browserName === "firefox" || browserName === "webkit"
);
test("язык браузера соответствует", async ({ page }) => {
  await page.goto("/");
  const language = await page.evaluate(() => navigator.language);
  const { locale } = test.info().project.use;
  expect(language).toBe(locale);
});
