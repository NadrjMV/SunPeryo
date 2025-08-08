const CACHE_NAME = 'sunperyo-cache-v1';
// Lista de ficheiros essenciais para o funcionamento offline.
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/admin.html',
  '/guard.html',
  '[https://i.postimg.cc/HngV6ftW/SUN-PLAN.png](https://i.postimg.cc/HngV6ftW/SUN-PLAN.png)'
  // Adicione aqui outros recursos locais importantes, como ficheiros CSS ou JS, se tiver.
];

// Evento de instalação: abre o cache e adiciona os ficheiros da lista.
self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pré-cache de ficheiros da aplicação');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Evento de ativação: limpa caches antigos.
self.addEventListener('activate', (evt) => {
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('[ServiceWorker] Removendo cache antigo', key);
          return caches.delete(key);
        }
      }));
    })
  );
  self.clients.claim();
});

// Evento de fetch: intercepta os pedidos de rede.
// Se o recurso estiver no cache, ele o entrega a partir daí.
// Se não, ele tenta buscar na rede.
self.addEventListener('fetch', (evt) => {
  // Não intercepta pedidos para o Firebase, para não atrapalhar a sincronização.
  if (evt.request.url.includes('firebase')) {
    return;
  }

  evt.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(evt.request)
        .then((response) => {
          return response || fetch(evt.request);
        });
    })
  );
});