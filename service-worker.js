/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2015/07/25/funny-cookie/index.html",
    "revision": "62c0ab4769256998db0935a6c3f070d9"
  },
  {
    "url": "2015/08/18/ajax/index.html",
    "revision": "9556881fb33b1f7fc7c21a894ce93ecc"
  },
  {
    "url": "2015/09/23/repaiting/index.html",
    "revision": "b1546b3259518e765a078f02df49506f"
  },
  {
    "url": "2015/09/30/javascript实践/index.html",
    "revision": "b42281d2257ea9afab817fabe2bdbb7c"
  },
  {
    "url": "2015/10/28/log1/index.html",
    "revision": "868370ee486e684f0b2fb7e2a1ea48bb"
  },
  {
    "url": "2015/11/06/log2/index.html",
    "revision": "1abbe427ce6390599f3555eebd2c5f61"
  },
  {
    "url": "2015/11/09/less-is-more/index.html",
    "revision": "766bec7589936b1a4650e91058dc9139"
  },
  {
    "url": "2015/11/20/array-methods/index.html",
    "revision": "4ae77f3c7c2c9017be74683b803d6907"
  },
  {
    "url": "2015/11/20/css-center/index.html",
    "revision": "be1f82dbc5e073cb92feb7150ea99018"
  },
  {
    "url": "2015/11/20/not-only-if-else/index.html",
    "revision": "6e1215ed6c7972eeaf01f87d706b8761"
  },
  {
    "url": "2015/11/25/jqueryperformanceoptimization/index.html",
    "revision": "c347b9f47c06621c194a03b66f10f8e1"
  },
  {
    "url": "2015/12/01/nodejsstudy1/index.html",
    "revision": "cf30200850b9655ac9831ebf00834a78"
  },
  {
    "url": "2015/12/02/nodejsstudy2/index.html",
    "revision": "5cf3101d504f8f5b33e2d647fb9d4ee8"
  },
  {
    "url": "2015/12/03/nodejsstudy3/index.html",
    "revision": "77703d2b9ceb45833ae9d81f8e717284"
  },
  {
    "url": "2015/12/11/nodejsstudy4/index.html",
    "revision": "46bd4683d54ed8226102ec5f42dbe775"
  },
  {
    "url": "2016/01/04/nodejsstudy5/index.html",
    "revision": "4583c378d46e414cf86157b3bef68363"
  },
  {
    "url": "2016/01/04/nodejsstudy6/index.html",
    "revision": "27509a2921b84566255230ad31d8dc1f"
  },
  {
    "url": "2016/01/06/nodejsstudy10/index.html",
    "revision": "a8fcb27bfa769767dd15fd64db98bb90"
  },
  {
    "url": "2016/01/06/nodejsstudy7/index.html",
    "revision": "9de29121e2fda628df163a5121dfc98a"
  },
  {
    "url": "2016/01/06/nodejsstudy8/index.html",
    "revision": "99e28663ba73b0931c89a3578796568d"
  },
  {
    "url": "2016/01/06/nodejsstudy9/index.html",
    "revision": "37fec253224d51d5d76f146d9de03a84"
  },
  {
    "url": "2016/01/07/nodejsstudy11/index.html",
    "revision": "061ff2a20d71a915e3f4c0bbb67b8416"
  },
  {
    "url": "2016/01/21/frontend-knowledge/index.html",
    "revision": "8bc794d2159f61f29f42e9790f4a4513"
  },
  {
    "url": "2016/01/27/chineseinputmethods/index.html",
    "revision": "c6ac6de97641dbd2874bc79000fe4d10"
  },
  {
    "url": "2016/02/17/flag-2016/index.html",
    "revision": "1f66196f3916b2cc7136e41f4f6c72a9"
  },
  {
    "url": "2016/02/24/fidder/index.html",
    "revision": "578eee6305ffd501f63b77f546aa0569"
  },
  {
    "url": "2016/03/25/introduction-jquery-deferred-objects/index.html",
    "revision": "40c3824b0e2ea8d9509f8f932d955e2d"
  },
  {
    "url": "2016/07/25/pm2-node-service/index.html",
    "revision": "48b1657cf2041bcb2a19f47f87d170f4"
  },
  {
    "url": "2017/01/05/my2016and2017/index.html",
    "revision": "6e051150ce1e60563268a8cc794c6b2f"
  },
  {
    "url": "2017/01/06/mocha/index.html",
    "revision": "77ddf1e654529283bc35e10a2e91815b"
  },
  {
    "url": "2017/03/27/reading-notes-of-ecmascript6/index.html",
    "revision": "cf4e9eb5651e574d3cbafa0f6d11b480"
  },
  {
    "url": "2017/04/27/debounce-and-throttle/index.html",
    "revision": "7a4d1accfb68077627d79a8b38270c90"
  },
  {
    "url": "2017/06/27/wxpachong/index.html",
    "revision": "cf3dd99729bfbd71820f56d9fa169329"
  },
  {
    "url": "2017/08/27/postmessage-api/index.html",
    "revision": "ae505dd6bb1295a7735de3c4df163cd6"
  },
  {
    "url": "2017/09/05/webpack/index.html",
    "revision": "867c0574899b496221a275cac2c430c6"
  },
  {
    "url": "2017/10/17/businesscode/index.html",
    "revision": "13325600c72c28f5bc6a53e564690400"
  },
  {
    "url": "2018/02/28/typescript1/index.html",
    "revision": "495be26ac9454bbca8c181a9e7ca577d"
  },
  {
    "url": "2018/02/28/typescript2/index.html",
    "revision": "d009777c6639744592144efa00d6698c"
  },
  {
    "url": "2018/02/28/typescript3/index.html",
    "revision": "3d2bdf53816388f33970b2aeff006f23"
  },
  {
    "url": "2018/03/08/vue-source-code-study-1/index.html",
    "revision": "2c7416a4119b6e92287f11d94260fa35"
  },
  {
    "url": "2018/03/09/vue-source-code-study-2/index.html",
    "revision": "2ab7f2b7996dbe621c939196e75fc653"
  },
  {
    "url": "2018/03/19/vue-source-code-study-3/index.html",
    "revision": "b1b726099ab1dd8a8c12efd21fe71704"
  },
  {
    "url": "2018/03/21/blog-transfer/index.html",
    "revision": "d6d4f8d260340ab030978a5c4c1f789e"
  },
  {
    "url": "2018/03/21/vue-source-code-study-4/index.html",
    "revision": "09ae6463889e816fb866f5df169c8e01"
  },
  {
    "url": "2018/05/07/ip-proxy-request/index.html",
    "revision": "69abe927bf7a88e2f6ae17125fa48717"
  },
  {
    "url": "2018/12/21/electron-spider/index.html",
    "revision": "3c4387076753ae83fecca04c37420784"
  },
  {
    "url": "2019/01/03/flag-2019/index.html",
    "revision": "08a2576530252eeaf0386aa542f16a7e"
  },
  {
    "url": "2019/01/10/regexp-study/index.html",
    "revision": "023300c0a523bc99750cf303b68eb952"
  },
  {
    "url": "2019/06/03/js-module-webpack/index.html",
    "revision": "43a95f178a7e0de6df567b40d42c78f1"
  },
  {
    "url": "2019/07/01/http/index.html",
    "revision": "803bf029b2421c79225f768c7d3df622"
  },
  {
    "url": "2019/07/01/study-2019/index.html",
    "revision": "947658dff5c4cef83fa2760919f48565"
  },
  {
    "url": "2019/07/02/flex-and-grid/index.html",
    "revision": "d9c6e4acec2bbde149566a2e6eb871fb"
  },
  {
    "url": "2019/07/30/fp-chapter4-currying/index.html",
    "revision": "bd5336db9bb03af0ec2b879895030767"
  },
  {
    "url": "2019/07/30/fp-chapter5-compose/index.html",
    "revision": "6438e6da35e84bbd60165ad291d91ea2"
  },
  {
    "url": "2019/07/30/head-first-design-pattern/index.html",
    "revision": "9d8c410f8d94d0d256fd681a8e780982"
  },
  {
    "url": "2019/07/31/fp-chapter6/index.html",
    "revision": "d3610e4405171499197566115f0b015f"
  },
  {
    "url": "2019/11/11/functional-javascript-v3-note/index.html",
    "revision": "3e6a70c9c0e10455dd16a856ba52bb0c"
  },
  {
    "url": "2019/11/12/blog-migrate2/index.html",
    "revision": "78c1277a76bcf4183a34ba287d5f4984"
  },
  {
    "url": "404.html",
    "revision": "fb926dc87f02d30933ac4c3141da9ff5"
  },
  {
    "url": "about-me/index.html",
    "revision": "466e49c2c1468f2db3807317ae2e827e"
  },
  {
    "url": "assets/css/0.styles.aee7f5a7.css",
    "revision": "13de5e2ead275e0229b6f74116ce47c7"
  },
  {
    "url": "assets/img/1.88f78591.png",
    "revision": "88f78591bce0af2af9fec5e68bfde3ce"
  },
  {
    "url": "assets/img/10.703d44c5.png",
    "revision": "703d44c5ec023eebcf6c9209f798c0a7"
  },
  {
    "url": "assets/img/11.424f0b07.png",
    "revision": "424f0b07403c647e798ba5cce2487e63"
  },
  {
    "url": "assets/img/12.bb34e828.png",
    "revision": "bb34e82843d6351f16e13226e8b1ee8b"
  },
  {
    "url": "assets/img/13.c919af8f.png",
    "revision": "c919af8fa2080e2a4ba4f300e836a09e"
  },
  {
    "url": "assets/img/14.dd1a411e.png",
    "revision": "dd1a411ec7164c0a026e46b0a0edb6b0"
  },
  {
    "url": "assets/img/15.bc8e7362.png",
    "revision": "bc8e73628d70dce358ac8ad8cdfd97bc"
  },
  {
    "url": "assets/img/16.4c818c95.png",
    "revision": "4c818c9586add1a7c57ca6d73bbeb012"
  },
  {
    "url": "assets/img/17.6916019f.png",
    "revision": "6916019f7f1d04102c805e2c3750c8e4"
  },
  {
    "url": "assets/img/2.fd669833.png",
    "revision": "fd6698337783dd5a98634923d90bc07b"
  },
  {
    "url": "assets/img/3.dca33342.png",
    "revision": "dca333421d09c6b3148b7097ac9b0f90"
  },
  {
    "url": "assets/img/4.2755cf5e.png",
    "revision": "2755cf5e21a86127b260cfff648bc84f"
  },
  {
    "url": "assets/img/5.904986ce.png",
    "revision": "904986ce9be05290daf3366e2cec29da"
  },
  {
    "url": "assets/img/6.0d3301ad.png",
    "revision": "0d3301ad76abdf1746516d58e5b2b5c9"
  },
  {
    "url": "assets/img/7.96278254.png",
    "revision": "962782546256176be451d0fea9f72701"
  },
  {
    "url": "assets/img/8.743e17cb.png",
    "revision": "743e17cb92e352f5dd3e0e5606c52770"
  },
  {
    "url": "assets/img/9.308be7c6.png",
    "revision": "308be7c6c2b8f14a1108afc1a19befb1"
  },
  {
    "url": "assets/img/design-pattern.620eb6da.png",
    "revision": "620eb6da13811be612f0ea81f82a41ec"
  },
  {
    "url": "assets/img/js-module.b433e57c.png",
    "revision": "b433e57c3bf7c4aee1c4edccec76474e"
  },
  {
    "url": "assets/img/rss.73866ea5.png",
    "revision": "73866ea5b3c332740a5b5157658c0a79"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e4c18670.js",
    "revision": "850f9585987332e15b84f2cb0290db95"
  },
  {
    "url": "assets/js/11.a706a61a.js",
    "revision": "cd1202e3a6ff5cb598cf15e70cf8a31f"
  },
  {
    "url": "assets/js/12.f85faa93.js",
    "revision": "8c121ed5744a655075de4fdbc0b03369"
  },
  {
    "url": "assets/js/13.87e58404.js",
    "revision": "f20d4857dacec6d3717cdad0faf5cb1e"
  },
  {
    "url": "assets/js/14.d8ae43bc.js",
    "revision": "916cc09a1849e4b835a2620550e27157"
  },
  {
    "url": "assets/js/15.91d7182e.js",
    "revision": "89c3bf7e5e3164141f92e0ceb7daf090"
  },
  {
    "url": "assets/js/16.7789e1c2.js",
    "revision": "9bf23f02018dc1bf7a5fc506735708d2"
  },
  {
    "url": "assets/js/17.8ce90838.js",
    "revision": "634249c7938c44093533e7a8dcd3c66e"
  },
  {
    "url": "assets/js/18.47eef063.js",
    "revision": "8084787714c0857723ec8d63c6d5dec6"
  },
  {
    "url": "assets/js/19.311dc386.js",
    "revision": "2c65bc99b25ce3caaa06861da78be1c2"
  },
  {
    "url": "assets/js/2.c2353933.js",
    "revision": "765fb082616a75dc97058f5ae08f68d2"
  },
  {
    "url": "assets/js/20.3654a711.js",
    "revision": "05285f1675f3a3a915f02f366c4152a6"
  },
  {
    "url": "assets/js/21.3aff7e6d.js",
    "revision": "f03e9a2d8c0cdf3e4e9aef21cdfc8731"
  },
  {
    "url": "assets/js/22.ba99d678.js",
    "revision": "1b880b68c615c401fe78c269520fbd57"
  },
  {
    "url": "assets/js/23.d423a3bb.js",
    "revision": "cd693eb7060453f48b63715a70f5fde1"
  },
  {
    "url": "assets/js/24.f5bce48d.js",
    "revision": "cc2dfb07f2ecb4089b1c9c69977e9ed7"
  },
  {
    "url": "assets/js/25.6c0542de.js",
    "revision": "511096dcc5bb0721e29544f3c2d0e44b"
  },
  {
    "url": "assets/js/26.69c795ed.js",
    "revision": "cd90bcd35f4f5c312f03ec068edac458"
  },
  {
    "url": "assets/js/27.308bbfb3.js",
    "revision": "f0aa77571f3522c4bb4ccc3629c77783"
  },
  {
    "url": "assets/js/28.2dc916d0.js",
    "revision": "4d194ac9416af4435248e2316002605e"
  },
  {
    "url": "assets/js/29.1611fcdd.js",
    "revision": "c11de7b9927b14d557b9707c4b660759"
  },
  {
    "url": "assets/js/3.29691287.js",
    "revision": "d4f64809947ef5a0d8fcec00ebbe02c0"
  },
  {
    "url": "assets/js/30.364006bf.js",
    "revision": "1b4e4d5022897fa88314724d5cce7bd6"
  },
  {
    "url": "assets/js/31.8c617463.js",
    "revision": "8d2f7dcefee1bd990aa88f1ab2611b35"
  },
  {
    "url": "assets/js/32.30dce506.js",
    "revision": "a08935f8be02823f9edfad27016b7d25"
  },
  {
    "url": "assets/js/33.999ca30c.js",
    "revision": "86f577d1bf5ef12abd8dc47111d3bdd0"
  },
  {
    "url": "assets/js/34.787c19f7.js",
    "revision": "4c06608626888ac0626bf323fd516bd1"
  },
  {
    "url": "assets/js/35.24c0af40.js",
    "revision": "3da9875e6d248a0929dfe9a1ddd4fab0"
  },
  {
    "url": "assets/js/36.19a1f67c.js",
    "revision": "af08abe533dd4dc4efa06fdc0cb67a91"
  },
  {
    "url": "assets/js/37.f45a88e4.js",
    "revision": "0cf66ab21a16fbab06d2d5ce49c0b1ce"
  },
  {
    "url": "assets/js/38.cd97d47a.js",
    "revision": "8fcc7aef20458c812257eac2efbb2291"
  },
  {
    "url": "assets/js/39.1916d106.js",
    "revision": "5c97920cb82154f822b31d1d29b15255"
  },
  {
    "url": "assets/js/4.f44b1ca0.js",
    "revision": "26091d4d37ba977c1a98c8e3944c81e4"
  },
  {
    "url": "assets/js/40.5051b0dd.js",
    "revision": "10f31b90835426d8b9a2b4d7a0699001"
  },
  {
    "url": "assets/js/41.7f748458.js",
    "revision": "030d28206a68994e36081eeb9225cbbb"
  },
  {
    "url": "assets/js/42.2487150a.js",
    "revision": "ce9c8e3981d2892410ef8750abf2027a"
  },
  {
    "url": "assets/js/43.6433875e.js",
    "revision": "c6df99bd868ad7c288ee773ff51fdd74"
  },
  {
    "url": "assets/js/44.c0f49c93.js",
    "revision": "4283d8f71f4eb80b7ed8a5fa7e46c4bc"
  },
  {
    "url": "assets/js/45.ebcb3b0e.js",
    "revision": "9176f2a99e91e460ca73669ba1a1e672"
  },
  {
    "url": "assets/js/46.1e380fa8.js",
    "revision": "918467fdc8fe164fffaba966cb348bd0"
  },
  {
    "url": "assets/js/47.39b5afc0.js",
    "revision": "0c08771a647edcd9c08543a03f57215f"
  },
  {
    "url": "assets/js/48.7a20c020.js",
    "revision": "1e7a5f2eecb19210fea9eb2c1be1ca4f"
  },
  {
    "url": "assets/js/49.d3d6de64.js",
    "revision": "b0a0a1f893b499cd2277cefb9f2ce92e"
  },
  {
    "url": "assets/js/5.cb697065.js",
    "revision": "4ef6608054b41388374724a8cb7198a4"
  },
  {
    "url": "assets/js/50.46d902bb.js",
    "revision": "89c955dc733b4bac5d2a1e539df8b261"
  },
  {
    "url": "assets/js/51.bc0163ab.js",
    "revision": "b747a44498372a796b7a429182fd5847"
  },
  {
    "url": "assets/js/52.b90b1b3f.js",
    "revision": "eeb43644b2422a6e11fb9ad12b707e60"
  },
  {
    "url": "assets/js/53.85a3122f.js",
    "revision": "3c12c425238b954107adfef1e6ed41fc"
  },
  {
    "url": "assets/js/54.89bbd8c6.js",
    "revision": "aa2fef2e73f4ef4b1948d0b0e8425b69"
  },
  {
    "url": "assets/js/55.678540b5.js",
    "revision": "31662f97fdb6e70663616ecc5ca62a5d"
  },
  {
    "url": "assets/js/56.55f7f981.js",
    "revision": "62f5f1b1ae4b4c9f2013b3cf497ec728"
  },
  {
    "url": "assets/js/57.59046cf8.js",
    "revision": "c368c87f59c637fadfbba00ba8b4464f"
  },
  {
    "url": "assets/js/58.3a868f28.js",
    "revision": "11be14f3cd9510324530f716c132d06a"
  },
  {
    "url": "assets/js/59.c56665c1.js",
    "revision": "80fca5de8bb2ba53f708fdebbade6ef3"
  },
  {
    "url": "assets/js/6.c28bf14a.js",
    "revision": "ddee86c92133a7089190dd2a36d507f2"
  },
  {
    "url": "assets/js/60.9592817c.js",
    "revision": "e017116fc611c0ef1d01b1ac0cdc9532"
  },
  {
    "url": "assets/js/61.1c017d65.js",
    "revision": "b96073a77aa5dfb647d2f39c77b21cf1"
  },
  {
    "url": "assets/js/62.00a50c7e.js",
    "revision": "a99673091e750414031940331a04325c"
  },
  {
    "url": "assets/js/63.da8c497e.js",
    "revision": "f9f05a03ac7d67ab9bfd81a011589713"
  },
  {
    "url": "assets/js/64.58573ac2.js",
    "revision": "5bccef2ae6969b44218af1c0f133009d"
  },
  {
    "url": "assets/js/65.64867d3e.js",
    "revision": "7c97cddbe72331b6d5feec78e013273e"
  },
  {
    "url": "assets/js/66.a5176edf.js",
    "revision": "cf0a52885a6b55b1924cfbd2c96501fc"
  },
  {
    "url": "assets/js/67.a153744f.js",
    "revision": "751a038332aef4b5ae5c648ae9c79564"
  },
  {
    "url": "assets/js/7.42d28620.js",
    "revision": "11f32f134aabcd77f84568cb8e22a162"
  },
  {
    "url": "assets/js/8.c0ecd909.js",
    "revision": "ebb9aaae46c92cec09965ba97cf0ad2d"
  },
  {
    "url": "assets/js/9.a123fee9.js",
    "revision": "b7b2aee2d83956a7b4692aff6c1bfb2f"
  },
  {
    "url": "assets/js/app.875e48c7.js",
    "revision": "bb876cf1cc19652e77a3fed3a1cf2906"
  },
  {
    "url": "index.html",
    "revision": "8caddec40da684fd7346a38634480846"
  },
  {
    "url": "nico2.jpeg",
    "revision": "644f824a1ce6855026b1de1b871ac52b"
  },
  {
    "url": "page/2/index.html",
    "revision": "f49083f737adf9370ffdb736fe996fca"
  },
  {
    "url": "page/3/index.html",
    "revision": "c418f0bbb7b88804388120eeae0e4ce7"
  },
  {
    "url": "page/4/index.html",
    "revision": "6797bcc095f5e86624866476d19657e8"
  },
  {
    "url": "page/5/index.html",
    "revision": "2bf79de4bfad44d0087ad54053be7fbb"
  },
  {
    "url": "page/6/index.html",
    "revision": "a019880c0f9d61beef5b0323858d57b5"
  },
  {
    "url": "tag/css学习心得/index.html",
    "revision": "722da6a241d8d0f3413d75fdf3e5c7a5"
  },
  {
    "url": "tag/index.html",
    "revision": "afeef37c312cb9e13573903e8a5562c9"
  },
  {
    "url": "tag/Javascript学习笔记/index.html",
    "revision": "9b61567b9ecc4acd02de29dcc0f06057"
  },
  {
    "url": "tag/Javascript学习笔记/page/2/index.html",
    "revision": "6f1f808d8ac8a561e7c0922b6b8189f8"
  },
  {
    "url": "tag/node.js学习笔记/index.html",
    "revision": "fefdb802a00854a3c9f54fc7b147a68e"
  },
  {
    "url": "tag/node.js学习笔记/page/2/index.html",
    "revision": "29b88b44359d1052d38801a1ba386b9c"
  },
  {
    "url": "tag/vue源码学习/index.html",
    "revision": "a2b4bdefcb0a2c00eef038254bc1611b"
  },
  {
    "url": "tag/web前端知识/index.html",
    "revision": "aa5b3d0c2a44d4e6b739076f4b97cc69"
  },
  {
    "url": "tag/web前端知识/page/2/index.html",
    "revision": "a044574b2b959be5fdf4e10d03beb48f"
  },
  {
    "url": "tag/二次元/index.html",
    "revision": "f1a5f32e32acfffb8a9cc547dddfbbe8"
  },
  {
    "url": "tag/体会感悟/index.html",
    "revision": "e8ca3d6802590ea090f05c5107cba34e"
  },
  {
    "url": "tag/学习笔记/index.html",
    "revision": "46ae1deae824b53a2829735bee2903b7"
  },
  {
    "url": "tag/生活琐事/index.html",
    "revision": "e66d20592a12d7931d957bcb6296b383"
  },
  {
    "url": "tag/矫情不是病/index.html",
    "revision": "9bf567ee0c67da2febb355cc3c4a96d3"
  },
  {
    "url": "tag/读书笔记/index.html",
    "revision": "7b0ab61536e1ad5c0fd7b28d60ca0908"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
