import { test, expect } from "@playwright/test";
import { RecipeData, RecipesListResponseBody } from "../types/api";

function buildMockRecipe(index: number): RecipeData {
  return {
    id: index,
    title: `мокованый рецепт ${index}`,
    description: "Сгенерировано для пагинации",
    category: "Dessert",
    owner_id: 1,
    area: "Ukraine",
    time: "30",
    calories: 200,
    instructions: "тестовые инструкции",
    thumb: null,
    created_at: "2017-01-01T00:00:00.000Z",
    updated_at: "2017-01-01T00:00:00.000Z",
    ingredients: [
      {
        id: "640c2dd963a319ea671e3665",
        name: "BakingPowder",
        desc: null,
        img: null,
        measure: "100 g",
      },
    ],
  };
}
const mockRecipes = Array.from({ length: 12 }, (_, i) =>
  buildMockRecipe(i + 1),
);
const mockResponse: RecipesListResponseBody = {
  status: 200,
  message: "Successfully found recipes!",
  data: {
    data: mockRecipes,
    page: 1,
    perPage: 12,
    totalItems: 13,
    totalPages: 2,
    hasNextPage: true,
    hasPreviousPage: false,
  },
};
test("пагинация показывает 2 страницы при тринадцати рецептах", async ({
  page,
}) => {
  await page.route("**/api/recipes?**", async (route) => {
    await route.fulfill({ json: mockResponse });
  });
  await page.goto("/");
  await expect(page.locator("article")).toHaveCount(12);
  await expect(
    page.locator('button[aria-label="previous page"]'),
  ).toBeVisible();
  await expect(page.locator('button[aria-label="next page"]')).toBeVisible();
  await expect(
    page.getByRole("button", { name: "1", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "2", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "3", exact: true }),
  ).not.toBeVisible();
});
