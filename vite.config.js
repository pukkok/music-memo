import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Service Worker 자동 업데이트
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'icons/*'], // 추가할 정적 파일
      manifest: {
        name: 'My Vite PWA App',
        short_name: 'VitePWA',
        description: 'A Vite-powered Progressive Web App',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  base: "/music-memo/"
})
