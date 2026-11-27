// import { test } from "../fixtures";
// import { expect } from "@playwright/test";
// import mysql from "mysql2/promise";
// import path from "path";
// import { createDbConnection } from "../db/db-client";
// import { uniqueRecipeTitle } from "./helpers/unique-data";
// import { RecipeCategory } from "../types/enums";
// import { testRecipe } from "../Test_recipe_const";
// interface RecipeRow extends mysql.RowDataPacket {
//   title: string;
//   category: string;
// }
// let connection: mysql.Connection;
// test.beforeAll(async () => {
//   connection = await createDbConnection();
// });
// test.afterAll(async () => {
//   await connection.end();
// });
// test("рецепт создан через интерфейс и сохраняется в базе с правильной категорией", async ({
//   addRecipePage,
// }, testInfo) => {
//   const recipeTitle = uniqueRecipeTitle(testInfo.workerIndex);
//   await addRecipePage.uploadPhoto(
//     path.join(__dirname, "..", "data", "test-photo.jpg"),
//   );
//   await addRecipePage.fillTitle(recipeTitle);
//   await addRecipePage.fillDescription(testRecipe.description);
//   await addRecipePage.fillTime(testRecipe.time);
//   await addRecipePage.fillCalories(testRecipe.calories);
//   await addRecipePage.selectCategory(testRecipe.category);
//   await addRecipePage.addIngredient(
//     testRecipe.ingredientName,
//     testRecipe.ingredientAmount,
//   );
//   await addRecipePage.fillInstructions(testRecipe.instructions);
//   await addRecipePage.submit();
//   await expect(addRecipePage.successToast).toBeVisible();
//   const [rows] = await connection.execute<RecipeRow[]>(
//     "select title, category from recipes where title = ?",
//     [recipeTitle],
//   );
//   expect(rows.length).toBe(1);
//   expect(rows[0].category).toBe(RecipeCategory.Dessert);
// });
