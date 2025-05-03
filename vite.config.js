import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, 
        pure_funcs: ['console.log'], 
      },
    },
  },
  plugins: [react()],
  base: '/',
  assetsInclude: ['**/*.docx','**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'],
})
