import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Vite의 import.meta.glob()로 정적 파일 경로 가져오기
const cacheableAssets = Object.keys(import.meta.glob('/**/*', { eager: true }));

// React 앱 렌더링
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Service Worker 등록 및 캐싱할 파일 전달
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(registration => {
      console.log('Service Worker registered:', registration);

      // 캐싱 가능한 파일 경로를 Service Worker로 전달
      registration.active?.postMessage({
        type: 'CACHE_ASSETS',
        assets: cacheableAssets,
      });
    })
    .catch(error => {
      console.error('Service Worker registration failed:', error);
    });
}
