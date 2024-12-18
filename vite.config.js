import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/music-memo/" // ? 깃허브 페이지 연결을 위한 베이스 url
})
