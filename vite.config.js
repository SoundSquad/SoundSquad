import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // Alias '@' points to the 'src' directory
    },
  },
  server: {
    port: 3000,
  },
});
