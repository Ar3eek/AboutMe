import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // ← to sprawia, że ścieżki do zasobów będą działać z dowolnego folderu
  plugins: [vue()],
})
