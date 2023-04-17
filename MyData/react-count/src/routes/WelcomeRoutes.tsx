import { Welcome1 } from "../pages/welcome/Welcome1";
import { Welcome2 } from "../pages/welcome/Welcome2";
import { Welcome3 } from "../pages/welcome/Welcome3";
import { Welcome4 } from "../pages/welcome/Welcome4";
import { WelcomeLayout } from "../layout/WelcomeLayout";
import { RouteObject } from "react-router-dom";

export const WelcomeRoutes: RouteObject = {
  path: "welcome",
  element: <WelcomeLayout />,
  errorElement: <div>加载失败</div>,
  children: [
    { index: true, element: <>空</> },
    { path: "1", element: <Welcome1 /> },
    { path: "2", element: <Welcome2 /> },
    { path: "3", element: <Welcome3 /> },
    { path: "4", element: <Welcome4 /> },
  ],
};
