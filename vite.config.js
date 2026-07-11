import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [react(), cloudflare()],
  // 💡 Cloudflare環境やどこでも動くように相対パスにする設定
  base: './', 
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});