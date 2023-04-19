import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteMockServe } from "vite-plugin-mock";
import Unocss from "unocss/vite";
import { svgsprites } from "./vite_plugins/svgsprites";

// https://vitejs.dev/config/
export default defineConfig((env) => {
  const { command } = env;

  return {
    define: {
      isDev: command === "serve",
    },
    plugins: [
      viteMockServe(),
      Unocss({}),
      react(),
      svgsprites({ noOptimizeList: ["chart", "category", "export", "noty"] }),
    ],
  };
});
