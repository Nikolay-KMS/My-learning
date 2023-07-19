import { createBrowserRouter } from "react-router-dom";
import { App } from "./pages/App";
import { BasketPage } from "./pages/BasketPage";
import { FavouritePage } from "./pages/FavouritePage";
import {Layout} from "./pages/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Sorry, this page doesn't exist</div>,
    children: [
      {
        index: true,
        element: <App />,
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