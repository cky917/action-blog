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
    "revision": "418e7963a6bec557be1980d089924e45"
  },
  {
    "url": "2015/08/18/ajax/index.html",
    "revision": "d4f3e5e6ec874f3f78a3e872a69fd840"
  },
  {
    "url": "2015/09/23/repaiting/index.html",
    "revision": "66cd5a175986d34598f487f8967f24c6"
  },
  {
    "url": "2015/09/30/javascript实践/index.html",
    "revision": "f8d09e53afff44b5c1e65e387daa70b7"
  },
  {
    "url": "2015/10/28/log1/index.html",
    "revision": "f84a0b3329f8c78368e0a6b2c6cfda05"
  },
  {
    "url": "2015/11/06/log2/index.html",
    "revision": "a0ae13cccba277a16f796d7a36bc6eb4"
  },
  {
    "url": "2015/11/09/less-is-more/index.html",
    "revision": "7a343086813b1d7d1d5e920b450f2e5a"
  },
  {
    "url": "2015/11/20/array-methods/index.html",
    "revision": "acd8a64153002d69f3a1a4c2b186aa8b"
  },
  {
    "url": "2015/11/20/css-center/index.html",
    "revision": "976ac4379d865f6513832a338d132959"
  },
  {
    "url": "2015/11/20/not-only-if-else/index.html",
    "revision": "f0b1994259fb7a9ba9fa1d8ec4e10c22"
  },
  {
    "url": "2015/11/25/jqueryperformanceoptimization/index.html",
    "revision": "00effa12d02a751bae2997bcbcef3570"
  },
  {
    "url": "2015/12/01/nodejsstudy1/index.html",
    "revision": "64a736923d64c7920ed2391a8f0a924f"
  },
  {
    "url": "2015/12/02/nodejsstudy2/index.html",
    "revision": "ca8bc01a46cbf4d1d518c22b3f7d3b82"
  },
  {
    "url": "2015/12/03/nodejsstudy3/index.html",
    "revision": "a6e16f6c9312a8d33d1b77edd1285445"
  },
  {
    "url": "2015/12/11/nodejsstudy4/index.html",
    "revision": "87735900380b1423af41a0801b336c68"
  },
  {
    "url": "2016/01/04/nodejsstudy5/index.html",
    "revision": "306f7897a775a82f37e7ff10719b30fd"
  },
  {
    "url": "2016/01/04/nodejsstudy6/index.html",
    "revision": "f99292d00d9a3b7d9c71e2be2706a592"
  },
  {
    "url": "2016/01/06/nodejsstudy10/index.html",
    "revision": "50c3580757428c4e19350ee9ce6f60c0"
  },
  {
    "url": "2016/01/06/nodejsstudy7/index.html",
    "revision": "9d9c6393163122d8e68ab4d5acd81be0"
  },
  {
    "url": "2016/01/06/nodejsstudy8/index.html",
    "revision": "6a6089529510fac600625da7f70f029d"
  },
  {
    "url": "2016/01/06/nodejsstudy9/index.html",
    "revision": "962d7a0cec92d7aad4005c3a34e4ced4"
  },
  {
    "url": "2016/01/07/nodejsstudy11/index.html",
    "revision": "57a74a080c1d3dd39b3092f2dd66fb74"
  },
  {
    "url": "2016/01/21/frontend-knowledge/index.html",
    "revision": "e91eae91e2fd2a1a787ee620a2565c1e"
  },
  {
    "url": "2016/01/27/chineseinputmethods/index.html",
    "revision": "12e788af048eed62c8b94df2bee835bb"
  },
  {
    "url": "2016/02/17/flag-2016/index.html",
    "revision": "f31db81715bafae308e70ce10848df73"
  },
  {
    "url": "2016/02/24/fidder/index.html",
    "revision": "be848d9d9854c6513137d84f3330d6ea"
  },
  {
    "url": "2016/03/25/introduction-jquery-deferred-objects/index.html",
    "revision": "57d8f4d4c3e77716c40c90ab49b4700c"
  },
  {
    "url": "2016/07/25/pm2-node-service/index.html",
    "revision": "09e8c1eb7f8e7cf6fa9b0cd96123d111"
  },
  {
    "url": "2017/01/05/my2016and2017/index.html",
    "revision": "39bd738dcea974ae51a75c217d340cc2"
  },
  {
    "url": "2017/01/06/mocha/index.html",
    "revision": "8cc3552e697fcb0f73b19c5fc81ffb98"
  },
  {
    "url": "2017/03/27/reading-notes-of-ecmascript6/index.html",
    "revision": "c45ffeb24305dd2c1c516a20e4562ae5"
  },
  {
    "url": "2017/04/27/debounce-and-throttle/index.html",
    "revision": "b60d4433c4b60abda2d1b1a7050b49ea"
  },
  {
    "url": "2017/06/27/wxpachong/index.html",
    "revision": "954e5654916cacd6b7a98ef65219320b"
  },
  {
    "url": "2017/08/27/postmessage-api/index.html",
    "revision": "fca49cb730fef97de587d90c13221da6"
  },
  {
    "url": "2017/09/05/webpack/index.html",
    "revision": "f0ce24128eadc029b6c564a24bb0e4be"
  },
  {
    "url": "2017/10/17/businesscode/index.html",
    "revision": "4128c0df48711276357bf514dd0117a8"
  },
  {
    "url": "2018/02/28/typescript1/index.html",
    "revision": "f04074611135c431641ab119e5522e29"
  },
  {
    "url": "2018/02/28/typescript2/index.html",
    "revision": "6baba36429fd5478463eeb19c50c58e1"
  },
  {
    "url": "2018/02/28/typescript3/index.html",
    "revision": "b6dba0a78f21d6c442ef284290831433"
  },
  {
    "url": "2018/03/08/vue-source-code-study-1/index.html",
    "revision": "0053e9f4ade50e3017e9572af7451ebf"
  },
  {
    "url": "2018/03/09/vue-source-code-study-2/index.html",
    "revision": "7e3789d65df8770566997a9119b1ac80"
  },
  {
    "url": "2018/03/19/vue-source-code-study-3/index.html",
    "revision": "8e5793087b011855cbb3a1ab84bc5e7a"
  },
  {
    "url": "2018/03/21/blog-transfer/index.html",
    "revision": "db4861d919f3fe5e0697cfe33aa09889"
  },
  {
    "url": "2018/03/21/vue-source-code-study-4/index.html",
    "revision": "20e2442b8cd288a1c419b33a578b6594"
  },
  {
    "url": "2018/05/07/ip-proxy-request/index.html",
    "revision": "8f1b18236881679077c0f29c92472e6a"
  },
  {
    "url": "2018/12/21/electron-spider/index.html",
    "revision": "6ea0097d983e0d3567dca44ffb7b7812"
  },
  {
    "url": "2019/01/03/flag-2019/index.html",
    "revision": "b383a3d9db76b52272819448aa0b00c7"
  },
  {
    "url": "2019/01/10/regexp-study/index.html",
    "revision": "a28c68b473c19e3b48dfc7edd86cf844"
  },
  {
    "url": "2019/06/03/js-module-webpack/index.html",
    "revision": "2f9fab68c30c76f3b5e94b33cdd8bec1"
  },
  {
    "url": "2019/07/01/http/index.html",
    "revision": "1281fdfcbcbf28f6e983316ae4e99840"
  },
  {
    "url": "2019/07/01/study-2019/index.html",
    "revision": "16f7c6af73ec701e2cab2b20b844f9af"
  },
  {
    "url": "2019/07/02/flex-and-grid/index.html",
    "revision": "cd7e46287f1e691b08320f0e5ceeb4b4"
  },
  {
    "url": "2019/07/30/fp-chapter4-currying/index.html",
    "revision": "370553d623911119e70bf11ff1c4358b"
  },
  {
    "url": "2019/07/30/fp-chapter5-compose/index.html",
    "revision": "d6f981a49bb4e01845ef242adbd6e2ec"
  },
  {
    "url": "2019/07/30/head-first-design-pattern/index.html",
    "revision": "c98e8a152c269884d8d39a66cfa06852"
  },
  {
    "url": "2019/07/31/fp-chapter6/index.html",
    "revision": "6c71772a6aaaf36250c7bb726629eb74"
  },
  {
    "url": "2019/11/11/functional-javascript-v3-note/index.html",
    "revision": "1a807895db69b8872263f544d85194e0"
  },
  {
    "url": "2019/11/12/blog-migrate2/index.html",
    "revision": "05e1a9e87d3d61562ca69e8870a4e2a3"
  },
  {
    "url": "404.html",
    "revision": "50e98cfa0ed7f6e541272e67f2094c6a"
  },
  {
    "url": "about-me/index.html",
    "revision": "2b0e292de0eb741527ee3dfedb9e7496"
  },
  {
    "url": "assets/css/0.styles.a13797cc.css",
    "revision": "94cb49dfca675c3b75678e774cf22937"
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
    "url": "assets/js/10.ef45548b.js",
    "revision": "850f9585987332e15b84f2cb0290db95"
  },
  {
    "url": "assets/js/11.b95e7e51.js",
    "revision": "a15d90232e8ff96505c54e29bf089473"
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
    "url": "assets/js/20.dfbe0369.js",
    "revision": "5b341c659f609cf446697f25d720de7d"
  },
  {
    "url": "assets/js/21.c6eba06e.js",
    "revision": "a4bb760f414b2697d5ae351ba514c6d9"
  },
  {
    "url": "assets/js/22.37f89aff.js",
    "revision": "8455a36a09cf36f2ce6a29d29cc62446"
  },
  {
    "url": "assets/js/23.555bed0f.js",
    "revision": "c8139525ae13bcb375c6ba31fef0fd03"
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
    "url": "assets/js/34.11f55dca.js",
    "revision": "d091baa139c39a549111c748c8400934"
  },
  {
    "url": "assets/js/35.cb1a16fb.js",
    "revision": "e2e14c9cce7a48de2926b794594594d5"
  },
  {
    "url": "assets/js/36.7c8e20d8.js",
    "revision": "7192991bded45396912e425fac8ca56d"
  },
  {
    "url": "assets/js/37.4c6d6d30.js",
    "revision": "18c265eecfc73db3cf291d52968cf83a"
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
    "url": "assets/js/4.fbee0a14.js",
    "revision": "13b35d712609f71130dfb80da01d41b4"
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
    "url": "assets/js/5.779bbf01.js",
    "revision": "d475f02cf68e37f49772adae9b823105"
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
    "url": "assets/js/9.b4b1bbbc.js",
    "revision": "44479cac8b38e1816694968228c070f7"
  },
  {
    "url": "assets/js/app.356a21e4.js",
    "revision": "78bd4c9b5a81c6a08cc4f33e7e7dd431"
  },
  {
    "url": "index.html",
    "revision": "f6324e41baf2a4e146fb1ef813ea6d67"
  },
  {
    "url": "nico2.jpeg",
    "revision": "644f824a1ce6855026b1de1b871ac52b"
  },
  {
    "url": "page/2/index.html",
    "revision": "127360b67928ea3ea5df47534d890478"
  },
  {
    "url": "page/3/index.html",
    "revision": "5666ca7bf9df6675e3248b918925e482"
  },
  {
    "url": "page/4/index.html",
    "revision": "22f447329ee4222c53347de6406cfb40"
  },
  {
    "url": "page/5/index.html",
    "revision": "040e343c3807aaefed048102df3568c1"
  },
  {
    "url": "page/6/index.html",
    "revision": "314597fd658bdb284dc5fa54b0fb2a12"
  },
  {
    "url": "tag/css学习心得/index.html",
    "revision": "e2ac7e86108d051599cd18ee04556718"
  },
  {
    "url": "tag/index.html",
    "revision": "b49ef379f0c762af637c3f5853a235ad"
  },
  {
    "url": "tag/Javascript学习笔记/index.html",
    "revision": "cc7c04a651359bd38c102e8c1a6b2964"
  },
  {
    "url": "tag/Javascript学习笔记/page/2/index.html",
    "revision": "7bedcecda6df72d76e6b7c40c59ea8f4"
  },
  {
    "url": "tag/node.js学习笔记/index.html",
    "revision": "c542cbdb066a7bf7ab85fec2a86cd166"
  },
  {
    "url": "tag/node.js学习笔记/page/2/index.html",
    "revision": "64cbaa50c7bc3ff0ced4b2f2a363b46d"
  },
  {
    "url": "tag/vue源码学习/index.html",
    "revision": "321553c9dba7f56db94f9823b1a02c20"
  },
  {
    "url": "tag/web前端知识/index.html",
    "revision": "1363bb98aeb20cf9b8f626ccdc7886ba"
  },
  {
    "url": "tag/web前端知识/page/2/index.html",
    "revision": "33dbd61d4fabcfcb3df08f01d3ae2a69"
  },
  {
    "url": "tag/二次元/index.html",
    "revision": "ef1712cceebbc57a49eb9d47bcadb980"
  },
  {
    "url": "tag/体会感悟/index.html",
    "revision": "42c0548b124c5de2c9057deccba8e343"
  },
  {
    "url": "tag/学习笔记/index.html",
    "revision": "a2602914534deb0fe4baabdaf81966b9"
  },
  {
    "url": "tag/生活琐事/index.html",
    "revision": "102d5a0e6a4e2fe8256d4e778cbbdfb9"
  },
  {
    "url": "tag/矫情不是病/index.html",
    "revision": "6905b0e9b6470aeb42bfd122e76ca615"
  },
  {
    "url": "tag/读书笔记/index.html",
    "revision": "9ccd8f56be9e8af76b06904f9fa15a78"
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
