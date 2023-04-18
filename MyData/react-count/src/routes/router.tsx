import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { NotFound } from "../pages/NotFound";
import { LayOut } from "../layout/LayOut";
import { WelcomeRoutes } from "./WelcomeRoutes";
import { Home } from "../pages/Home";

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
]);
