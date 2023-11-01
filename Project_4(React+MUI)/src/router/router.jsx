import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { BasketPage } from "../pages/BasketPage";
import { FavouritePage } from "../pages/FavouritePage";
import {Layout} from "../pages/LayoutPage";

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