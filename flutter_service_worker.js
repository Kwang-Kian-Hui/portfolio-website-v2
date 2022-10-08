'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5dd97e61f14df8dd3873322540e9318a",
"assets/assets/fonts/Courgette/Courgette-Regular.ttf": "cbd252f5c26cd61243888be1891f9921",
"assets/assets/fonts/Lobster/Lobster-Regular.ttf": "c3191f3b933ae0bd46335e178744326e",
"assets/assets/images/3DSinAnimation.png": "152997a779795a4b10ab4e01f1ef8be1",
"assets/assets/images/abundant_accounting_logo.png": "4c62254264041689ba4a935bdb2bad2e",
"assets/assets/images/add-edit-alarm-page.png": "382cb723581e42a397601a1e161d8b40",
"assets/assets/images/add-task.png": "856fe0f53fcbea37fcb438d3c96b35fc",
"assets/assets/images/angryBirdsGameClone.png": "138b4a98ddd9db689e1566ad4e7ba07f",
"assets/assets/images/asteroidGameClone.png": "9003d69f8736774c781e09dcdec583da",
"assets/assets/images/averageFace1.png": "4eb7f1be38fa9d4b1c1ad0b36caaedb9",
"assets/assets/images/averageFace2.png": "6ef8ebc7603342449c6dedd7bcd242d9",
"assets/assets/images/bar-chart.png": "e05297c55ba3acfcb1b7624427f8cec7",
"assets/assets/images/baseline.png": "e2f3e9e51bc7abb9071bc31a384317d1",
"assets/assets/images/best.png": "45e8a4c12eff9fec2145443a2e3295e0",
"assets/assets/images/calendar-page.png": "961877a0e397ff3ced601c3b98a84fa9",
"assets/assets/images/chat-list-page.png": "3843b6bad281f32e23d976d4078c7135",
"assets/assets/images/chat-page.png": "8674dea9803da467d8cbda8815c86f1c",
"assets/assets/images/classifier_evaluation.png": "424c1b897c341b903743e92515ea7d30",
"assets/assets/images/confusion_matrix.png": "3889de767c6b3305d11a1f7d6440093f",
"assets/assets/images/confusion_matrix_grouping.png": "b497c746a4e3d371c9638e937c7c183a",
"assets/assets/images/consumer-home-page-retailer-list.png": "20aa4b661662db8e08dc3d7b767ccfb3",
"assets/assets/images/consumer-retailer-details-page.png": "0f4482bb0ae8bdd5bf11f9ae86732919",
"assets/assets/images/consumer-retailer-product-list-page.png": "e9d84679a4ddcfc30f480de485ceeccb",
"assets/assets/images/converter_format.png": "58b49dd57aeb171025415f50b0e9acba",
"assets/assets/images/converter_img_1.png": "47ceef34cc896d1c4880b3bdcc712389",
"assets/assets/images/converter_img_2.png": "11ba07e65bc7e008e594b5bf56541129",
"assets/assets/images/correlation_plot.png": "0ed9357a0be739d816304017fb596dcb",
"assets/assets/images/dataset.png": "9919d9d8241f3f1a0b1a39b261dc5d20",
"assets/assets/images/deepspeech-1.png": "067804665c1c7cfdeed79c96f30e5f1c",
"assets/assets/images/deepspeech-2.png": "f3910d19cd5d48e3fdbfbebe92c775b6",
"assets/assets/images/deepspeech-3.png": "6a2021865c869b661751d9a45b049f47",
"assets/assets/images/deepspeech-4.png": "70ad2380a600f2614c19efc0198084c6",
"assets/assets/images/default-square.png": "fc1d55a12461cabec7f21294fb97d332",
"assets/assets/images/experiences.png": "4c0fb883dc4b94cbcc3b9c9e9060d46b",
"assets/assets/images/friend-detail-api.png": "0034be470ee457db25ef8beac45729a7",
"assets/assets/images/friend-list-page.png": "77bcc7b5897c14b3027df6ea387d9ae8",
"assets/assets/images/friend-profile-page.png": "d938bb5ac1eaa8edc47fd6464b859712",
"assets/assets/images/heatmap-chart.png": "bd62c99f324d0f668a05644221e822ab",
"assets/assets/images/home-page-2.png": "516fa18a146e872b9e06deec832e67b6",
"assets/assets/images/home-page-with-alarms.png": "3793863c9ba322d898e0fcc3975974f7",
"assets/assets/images/home-page.png": "b2a3e3ff38f4a9fa9fe29549afe5ef1e",
"assets/assets/images/home-section.png": "65ad951291949adf6fcef7d3c88d1f97",
"assets/assets/images/img_placeholder.png": "e1546ac207196f9cc8e7a1529ad214ca",
"assets/assets/images/initial-page-permission-request.png": "570f66eb1a002aa6e8bd5b0bc77d161f",
"assets/assets/images/instagramFilter1.png": "fae9c25cb8c641695584293b1934339b",
"assets/assets/images/instagramFilter2.png": "7ceffe91fe768aeaefa01d91edf2b3ce",
"assets/assets/images/login-page.png": "edf5043746b21b32b52048c73e031814",
"assets/assets/images/merkelrex-cover.png": "59b9cc8c1405e54ce7f436667018bd0e",
"assets/assets/images/merkelrex-img-1.png": "e5689477669fda30e0761207288a4f22",
"assets/assets/images/merkelrex-img-2.png": "fc01fde01e6fcc99cf1b4bff8bdd5eb9",
"assets/assets/images/merkelrex-img-3.png": "c313d8f43a1ee5425adbce4d9d559b97",
"assets/assets/images/my_photo.png": "4cbe63a528a441c325f6c7c4b274474f",
"assets/assets/images/noisyGrid.png": "8cd1ec71ca78b173ce0712ba8a58be6b",
"assets/assets/images/np_logo.png": "93b66fa2fe2990d63a171f74c0134806",
"assets/assets/images/otodecks-img-1.png": "437d0111e940df47af4ed557b3ad827d",
"assets/assets/images/otodecks-img-2.png": "381f72c038b0730b92b758e84cba3173",
"assets/assets/images/overfit.png": "37d944078d2f78a36fbea367ea6f080c",
"assets/assets/images/prototype-img-1.png": "77064fe4127be5f269c51c39126fbf2f",
"assets/assets/images/prototype-img-2.png": "f55b947da9e46cf155e7eb13e399ce78",
"assets/assets/images/red-circle.png": "53cd19a20e1e2718f6c67be8fa01aac5",
"assets/assets/images/registration-page.png": "ea5e06222be9d042f2ee705abd3cefc7",
"assets/assets/images/retailer-add-product-page.png": "f9677fe908021bf51a23c308e083399f",
"assets/assets/images/search-user-kwargs-b.png": "aa79be91ba0b946aa93f1fbb2a182251",
"assets/assets/images/self-profile-page.png": "deb759f9d14e230c0bc42e3c4f50bdd6",
"assets/assets/images/settings-page.png": "4fce0121918cea0bbb1f1f36ebefe54b",
"assets/assets/images/sign-in-page.png": "7693cd1ba497aebc14c8e04c49708912",
"assets/assets/images/signup-validation.png": "77728e08a17c7e1fc3f505cc0c8cc959",
"assets/assets/images/sim_logo.png": "007a865403f69a593dfeb8af72a40bc3",
"assets/assets/images/solarSystem.png": "3aebbda7d767818c65815b93c13a7e16",
"assets/assets/images/summary_results.png": "85261cac086f4cedaad6159b3a7a7f44",
"assets/assets/images/sun-burst-chart.png": "816734d435f3229010a541289e594191",
"assets/assets/images/synpulse8_logo.png": "5c74e28f942cc6a1738add59e4acb9c2",
"assets/assets/images/traffic_monitoring_system_img_1.png": "1f0e342e89cee63632507b8be0c4e6fc",
"assets/assets/images/traffic_monitoring_system_img_2.png": "a64f9015357cadb16c0e3d22bb840d01",
"assets/assets/images/web-scraping.png": "0d5d05863937340a32b2888cafe04c35",
"assets/assets/images/welcome-page.png": "a64905e5e02c7fbb51646d2d8b359a64",
"assets/assets/images/white-circle.png": "63b91994d8803d66eceb5058f598a349",
"assets/assets/images/working-hours.png": "88e24cda6f6bce11fb02c45f39ab13c1",
"assets/FontManifest.json": "c26f5ee1e95bf3a44ba9bad135da0ae7",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "0f63a1a9ec374e8d2c6c6d273ab2268a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a6bea3d9eb5b358d29aa3c0a08289c84",
"/": "a6bea3d9eb5b358d29aa3c0a08289c84",
"main.dart.js": "061d5821bf71c11d1a030e7c9a64bbda",
"manifest.json": "49a22f792e4d0d563ec5ca60b4a07449",
"version.json": "70c0b903d93d3c838f7fcb0a4b835193"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
