import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['dayjs', 'dayjs/locale/pt-BR'], // Adicione dayjs e a localidade ao external
    },
  },
})
