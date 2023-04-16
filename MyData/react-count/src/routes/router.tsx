import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App";
import { Redirect } from "../pages/Redirect";
import { Welcome1 } from "../pages/welcome/Welcome1";
import { Welcome2 } from "../pages/welcome/Welcome2";
import { Welcome3 } from "../pages/welcome/Welcome3";
import { Welcome4 } from "../pages/welcome/Welcome4";
import { LayOut } from "../layout/LayOut";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    errorElement: <Redirect />,
    children: [
      { index: true, element: <App /> },
      {
        path: "welcome",
        element: <Outlet />,
        children: [
          { index: true, element: <>空</> },
          { path: "1", element: <Welcome1 /> },
          { path: "2", element: <Welcome2 /> },
          { path: "3", element: <Welcome3 /> },
          { path: "4", element: <Welcome4 /> },
        ],
      },
    ],
  },
]);
