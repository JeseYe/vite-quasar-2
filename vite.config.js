import { defineConfig } from 'vite'
import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import ViteComponents from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages(),
    Layouts(),
    ViteIcons(),
    ViteComponents({
      customComponentResolvers: [
        ViteIconsResolver({
          componentPrefix: 'icon',
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      src: resolve(__dirname, './src'),
      '@': resolve(__dirname, './src'),
      '@assets': resolve(__dirname, './src/assets'),
      '@components': resolve(__dirname, './src/components'),
      '@pages': resolve(__dirname, './src/pages'),
      '@store': resolve(__dirname, './src/store'),
      '@utils': resolve(__dirname, './src/utils'),
    },
  },
  server: {
    https: false,
    port: 3000,
    compress: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8090',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    brotliSize: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/node_modules/')) {
            const modules = ['quasar']
            const chunk = modules.find((module) => id.includes(`/node_modules/${module}`))
            return chunk ? `vendor-${chunk}` : 'vendor'
          }
        },
      },
    },
  },
})
