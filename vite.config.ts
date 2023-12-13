import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'

// https://vitejs.dev/config/
// TODO autimatic import sass util variables and mixins
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    },
  },
  plugins: [react()],
})
