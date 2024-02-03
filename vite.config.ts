import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      plain: { additionalData: '@import "./src/css/style.css";' },
    },
  },
  build: {
    outDir: "docs",
  },
  base: "./",
});
