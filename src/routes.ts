import { createBrowserRouter } from "react-router";
import { RecipeList } from "./components/RecipeList";
import { RecipeDetail } from "./components/RecipeDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RecipeList,
  },
  {
    path: "/recipe/:id",
    Component: RecipeDetail,
  },
]);
