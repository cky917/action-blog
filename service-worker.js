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
    "revision": "61f5f425333d0e8f8f3fcd11e45ff3e1"
  },
  {
    "url": "2015/08/18/ajax/index.html",
    "revision": "0077e390ba72f5ac2ad1930db45b6098"
  },
  {
    "url": "2015/09/23/repaiting/index.html",
    "revision": "ba95821644b7f9ae4c155db37eae5d96"
  },
  {
    "url": "2015/09/30/javascript实践/index.html",
    "revision": "904a8d1bf9187129ad76f7cc2bb5c8ca"
  },
  {
    "url": "2015/10/28/log1/index.html",
    "revision": "4298dbb8936e0df5d47104ad84c36e2e"
  },
  {
    "url": "2015/11/06/log2/index.html",
    "revision": "6a6b29ddf3c8fcadafcc6d767bee6f1d"
  },
  {
    "url": "2015/11/09/less-is-more/index.html",
    "revision": "ace34e92da101b44f7aed2692115c5c7"
  },
  {
    "url": "2015/11/20/array-methods/index.html",
    "revision": "f5f4691fd7fa0398a17fa37703018182"
  },
  {
    "url": "2015/11/20/css-center/index.html",
    "revision": "8b332b3d361ed9eabba6044bb68afa2a"
  },
  {
    "url": "2015/11/20/not-only-if-else/index.html",
    "revision": "1477a9df6b956f375e1e939d891a9869"
  },
  {
    "url": "2015/11/25/jqueryperformanceoptimization/index.html",
    "revision": "deefb02d40e5ce444f131c9aedd22996"
  },
  {
    "url": "2015/12/01/nodejsstudy1/index.html",
    "revision": "5150449e24bec558c405e2a3009c4c18"
  },
  {
    "url": "2015/12/02/nodejsstudy2/index.html",
    "revision": "63c65e99c9780d39d48050db4d8cb8ad"
  },
  {
    "url": "2015/12/03/nodejsstudy3/index.html",
    "revision": "1a165d08edae80133b4cc95a60d45bdb"
  },
  {
    "url": "2015/12/11/nodejsstudy4/index.html",
    "revision": "652a9d4a77fa78cb9b2aa1761f3f4333"
  },
  {
    "url": "2016/01/04/nodejsstudy5/index.html",
    "revision": "ecaf698f95415eb5655744adf23088f0"
  },
  {
    "url": "2016/01/04/nodejsstudy6/index.html",
    "revision": "c4f099db58dad020fe462926107813b9"
  },
  {
    "url": "2016/01/06/nodejsstudy10/index.html",
    "revision": "747a4957a0017eced687f2d95b6a3c74"
  },
  {
    "url": "2016/01/06/nodejsstudy7/index.html",
    "revision": "ff64bd152aea8169dafccb0a703171a0"
  },
  {
    "url": "2016/01/06/nodejsstudy8/index.html",
    "revision": "d7fe8e18c54105b80248ade73486849e"
  },
  {
    "url": "2016/01/06/nodejsstudy9/index.html",
    "revision": "46f7748db0fa3c8e70a810c1890581f8"
  },
  {
    "url": "2016/01/07/nodejsstudy11/index.html",
    "revision": "16a8ae8d1d5107f05d0a42e861ea4b46"
  },
  {
    "url": "2016/01/21/frontend-knowledge/index.html",
    "revision": "45b6d91865c08a96b537557f85de7535"
  },
  {
    "url": "2016/01/27/chineseinputmethods/index.html",
    "revision": "01ca1489e521cfe70224f6a3ccba337a"
  },
  {
    "url": "2016/02/17/flag-2016/index.html",
    "revision": "54f8dbebf8e5d4e0b8c3fbe3e78ad04f"
  },
  {
    "url": "2016/02/24/fidder/index.html",
    "revision": "ce5ae91cf531ee743f55d520c03f2719"
  },
  {
    "url": "2016/03/25/introduction-jquery-deferred-objects/index.html",
    "revision": "454e7ed14cd71f57bb96a092cfc6146d"
  },
  {
    "url": "2016/07/25/pm2-node-service/index.html",
    "revision": "4eae7509c100032be2687c43533d7c78"
  },
  {
    "url": "2017/01/05/my2016and2017/index.html",
    "revision": "47a4901efb7ca29b0359651ee14aec41"
  },
  {
    "url": "2017/01/06/mocha/index.html",
    "revision": "fae0559b65d7fbc0887ea1a76a14246a"
  },
  {
    "url": "2017/03/27/reading-notes-of-ecmascript6/index.html",
    "revision": "681511ede03eb27936d77ceab299b29d"
  },
  {
    "url": "2017/04/27/debounce-and-throttle/index.html",
    "revision": "61a368bf7f0eaf7a1173dee20dd15660"
  },
  {
    "url": "2017/06/27/wxpachong/index.html",
    "revision": "54cb27c8e539747e9615fb2977d76d41"
  },
  {
    "url": "2017/08/27/postmessage-api/index.html",
    "revision": "e1f44add620571bd591b101812d9c6cf"
  },
  {
    "url": "2017/09/05/webpack/index.html",
    "revision": "a905698e0161e5afe9a20a8d410b6015"
  },
  {
    "url": "2017/10/17/businesscode/index.html",
    "revision": "82825c8ca9c51e71204235820f55dedb"
  },
  {
    "url": "2018/02/28/typescript1/index.html",
    "revision": "697c182a9f2907ae6420e6f797f01142"
  },
  {
    "url": "2018/02/28/typescript2/index.html",
    "revision": "9cabe8eb10a7eaf5a35b9241b2c1d603"
  },
  {
    "url": "2018/02/28/typescript3/index.html",
    "revision": "30e0a8738b1edca56513a0aa619647f5"
  },
  {
    "url": "2018/03/08/vue-source-code-study-1/index.html",
    "revision": "525a09029296f6bd3249218af127b5d1"
  },
  {
    "url": "2018/03/09/vue-source-code-study-2/index.html",
    "revision": "f7aea13d9f89e96f2cd33f014886b55e"
  },
  {
    "url": "2018/03/19/vue-source-code-study-3/index.html",
    "revision": "78bbb982e00e4cf37a62ce32d2a29dae"
  },
  {
    "url": "2018/03/21/blog-transfer/index.html",
    "revision": "0cc27cfc9c02d89f045ec614f70cbe42"
  },
  {
    "url": "2018/03/21/vue-source-code-study-4/index.html",
    "revision": "2ea7f2c9f42194af92814bc05485b033"
  },
  {
    "url": "2018/05/07/ip-proxy-request/index.html",
    "revision": "633fbd350179d456c6025b13474223aa"
  },
  {
    "url": "2018/12/21/electron-spider/index.html",
    "revision": "acb6d3664359addb54699f55676c287a"
  },
  {
    "url": "2019/01/03/flag-2019/index.html",
    "revision": "ea5b9378873b8a85002c417994fd8aaa"
  },
  {
    "url": "2019/01/10/regexp-study/index.html",
    "revision": "b9ff3ed8d93a2241afbbce7c8a91cc97"
  },
  {
    "url": "2019/06/03/js-module-webpack/index.html",
    "revision": "67341dd3ea6bd0275c6081fa337ba5be"
  },
  {
    "url": "2019/07/01/http/index.html",
    "revision": "8140c7889849bfd5b63019cf709fd902"
  },
  {
    "url": "2019/07/01/study-2019/index.html",
    "revision": "38f6678e00bc78fb467377f2538b9f2d"
  },
  {
    "url": "2019/07/02/flex-and-grid/index.html",
    "revision": "9eaaf7e64c4e61f10e2ecf27ca5f4d7d"
  },
  {
    "url": "2019/07/30/fp-chapter4-currying/index.html",
    "revision": "cbf29e4ae06a0e5de657d4281c2383e8"
  },
  {
    "url": "2019/07/30/fp-chapter5-compose/index.html",
    "revision": "38da077994c28cd522505f3efded2d7c"
  },
  {
    "url": "2019/07/30/head-first-design-pattern/index.html",
    "revision": "59f50661da9e41d9c0b9250ea6e89522"
  },
  {
    "url": "2019/07/31/fp-chapter6/index.html",
    "revision": "4deee2bb2303ed68408c38b1587b33c0"
  },
  {
    "url": "2019/11/11/functional-javascript-v3-note/index.html",
    "revision": "d937d8d6b63d40e1c046a823e03c938d"
  },
  {
    "url": "2019/11/12/blog-migrate2/index.html",
    "revision": "6cac5250b39aa08044ab412127a748a4"
  },
  {
    "url": "404.html",
    "revision": "41ec42e08c6bf7fbaf9851465795b2bb"
  },
  {
    "url": "about-me/index.html",
    "revision": "a3fc9891d7d8361c8bb55af3df9b6c5d"
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
    "url": "assets/js/66.b63753e2.js",
    "revision": "469a20024c4447a3ca42fe4f0fc3afeb"
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
    "url": "assets/js/app.337bf1e8.js",
    "revision": "ea3f17b7b1199360e089ff285bdef04b"
  },
  {
    "url": "index.html",
    "revision": "223afa346c176f287a72e75390a0786b"
  },
  {
    "url": "nico2.jpeg",
    "revision": "644f824a1ce6855026b1de1b871ac52b"
  },
  {
    "url": "page/2/index.html",
    "revision": "56dedf0706bfb85254b0418455c37d7b"
  },
  {
    "url": "page/3/index.html",
    "revision": "687302fd96bb424a96d41df8802856f3"
  },
  {
    "url": "page/4/index.html",
    "revision": "f320d92accb680e4262dda44da3eb7d8"
  },
  {
    "url": "page/5/index.html",
    "revision": "5ca163ffd9a1ae240f1615b27b41285e"
  },
  {
    "url": "page/6/index.html",
    "revision": "c83c2b33defcfa4e60641f13bc3af749"
  },
  {
    "url": "tag/css学习心得/index.html",
    "revision": "09562aab82cff0263ebf9d6141a834e4"
  },
  {
    "url": "tag/index.html",
    "revision": "6d2def2fdaa6816d0fe4f8656e840d7e"
  },
  {
    "url": "tag/Javascript学习笔记/index.html",
    "revision": "cd0de45b84e67a648f1d3fc6b79b327f"
  },
  {
    "url": "tag/Javascript学习笔记/page/2/index.html",
    "revision": "0cd8199d467014b2c4fabadc86b22a3a"
  },
  {
    "url": "tag/node.js学习笔记/index.html",
    "revision": "598319b46c9d0ce6d4d048425b272552"
  },
  {
    "url": "tag/node.js学习笔记/page/2/index.html",
    "revision": "20650ba444cc632520bda0b6994a7da8"
  },
  {
    "url": "tag/vue源码学习/index.html",
    "revision": "c46d5577352085a2cfa1e593b27e2641"
  },
  {
    "url": "tag/web前端知识/index.html",
    "revision": "271ea995eccc9888600e60c83b0da135"
  },
  {
    "url": "tag/web前端知识/page/2/index.html",
    "revision": "d585b796c95b059d5f5b142fe0bdafb9"
  },
  {
    "url": "tag/二次元/index.html",
    "revision": "bfc1eb354f84b470ddae5c5661279291"
  },
  {
    "url": "tag/体会感悟/index.html",
    "revision": "95b02863cfb40e1f971b2ff095e5afd9"
  },
  {
    "url": "tag/学习笔记/index.html",
    "revision": "ffccd746a3180e74a618fa69a462ad5d"
  },
  {
    "url": "tag/生活琐事/index.html",
    "revision": "9e00a0bdf958fc0c42e00cc11394cc29"
  },
  {
    "url": "tag/矫情不是病/index.html",
    "revision": "d6b76c598f0cfa7087b4d9d47b5507c8"
  },
  {
    "url": "tag/读书笔记/index.html",
    "revision": "3f7c2b15683c99575295473f3150a27d"
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
