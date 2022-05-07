'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a2f7d9eed5bad21354560358fb53e324",
".git/config": "12e41fbd8af262bc92659639a48848b5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "7fc1cd38cd785bcd996a8b39a84d13b1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b8826a0c9b601e0b7bb3dcec5d53378b",
".git/logs/refs/heads/master": "b8826a0c9b601e0b7bb3dcec5d53378b",
".git/logs/refs/remotes/origin/master": "6b3ab2660e1be706a658145cdacbb09f",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/04/b1c98a9034f7e11a2b068bd55ce06b53222cf5": "3f1ba974d4a0be84d1f31afe65f5c6aa",
".git/objects/05/331900c9b1d247294e706c0104623c539ba7d6": "7e5fec153d3bf57279c7a0f12e2c49a6",
".git/objects/06/42dbb89fb0a3cc7cb2d6fbfba5fc9272414904": "6265018ac591bbce287df530045a3b05",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/1a/e21f813aa14fb8c6f8e93cc429b241420ea845": "d81ba3c10d5bde857da6847c12e129e8",
".git/objects/1b/88ced1a6c50ffb89ed2757a9d5d6a69d7dc8f1": "8c0a059c0fa5fefb24c22759042c871d",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/28/6f7937db089010c729726e630a48493362957c": "b2098f08068417375fb3f5f3e23dea7a",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/30/ab153e9432e9dba80ffedae91ce27d9418aeef": "fa6f154cd3fa2ea9b8c6203737e14bbb",
".git/objects/39/6310b01886b4be94d043f9632188540ae39995": "bbe8a66e282ab108f6533503d8d23e23",
".git/objects/3c/a17b0a9724baef2559b466f522c3a51958a726": "e628b1bdd1bbae1bda0b7bc870646602",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/135028cda1ef5ebb5b4e7953d78fa01590befd": "cca8290072954843325b4626b9c58eab",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/55/e02704e9738ae1b143081484480866a471fb97": "82ba7f2ddbb3cf440766c0eea6d354a1",
".git/objects/5c/a6bf4a7060540dfc3e62e209746a87b617c5a9": "3f4b879cf1b6db9bdad84bfeb03f0434",
".git/objects/5d/564b4a120aae58c2b4dd721c576e0bed0b9d97": "3f5a0a28d8cf2d1ab16b701440a3a09a",
".git/objects/68/c8c470c83a88050922db0fa118930da6d7cdcd": "ed1b1c3c150e506f3ca86118d98236a3",
".git/objects/69/106127cfd28eebfc969ebaefb72814602227b4": "ebc3f08f4fe9a6ca9468cdfcae2ebdff",
".git/objects/6b/bb3ce9ea4d1be604e97b7bd31d86d8cc9d1c95": "9d755f52e0e8c846b475767dc3c2554e",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/c82e9b9717df136618804f4a2bd2ed974e15b7": "06ad68eac7c2c37c7f827a9f19620a3f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/98/03bcabc41e52918b2090a661ae4a0a063f7dac": "651d9d193bebed095dbeade9202d6119",
".git/objects/9d/fef72addd145324d7be4f5ce277e8969fc2835": "aa710ec884541232155494a085b24444",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b2/8fe9145257aeeb56b8cf64d24161e27dc2c0d4": "e11ab7bb81111e6ac5bc362eace06d45",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cb/1d47ede92ac26a00fde2d03749d564ed69d35b": "1b0886248cfe37f901cc9823ee0a9e6e",
".git/objects/cb/e8107aec93eeb36256bb39f6126b859b978d5f": "cabfc593f4d9ee817bc931ecdd382935",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/2a38d46767f9ca4530c0473bf0d1e95172ce0f": "c3f541dc03c8edd90189db1e94507a1b",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/67c5f35279108c017f084bbb87d267ce59edc6": "8790a58fbb3a5c8273a21f28dbca8722",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/e34c36c7b620ceae533e310364a9c649418fcb": "924be4a3961a13461672ca190635aebb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f6/8f564b00ad8edb1e548bc2bc142794a73922bb": "23fb5e656cd6c83db2ae3125438a6336",
".git/objects/fb/3dde394475c564933100de3e2e21aeb1d11d06": "787ee6e1c41e9f1ce2878e1174936cd4",
".git/objects/fc/7f949c8d580418636a39c1dfab6bfc56744258": "32c4be2450d44500a099d4aeb24822a5",
".git/objects/fd/ad1303b5e8e1f45ad6419f81f18a2d4bfbcf1c": "a26383be68cdc13ee9083f74b9570434",
".git/refs/heads/master": "23385300528bfc5154cdf582a8d773e6",
".git/refs/remotes/origin/master": "23385300528bfc5154cdf582a8d773e6",
"assets/AssetManifest.json": "f6cf03ee06a92e64426f33a7425c91b0",
"assets/assets/background/astronomy.jpg": "f87ace6bab0884e6a51b46cc09e41503",
"assets/assets/background/milky_way.jpg": "2e391616b200a668dca170e5cb6950bf",
"assets/assets/background/space_1.jpg": "5427a10ed6857857f44eb9a97b5433d6",
"assets/assets/background/space_2.png": "f6a2c7cca3a208cab62bbd5cc9d4d084",
"assets/assets/logo/CosmoQuizz-logos.zip": "08e2a5221dbaefd5c243c328626aa48e",
"assets/assets/logo/CosmoQuizz_black.png": "19663dd3bad2b79b8e33b0b51bed8d2c",
"assets/assets/logo/CosmoQuizz_transparent.png": "269ba444a0c829dfcd952d41ca40234f",
"assets/assets/logo/CosmoQuizz_white.png": "9f99872e0a9f936beb65bd5acb07be20",
"assets/background/astronomy.jpg": "f87ace6bab0884e6a51b46cc09e41503",
"assets/background/milky_way.jpg": "2e391616b200a668dca170e5cb6950bf",
"assets/background/space_1.jpg": "5427a10ed6857857f44eb9a97b5433d6",
"assets/background/space_2.png": "f6a2c7cca3a208cab62bbd5cc9d4d084",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/logo/CosmoQuizz-logos.zip": "08e2a5221dbaefd5c243c328626aa48e",
"assets/logo/CosmoQuizz_black.png": "19663dd3bad2b79b8e33b0b51bed8d2c",
"assets/logo/CosmoQuizz_transparent.png": "269ba444a0c829dfcd952d41ca40234f",
"assets/logo/CosmoQuizz_white.png": "9f99872e0a9f936beb65bd5acb07be20",
"assets/NOTICES": "0cba1c9b43f081cfb1c5d2db8694c902",
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
"index.html": "21017aef8dd68f643a6529dbaa664be3",
"/": "21017aef8dd68f643a6529dbaa664be3",
"main.dart.js": "bce52621db1ed00f67680a9d8da341db",
"manifest.json": "c1a2fd9bacd0f06796876b2343314273",
"version.json": "299b139f1dedeb4d224783a8c7b5b9f8"
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
