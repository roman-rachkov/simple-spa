import { defineConfig } from 'vite'

const path = require('path')
export default defineConfig({
  base: './',
  build: {
    outDir: 'docs'
  },
  publicDir: '/src/public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    devSourcemap: true
  }
})
