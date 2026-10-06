import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
    historyApiFallback: true,
  },
  preview: {
    port: 4173,
    historyApiFallback: true,
  },
});
