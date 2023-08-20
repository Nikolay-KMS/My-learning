import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/mainPage/MainPage";
import { BasketPage } from "./pages/basketPage/BasketPage";
import { FavouritePage } from "./pages/favouritePage/FavouritePage";
import {Layout} from "./pages/layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Sorry, this page doesn't exist</div>,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/basket",
        element: <BasketPage />,
      },
      {
        path: "favourite",
        element: <FavouritePage />,
      },
    ]
  },
]);