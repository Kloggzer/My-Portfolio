const { defineConfig } = require('vite')

module.exports = defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './src/index.html',
        de: './src/de/index.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  publicDir: '../public'
})