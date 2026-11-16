export interface LoginResponseBody {
  data: {
    accessToken: string;
  };
}
export interface NewRecipePayload {
  title: string;
  description: string;
  category: string;
  area: string;
  time: string;
  calories: number;
  instructions: string;
  ingredients: { id: string; measure: string }[];
}
export interface CreatedRecipeData extends NewRecipePayload {
  id: string;
}
export interface CreateRecipeResponseBody {
  data: CreatedRecipeData;
}
export interface ErrorResponseBody {
  message: string;
}
export interface RecipeData {
  id: number;
  title: string;
  description: string;
  category: string;
  owner_id: number;
  area: string;
  time: string;
  calories: number;
  instructions: string;
  thumb: string | null;
  created_at: string;
  updated_at: string;
  ingredients: {
    id: string;
    name: string;
    desc: string | null;
    img: string | null;
    measure: string;
  }[];
}
export interface RecipesListData {
  data: RecipeData[];
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
export interface RecipesListResponseBody {
  status: number;
  message: string;
  data: RecipesListData;
}
