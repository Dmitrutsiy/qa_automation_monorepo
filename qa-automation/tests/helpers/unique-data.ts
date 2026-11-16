export function uniqueRecipeTitle(workerIndex: number): string {
  return `Тестовый рецепт ${workerIndex}-${Date.now()}`;
}
