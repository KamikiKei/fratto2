import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 💡 Cloudflare環境やどこでも動くように相対パスにする設定
  base: './', 
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});