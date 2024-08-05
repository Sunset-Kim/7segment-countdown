/// <reference types="vitest" />

import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["lib/**/!(*.spec|*.test).{ts,tsx}"],
      rollupTypes: true,
      tsconfigPath: resolve(__dirname, "tsconfig.build.json"),
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./vitest.setup.js",
  },
});
