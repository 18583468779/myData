import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Redirect } from "./pages/Redirect";
import { Welcome1 } from "./pages/welcome/Welcome1";
import { Welcome2 } from "./pages/welcome/Welcome2";
import { Welcome3 } from "./pages/welcome/Welcome3";
import { Welcome4 } from "./pages/welcome/Welcome4";

export const router = createBrowserRouter([
  {
    path: "/",
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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
