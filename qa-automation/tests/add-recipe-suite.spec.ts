// import { test } from "../fixtures";
// import { expect } from "@playwright/test";
// import path from "path";
// import { RecipeCategory } from "../types/enums";
// import { RecipeFixture } from "../types/fixtures";
// import { uniqueRecipeTitle } from "./helpers/unique-data";
// const RECIPE_DETAILS_PATH_PREFIX = "/recipes/";
// const testRecipe: RecipeFixture = {
//   description: "A tasty recipe created by an automated test",
//   time: "30",
//   calories: "250",
//   category: RecipeCategory.Dessert,
//   ingredientName: "Squid",
//   ingredientAmount: "200g",
//   instructions: "Mix everything together and cook for 30 minutes",
// };
// test.describe("Добавление рецепта", () => {
//   test("успешное создание рецепта со всеми полями", async ({
//     addRecipePage,
//     authenticatedPage,
//   }, testInfo) => {
//     await addRecipePage.uploadPhoto(
//       path.join(__dirname, "..", "data", "test-photo.jpg"),
//     );
//     await addRecipePage.fillTitle(uniqueRecipeTitle(testInfo.workerIndex));
//     await addRecipePage.fillDescription(testRecipe.description);
//     await addRecipePage.fillTime(testRecipe.time);
//     await addRecipePage.fillCalories(testRecipe.calories);
//     await addRecipePage.selectCategory(testRecipe.category);
//     await addRecipePage.addIngredient(
//       testRecipe.ingredientName,
//       testRecipe.ingredientAmount,
//     );
//     await addRecipePage.fillInstructions(testRecipe.instructions);
//     await expect(addRecipePage.ingredientRows).toHaveCount(1);
//     await expect(addRecipePage.ingredientRows.first()).toContainText(
//       testRecipe.ingredientName,
//     );
//     await expect(addRecipePage.ingredientRows.first()).toContainText(
//       testRecipe.ingredientAmount,
//     );
//     await addRecipePage.submit();
//     await expect(addRecipePage.successToast).toBeVisible();
//     await expect(authenticatedPage).toHaveURL((url) =>
//       url.pathname.startsWith(RECIPE_DETAILS_PATH_PREFIX),
//     );
//   });
// });
