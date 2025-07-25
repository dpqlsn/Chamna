import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@_styles": path.resolve(__dirname, "src/App.css"),
      "@_assets": path.resolve(__dirname, "src/assets"),
      "@_Modal": path.resolve(__dirname, "src/Modal"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true
  }
});