import { test, expect } from "@playwright/test";
import { API_baseURL } from "../data/API_baseURL";
import { DEFAULT_USER, WRONG_PASSWORD } from "../data/test-user";
import { LoginResponseBody, ErrorResponseBody } from "../types/api";
import { NewRecipePayload, CreateRecipeResponseBody } from "../types/api";
test.use({ baseURL: API_baseURL });
let accessToken: string;
let newRecipe: NewRecipePayload;

test.beforeAll(async ({ request }) => {
  const response = await request.post("auth/login", {
    data: DEFAULT_USER,
  });
  expect(response.ok()).toBeTruthy();
  const loginBody: LoginResponseBody = await response.json();
  accessToken = loginBody.data.accessToken;
  const ingredientResponse = await request.get("ingredients");
  expect(ingredientResponse.ok()).toBeTruthy();
  const ingredientsData = await ingredientResponse.json();
  const ingredientId = ingredientsData.data[0].id;
  newRecipe = {
    title: `Борщ${Date.now()}`,
    description: "Класический суп на основе свеклы, овощей и мяса",
    category: "Dinner",
    area: "Ukraine",
    time: "60 minutes",
    calories: 320,
    instructions:
      "1. Нарезать овощи. 2. Обжарить свеклу и морковь(по желанию). 3. Варить в бульоне от 60 до 120 минут",
    ingredients: [{ id: ingredientId, measure: "300 g" }],
  };
});
test("GET / recipes return list of recipes", async ({ request }) => {
  const response = await request.get("recipes");
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(Array.isArray(body.data.data)).toBeTruthy();
  expect(body.data.data.length).toBeGreaterThan(0);
});
test("POST /auth/login with wrong pass fails", async ({ request }) => {
  const response = await request.post("auth/login", {
    data: {
      ...DEFAULT_USER,
      password: WRONG_PASSWORD.wrongPassword,
    },
  });
  expect(response.status()).toBe(401);
  const body: ErrorResponseBody = await response.json();
  expect(body.message).toBeDefined();
});
test("POST /recipes creates a recipe and it is retrievable", async ({
  request,
}) => {
  const createResponse = await request.post("recipes", {
    data: newRecipe,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  expect(createResponse.status()).toBe(201);
  const createBody: CreateRecipeResponseBody = await createResponse.json();
  expect(createBody.data).toMatchObject({
    title: newRecipe.title,
    description: newRecipe.description,
    category: newRecipe.category,
  });
  const getResponse = await request.get(`recipes/${createBody.data.id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  expect(getResponse.status()).toBe(200);
});
test("POST /recipes without token fails", async ({ request }) => {
  const response = await request.post("recipes", {
    data: newRecipe,
  });
  expect(response.status()).toBe(401);
});
