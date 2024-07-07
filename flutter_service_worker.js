'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "18b17faff6f330ec50fbe75db933abdd",
"version.json": "4f192aac65674841d7c4c41e2151fa83",
"index.html": "7bdeab1da9866d6166b980197d7102de",
"/": "7bdeab1da9866d6166b980197d7102de",
"main.dart.js": "a3e873ff8fc90b76b84f47e38b01f1cd",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"logo.png": "ac10941157e65351d7d54915b1345b93",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9a97768f0d23de34a71937f73c8811c3",
".git/config": "92f59909c718af82880fc121f1945058",
".git/objects/92/88f99e513f90095e7becac82404799aaf3f782": "4fa1945d10bf042a6fa18d52a7656ce3",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/1ae1190e8349b037b0c837726a535f09f7f841": "0374f8e1c8cf322754f1f00cdf89b43f",
".git/objects/9b/27671ec377683e32aba30f94074e8d893aa47f": "ecb71a3b837d12a3c0451d27c62141cc",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/3c/a0ec1e8d5beac8a68cceffbbfde9b0b3cb1fc6": "849bd209ca484d9ea9a0bf76c7f04cce",
".git/objects/56/9687f4b7729ba50b20fd8eaae92ec6189b471d": "1bda6eb2f7507d913cc7572adafecdb1",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/0b/fc8b4f6d7a1d79f90840247befd18ace149810": "aee9c7dac3f54170ae715baee26b1bdc",
".git/objects/93/3881446f4c5cfaf4a0813b8aa5b77adca1dbbe": "ca15037ef9473d3cb434c6ea7fec38ae",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/3a33432dbabf7dbd99492d93a54764d28b4087": "c2dc4164de3a83029a4d0bc38dcb1b9d",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/5543b9cf097ed2ba81b21100b5405cc34d7093": "fb58875a72a00dc866d6479a05585fdf",
".git/objects/d8/601987628e5c29db6bf75262c9c47f022a1ad4": "0ab70ddc64c5e3a8a6c55c327de3f6a8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/c8/95a78a0893aa3775494c738ea73e4e32d14ee9": "edeacfe64af2120aa14c2de7ea55994f",
".git/objects/c8/9d8ff2d4790a459bde286c1a24d139328a4962": "84d5dd62dcf1035af323bed7971987d0",
".git/objects/c6/082be45107ea63904914c24f63eeda25b6de10": "58f8a884d28888a70655ca519e1143bc",
".git/objects/4e/a7fe6335699659e6eea8b87de2e7af9113211e": "5bb055d909e55b47ddf3133baaefad6d",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/11/9d1770f6b690e4d6b129ed2aa036afd40934a3": "ff5a3eafb26086569e1a80c37d612cd6",
".git/objects/42/61ab570570d763342d2b7c6dce961ce1f3eb2b": "9916991a3545f7f69418d97a9b85ff7f",
".git/objects/89/a4708c94c73df91224cfa64d3613a7ab9f8bbf": "113f95b433825cfa84d6ac140f903517",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/17/ed9e7aa60667429f7b4db116af8a59a298d9f2": "f96aad9efca27c5eed5c42a5621f9abc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/4528ffca8bd414b4e496ffc109f84d62aab9de": "ce878f55283f49c04b0cb58c4b50416e",
".git/objects/4d/0129e55d91ca0125245711745176074bb0080d": "7136e361258e22e23521c95108076a0a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/2c65451ba8c3b1b3f659085897a9a58278ce00": "3279df9ec2f71a5d01cd349d9b78d768",
".git/objects/5c/21ee1beb7da66b671f12bc68c50552e0083094": "f38370eb579781bbf397583f70d42f13",
".git/objects/09/abe0f4cced546c768770cd2449fbbb60bf798d": "14badfcb99f9234bf1e7497af57c02e9",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/31/7eea7426a75981315dfb52804e4068bf776728": "b5f9047943ac07745501cbbbc8788635",
".git/objects/3a/fe0f0850e59adadd6d64a7406d1d936f28bf5e": "b40fb8f5b69e86a8ac0cd4feeb4a411c",
".git/objects/99/27197acf0a20e4374b51fbaeee1408e0e31c4c": "6d4b311b0b5cef6573f18b2a6520fc22",
".git/objects/99/3856d35a21f5381d23851c68703e577fb47004": "e2fc7e8c664a68171b348c1cf086e85f",
".git/objects/55/2d560e4a82ccf34ac783da35239b9b2b2de7cf": "2533ab12fc244c95d159a02f32099b44",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/be744cc86db613aae83ee8c581242f86f4507d": "1d12046265a2d84dc41d93bfd75ce0af",
".git/objects/d4/bec41ef1863b4b2555dd56c38f7bc5f51e721c": "81e11b8f96631a64896a05b5f81adc40",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/42c84b0b03532f3667fccce534456906998bc0": "84995ba85238d4898ab636363fdafda9",
".git/objects/cc/f87d5ea7ca432504cfd1e7e27c575fd0349ce0": "d22598f8a64f434183b7dad0c73fcd88",
".git/objects/f9/9df6da38840636f03256057e351b372d23526b": "f3458c920e643903c81976e0f5212bbe",
".git/objects/f0/65ff8766eb49e427ad26ee3a63d1d86a09fa62": "705938b0989bccef084c34127d46f5ca",
".git/objects/e8/9ddfd7bc9c753cff59e55e42026e48691d7866": "d2cb596e70bb63fa6edef38e88661ee1",
".git/objects/fa/2f9f70dc468bbbdce7f8a274322bfd72148922": "2329a94bcc54861bb7580a25cc6a030f",
".git/objects/c5/84597fc5989afa5bbb2b37939b77dd87f454d4": "c5b49afa4df072f0c42bb3e0ede51676",
".git/objects/c2/db6bd4f799923597f47b72061fa86fca914828": "f0c76ecf019ee61a2cfcc2ef41415013",
".git/objects/f6/4e5084dd225d097b0119a2da4f89d2922fe577": "fe4fb24030f2615c53346a7e63b3da86",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/0de3d11acf1c717138f80ccf66b09e7c147ce0": "455b03c87b1aa06cd0b1d1401828be8b",
".git/objects/1b/f86459de38fce9c17a22fe11a0582e00d03b99": "cccbc309cb4bd936caa47c1671a914d4",
".git/objects/84/662cfda35fef32db115963662c815eb2813b8d": "1bfa747cda935e2bb2b98fc4e31584cb",
".git/objects/4a/1ef2a72dffaf7c7c5b4ee602fde3f38cdd7512": "c0740a4b0f53a974082144f1b6bc8a78",
".git/objects/23/ad929f3fbe2028d6e43ad42bbbb89912335848": "bdcdabfa9a95ba180c34d27123650cb1",
".git/objects/15/b2ea0d65a6dbe14fe40e075a2ff79e7a10020a": "a9ab57e2129b9b925cc5c204eab3c491",
".git/objects/8c/7fe12c88d21c6843de6c58fdce0a342875ef87": "d502dcce77d2eacb130a28740dadbc54",
".git/objects/8c/75fa220a7019f4ba9ad63392e21e137eefb667": "63d5a8b6e93aeccc434afce5674d3a0c",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/989eca3f7b83d379607d90e7e390c37b32061f": "4b31ca1ce4162d50948b28ce6afeebd1",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/78/497668f2627e6d848e2d97e20bde197fa4f5fb": "124210db6f649f482427b364e5e5cad3",
".git/objects/8e/d45e0d0273a62ff566d439a393a572544286ee": "3c878382a4ed284ad0a11bcd76492b6c",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "34975620e153e12b15bf4e3b757771bf",
".git/logs/refs/heads/master": "a836a5511078ded00811cdd985e388b8",
".git/logs/refs/remotes/origin/master": "463eb68242bb71790848a6a75e5c5bd6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "f9494da7f69adb4c1b7e251edcf05cba",
".git/refs/remotes/origin/master": "f9494da7f69adb4c1b7e251edcf05cba",
".git/index": "3a820faed547c816885a5407512c1d11",
".git/COMMIT_EDITMSG": "1d9b22b5ebe27797f1ded454c6198880",
"assets/AssetManifest.json": "5fdebd0160dfd744c2d52d03aaf3558b",
"assets/NOTICES": "dd986acc510e0e8684f8f512aac58d89",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "597b03738cdfea4949100499f067dbc4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "da63eff04b67637ad23c0adde2c5bad4",
"assets/fonts/MaterialIcons-Regular.otf": "a9598549df7838ac866ab97efdb1ab55",
"assets/assets/images/amp2.png": "0b7afc9aa1b2792a7de452a8d9b7f2bf",
"assets/assets/images/preawpan.jpg": "83d59790cfadabdbde8c3c83a1c6c4b7",
"assets/assets/images/solar2.png": "a9e75cb2d35aebacee9b381973e10901",
"assets/assets/images/amp3.png": "34b682e774c8021d78753785e82baa00",
"assets/assets/images/amp1.png": "0eb9858afe237f1a6e4e0c010df1cb85",
"assets/assets/images/pcb_cer.jpg": "febefaf8da92e89ed7f59b0770843b84",
"assets/assets/images/pcb.jpeg": "d16710900b787e45d4dc2648b3e8f345",
"assets/assets/images/flutter.png": "187c512ad39f07f8e94ded9a09a2290f",
"assets/assets/images/hsk1.jpeg": "77d714cea7b961593b2ed3257651e5fb",
"assets/assets/images/pm1.jpeg": "b49fc98cab0af94497ce2d251d6cd925",
"assets/assets/images/hsk2.jpg": "6a0f0ee54ebff58fb97274bc88de63b0",
"assets/assets/images/github.png": "f10820106c3a58b5c48210745a138808",
"assets/assets/images/tni.png": "d43dea96818a55cc071deda78ae5e66e",
"assets/assets/images/sjb.png": "bdbcc5d4e012abc359b5e369134b0dbf",
"assets/assets/images/catc.png": "598cf2fa62bedba39290c75449fbda09",
"assets/assets/images/pcb2.jpg": "1920504c2d60d25c9edcbf7dd8ef02d9",
"assets/assets/images/solar.JPG": "0b0de3324788e932d5f8ec8fdde609be",
"assets/assets/images/pm3.jpeg": "a89ab4964fa818fb4309f2be5c492f9b",
"assets/assets/images/logo.png": "ac10941157e65351d7d54915b1345b93",
"assets/assets/images/pm2.jpeg": "df1a9c97a64f00fcce676f59444f65ab",
"assets/assets/images/mu_space.png": "e31ed7092d9a65c8a20b30066f586adf",
"assets/assets/images/os.jpg": "df9ed62e676ef93481eda37a3b201f13",
"assets/assets/images/freewill_fx.png": "bb4f791722308c7576fe3c3ac4e38355",
"assets/assets/images/blockchain.png": "ece9756c984d691ccc8c31947fe46199",
"assets/assets/images/freewill_solutions.png": "f23c65406e051012f016736cefb1496f",
"assets/assets/images/ux.png": "64a0b439661f661357521fa1d5191971",
"assets/assets/images/linked_in.png": "b361a3bc8976d3117bdda6daf0ec2135",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
