self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("qr-app-v1").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "https://unpkg.com/qrcodejs@1.0.0/qrcode.min.js",
        "https://unpkg.com/qr-scanner@1.4.2/qr-scanner.umd.min.js"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});


