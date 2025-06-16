import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import copy from 'rollup-plugin-copy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    copy({
      targets: [
        { src: 'static/_redirects', dest: 'dist' }
      ],
      hook: 'writeBundle'
    })
  ],
  // other Vite settings
})
