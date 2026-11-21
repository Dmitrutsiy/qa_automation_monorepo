import { RecipeCategory } from "./types/enums";
import { RecipeFixture } from "./types/fixtures";
export const testRecipe: RecipeFixture = {
  description: "A tasty recipe created by an automated test",
  time: "30",
  calories: "250",
  category: RecipeCategory.Dessert,
  ingredientName: "Squid",
  ingredientAmount: "200g",
  instructions: "Mix everything together and cook for 120 minutes",
};
