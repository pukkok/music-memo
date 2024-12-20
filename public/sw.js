const CACHE_NAME = 'vite-app-cache-v1'

// 설치 단계: 기본 캐싱 처리
self.addEventListener('install', event => {
  console.log('[Service Worker] Install')
  self.skipWaiting()
})

// 메시지 수신 및 동적 캐싱 처리
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'CACHE_ASSETS') {
    const assetsToCache = event.data.assets

    // 캐싱할 파일 추가
    caches.open(CACHE_NAME).then(cache => {
      console.log('[Service Worker] Caching assets:', assetsToCache)
      cache.addAll(assetsToCache)
    })
  }
})

// 요청 가로채기: 캐시된 파일 제공
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request)
    })
  )
})

// 활성화 단계: 이전 캐시 정리
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})
