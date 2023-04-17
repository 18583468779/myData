import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { NotFound } from "../pages/NotFound";
import { LayOut } from "../layout/LayOut";
import { WelcomeRoutes } from "./WelcomeRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    errorElement: <NotFound />,
    children: [{ index: true, element: <App /> }, WelcomeRoutes],
  },
]);
