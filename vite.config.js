import { defineConfig } from 'vite'
import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      src: resolve(__dirname, './src'),
      '@': resolve(__dirname, './src'),
      '@assets': resolve(__dirname, './src/assets'),
      '@components': resolve(__dirname, './src/components'),
      '@pages': resolve(__dirname, './src/pages'),
      '@store': resolve(__dirname, './src/store'),
      '@utils': resolve(__dirname, './src/utils')
    }
  },
  build: {
    rollupOptions: {
      output: {
        //- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/guide/en/#outputmanualchunks
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('/quasar/')) {
              return 'quasar'
            }
            return 'vender'
          }
        }
      }
    }
  }
})
