import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      pages: "/src/pages",
      assets: "/src/assets",
    },
  },
  base: "/agua_vivo_app/",
});
