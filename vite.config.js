const { defineConfig } = require('vite')

module.exports = defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './src/index.html',
        de: './src/de/index.html',
        privacy: './src/privacy.html',
        datenschutz: './src/datenschutz.html',
        impressum: './src/impressum.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  publicDir: '../public'
})