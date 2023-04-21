import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { NotFound } from "../pages/NotFound";
import { LayOut } from "../layout/LayOut";
import { WelcomeRoutes } from "./WelcomeRoutes";
import { Home } from "../pages/Home";
import { ItemPage } from "../pages/ItemPage";
import { SignInPage } from "../pages/SignInPage";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <LayOut />,
    errorElement: <NotFound />,
    children: [WelcomeRoutes],
  },
  {
    path: "/item",
    element: <ItemPage />,
  },
  {
    path: "/sign_in",
    element: <SignInPage />,
  },
]);
