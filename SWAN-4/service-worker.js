const SWAN_CACHE = "swan-v1";

const SWAN_APP_FILES = [
    "./",
    "./index.html",
    "./css/global.css",
    "./js/app.js",
    "./manifest.json",
    "./assets/icons/icon-192.png",
    "./assets/icons/icon-512.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches
            .open(SWAN_CACHE)
            .then(cache =>
                cache.addAll(SWAN_APP_FILES)
            )
    );

    self.skipWaiting();
});


self.addEventListener("activate", event => {
    event.waitUntil(
        caches
            .keys()
            .then(keys =>
                Promise.all(
                    keys
                        .filter(
                            key =>
                                key !== SWAN_CACHE
                        )
                        .map(
                            key =>
                                caches.delete(key)
                        )
                )
            )
    );

    self.clients.claim();
});


self.addEventListener("fetch", event => {
    if (event.request.method !== "GET") {
        return;
    }

    event.respondWith(
        fetch(event.request)
            .then(response => {
                const copy =
                    response.clone();

                caches
                    .open(SWAN_CACHE)
                    .then(cache =>
                        cache.put(
                            event.request,
                            copy
                        )
                    );

                return response;
            })
            .catch(() =>
                caches.match(event.request)
            )
    );
});
