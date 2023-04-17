import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Redirect } from "../pages/Redirect";
import { LayOut } from "../layout/LayOut";
import { WelcomeRoutes } from "./WelcomeRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    errorElement: <Redirect />,
    children: [{ index: true, element: <App /> }, WelcomeRoutes],
  },
]);
