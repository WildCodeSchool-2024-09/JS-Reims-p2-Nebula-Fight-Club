import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target:
          "https://superheroapi.com/api.php/9ee4fc0de4aeb36ca09d53d4b60c046d",
        changeOrigin: true,
      },
    },
  },
});