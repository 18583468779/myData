import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "virtual:uno.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

const div = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(div);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
