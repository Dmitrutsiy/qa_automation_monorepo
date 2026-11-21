export const TEST_RECIPE_TITLE_PREFIX = "Тестовый рецепт";
export function uniqueRecipeTitle(workerIndex: number): string {
  return `${TEST_RECIPE_TITLE_PREFIX} ${workerIndex}-${Date.now()}`;
}
