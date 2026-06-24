import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cloudflare()],
  // 💡 ここを追加！ビルド後のアセット（JS/CSS）を相対パスで読み込むようにします
  base: './', 
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})