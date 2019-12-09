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
    "url": "2015/07/25/好玩的cookie/index.html",
    "revision": "9b3d01c57ce86d212f3ac692cba170e4"
  },
  {
    "url": "2015/08/18/用js原生实现ajax的get和post/index.html",
    "revision": "bdc5e3a26b94def9a5effed457537e85"
  },
  {
    "url": "2015/09/23/浏览器的重绘与重排/index.html",
    "revision": "2b160dd012b81cadfb2429c1494a1aba"
  },
  {
    "url": "2015/09/30/javascript实践/index.html",
    "revision": "793ab1a1447e7b11a16ede0d4b556a65"
  },
  {
    "url": "2015/10/28/请问，你也是一只蘑菇吗/index.html",
    "revision": "07cb538b8d6ab3f22509d8239d8caece"
  },
  {
    "url": "2015/11/06/请问您今天要来点兔子吗/index.html",
    "revision": "c813cc46dae20f233d3571fde690542c"
  },
  {
    "url": "2015/11/09/less-is-more/index.html",
    "revision": "5d7f94ccd41b80013d2b71dbf10d7ec8"
  },
  {
    "url": "2015/11/20/不是只有“if-else”/index.html",
    "revision": "ab0fc6efa9ec6a889b7a75c0d35f980b"
  },
  {
    "url": "2015/11/20/各种居中布局的css实现方法/index.html",
    "revision": "464de92aab4e53ba7d3255eea15691d4"
  },
  {
    "url": "2015/11/20/数组的常用方法/index.html",
    "revision": "c64b820f235d34d8023dc6a11ea14575"
  },
  {
    "url": "2015/11/25/jqueryperformanceoptimization/index.html",
    "revision": "eb2964554803661159baea58fd6c5f05"
  },
  {
    "url": "2015/12/01/nodejsstudy1/index.html",
    "revision": "570d1e9d4bd30a5c58767d4c223336c3"
  },
  {
    "url": "2015/12/02/nodejsstudy2/index.html",
    "revision": "ed4bcd088f78eee929cde566e9610a2c"
  },
  {
    "url": "2015/12/03/nodejsstudy3/index.html",
    "revision": "785ac36ee5d37a9fa683b9da5a9f9ebc"
  },
  {
    "url": "2015/12/11/nodejsstudy4/index.html",
    "revision": "423bdc0b8071cb98023de299ae2c71c7"
  },
  {
    "url": "2016/01/04/nodejsstudy5/index.html",
    "revision": "bbdd06ec4b5419a5b3560238e820b151"
  },
  {
    "url": "2016/01/04/nodejsstudy6/index.html",
    "revision": "8667a8e329bf379d0fb7aa12aaf579ef"
  },
  {
    "url": "2016/01/06/nodejsstudy10/index.html",
    "revision": "22aca0aa25fcb81cd49e0edf7a3c5fda"
  },
  {
    "url": "2016/01/06/nodejsstudy7/index.html",
    "revision": "1701f39dc274dbe0c175a6a80e7ed5a9"
  },
  {
    "url": "2016/01/06/nodejsstudy8/index.html",
    "revision": "35cc321642fe86031a13451e5988b9cf"
  },
  {
    "url": "2016/01/06/nodejsstudy9/index.html",
    "revision": "5775d1b914686f6c49ed8bb9317bb633"
  },
  {
    "url": "2016/01/07/nodejsstudy11/index.html",
    "revision": "6d68b1283231424be3bcb6b11a179acd"
  },
  {
    "url": "2016/01/21/前端知识收集/index.html",
    "revision": "547792771ebe939018b3a5bc0312b10f"
  },
  {
    "url": "2016/01/27/chineseinputmethods/index.html",
    "revision": "d2cce3f91165648e6506bd0cb612e60e"
  },
  {
    "url": "2016/02/17/_2016年计划（目标）/index.html",
    "revision": "93185d4f91a775d210bee3dd8615ace3"
  },
  {
    "url": "2016/02/24/利用fiddler进行前端调试/index.html",
    "revision": "cfe8fb47dfaccf95e3b98b7a4f567f63"
  },
  {
    "url": "2016/03/25/introduction-jquery-deferred-objects/index.html",
    "revision": "8ef4dc6458cda25b4d21702f6411c2b7"
  },
  {
    "url": "2016/07/25/pm2-node-service/index.html",
    "revision": "54b27bef0ca04313a33053e13a8df59b"
  },
  {
    "url": "2017/01/05/my2016and2017/index.html",
    "revision": "3ef80cb6e86733660025f46b452d3f22"
  },
  {
    "url": "2017/01/06/mocha/index.html",
    "revision": "c1b00d41e4f129adbe49c7d97dccd65d"
  },
  {
    "url": "2017/03/27/reading-notes-of-ecmascript6/index.html",
    "revision": "5a50610d2a4f3bec2a5cef060f7adab1"
  },
  {
    "url": "2017/04/27/debounce-and-throttle/index.html",
    "revision": "a8e16f86de3a3b0abcf5c96d143e5ecc"
  },
  {
    "url": "2017/06/27/wxpachong/index.html",
    "revision": "6b5802f7c90de522b19e54ab19553c8a"
  },
  {
    "url": "2017/08/27/postmessage-api/index.html",
    "revision": "53acf2719d3a2973db17c719117f5ccf"
  },
  {
    "url": "2017/09/05/webpack/index.html",
    "revision": "eddee79f49ba8fff762474a304fded69"
  },
  {
    "url": "2017/10/17/businesscode/index.html",
    "revision": "e5cefa05d39533d505b704b2563d2a14"
  },
  {
    "url": "2018/02/28/typescript1/index.html",
    "revision": "c86e6b8a037bfd624502da1fe1893b64"
  },
  {
    "url": "2018/02/28/typescript2/index.html",
    "revision": "20f19af51b8f838c8f0b7abf1c60ddff"
  },
  {
    "url": "2018/02/28/typescript3/index.html",
    "revision": "a080c9078c514829f46935cebe08a5f7"
  },
  {
    "url": "2018/03/08/vue-source-code-study-1/index.html",
    "revision": "82b4795d613088b661d51485c10fd90b"
  },
  {
    "url": "2018/03/09/vue-source-code-study-2/index.html",
    "revision": "981efef6aa6d6785985041dd504039dd"
  },
  {
    "url": "2018/03/19/vue-source-code-study-3/index.html",
    "revision": "e08ceaa1c873b3f3642fcdf8cdeb7399"
  },
  {
    "url": "2018/03/21/blog-transfer/index.html",
    "revision": "11b0b2fbb064ef6903475c873c87a6fc"
  },
  {
    "url": "2018/03/21/vue-source-code-study-4/index.html",
    "revision": "9ee3635b06a0b4646d26096050004b6a"
  },
  {
    "url": "2018/05/07/ip-proxy-request/index.html",
    "revision": "6737f1cecdbcd13b42c4dd9bbcdfd5c9"
  },
  {
    "url": "2018/12/21/electron-spider/index.html",
    "revision": "6444302270744ba23ec118a859db2c4c"
  },
  {
    "url": "2019/01/03/_2019-flag/index.html",
    "revision": "3182a044bba5b30d7bf6e501788585ae"
  },
  {
    "url": "2019/01/10/regexp-study/index.html",
    "revision": "fffea3e83ce267f99077aa66e8f25902"
  },
  {
    "url": "2019/06/03/js-module-webpack/index.html",
    "revision": "20f72d373b023113bc3786ff59835788"
  },
  {
    "url": "2019/07/01/_2019-study/index.html",
    "revision": "45278a368b10047a1c1adea234b815d5"
  },
  {
    "url": "2019/07/01/http/index.html",
    "revision": "00482f0fc638ecaac21ed23b79b4fd8d"
  },
  {
    "url": "2019/07/02/flex-and-grid/index.html",
    "revision": "014045b610e65cd8c7421a240a4ef7c3"
  },
  {
    "url": "2019/07/30/fp-chapter4-currying/index.html",
    "revision": "1f3512a8fc0454a7da926b3414187b20"
  },
  {
    "url": "2019/07/30/fp-chapter5-compose/index.html",
    "revision": "82f0ee6f6213743c7c38f30fba5d6b30"
  },
  {
    "url": "2019/07/30/head-first-design-pattern/index.html",
    "revision": "1c22ae60cd4c5264ec4fd8e5d2bbdf23"
  },
  {
    "url": "2019/07/31/fp-chapter6/index.html",
    "revision": "1aed886f1fc4c469b294c891ff3c1eb9"
  },
  {
    "url": "2019/11/11/functional-javascript-v3-note/index.html",
    "revision": "bf72f5d6993b8aaf35a3f6ef2dcb2767"
  },
  {
    "url": "2019/11/12/blog-migrate2/index.html",
    "revision": "ff2c719c7b424dd0601d89b242b3c0bd"
  },
  {
    "url": "404.html",
    "revision": "215db65b882c2ea611c5b85dbba012b9"
  },
  {
    "url": "about-me/index.html",
    "revision": "27323a51a797e4d05ce5f68c6fff4313"
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
    "url": "assets/js/11.3db5c67b.js",
    "revision": "ea8d8d813a1f6335ea346005b3e4732c"
  },
  {
    "url": "assets/js/12.f85faa93.js",
    "revision": "8c121ed5744a655075de4fdbc0b03369"
  },
  {
    "url": "assets/js/13.e44c1736.js",
    "revision": "95065b2cc44640a3b69cc24302e5aaab"
  },
  {
    "url": "assets/js/14.05fc6e2a.js",
    "revision": "2731ace863995ada76cc7b83439ac216"
  },
  {
    "url": "assets/js/15.2924dc4e.js",
    "revision": "907bb191d934cd7accf370247d5bb75b"
  },
  {
    "url": "assets/js/16.7789e1c2.js",
    "revision": "9bf23f02018dc1bf7a5fc506735708d2"
  },
  {
    "url": "assets/js/17.2def743f.js",
    "revision": "ac3814252a13aafa585d8af7e3b45a73"
  },
  {
    "url": "assets/js/18.0240ff43.js",
    "revision": "dc3df1deb45a5c1ba952742419ffcc9f"
  },
  {
    "url": "assets/js/19.71938913.js",
    "revision": "047bb10d49e0518b5469b6e5d3983c02"
  },
  {
    "url": "assets/js/2.c2353933.js",
    "revision": "765fb082616a75dc97058f5ae08f68d2"
  },
  {
    "url": "assets/js/20.342c50f6.js",
    "revision": "d4af13edd5010b20271653d15434baab"
  },
  {
    "url": "assets/js/21.279b0c25.js",
    "revision": "4bb1cc7026d1267b4303bb039ceedc60"
  },
  {
    "url": "assets/js/22.d5c5a576.js",
    "revision": "2455192f474bdd966b39360f050cc14c"
  },
  {
    "url": "assets/js/23.c4673da3.js",
    "revision": "78942854dedab0f8d4fe0ea9b618c68e"
  },
  {
    "url": "assets/js/24.f5bce48d.js",
    "revision": "cc2dfb07f2ecb4089b1c9c69977e9ed7"
  },
  {
    "url": "assets/js/25.5794d64c.js",
    "revision": "0978e3ed795f2969370e6b3b7064c6f8"
  },
  {
    "url": "assets/js/26.91763323.js",
    "revision": "96fb68450f3060838fe250e5ad4fd9a8"
  },
  {
    "url": "assets/js/27.8399abe0.js",
    "revision": "7bcdff77afcf6685a02207ece333c8a2"
  },
  {
    "url": "assets/js/28.3cd7a686.js",
    "revision": "45fff272751471c6a6f952c19356b237"
  },
  {
    "url": "assets/js/29.444a88d6.js",
    "revision": "a4ee4ba902f9eaa47cbb5cf8e1f7fd81"
  },
  {
    "url": "assets/js/3.28dd9b32.js",
    "revision": "32f214e42c81e7f79185c647e7401418"
  },
  {
    "url": "assets/js/30.82273173.js",
    "revision": "86f7ec610ec133109f59273930eb53f1"
  },
  {
    "url": "assets/js/31.05b97c1d.js",
    "revision": "78812a9f241dd3a860fafbc428f9673b"
  },
  {
    "url": "assets/js/32.24f9cec7.js",
    "revision": "08c7e370ba5486f7b3489329c33e0c36"
  },
  {
    "url": "assets/js/33.e7061554.js",
    "revision": "16f0792fc8d4252e1eb020366c17c0bd"
  },
  {
    "url": "assets/js/34.254f9eb1.js",
    "revision": "9e289f8242ba8aaeeaf3480fb95aa46c"
  },
  {
    "url": "assets/js/35.2de00bb6.js",
    "revision": "5e805c847c9d5839b6e23fd6079ebe2e"
  },
  {
    "url": "assets/js/36.03f7163d.js",
    "revision": "55053a8c8167e456a187f7a49d4f5739"
  },
  {
    "url": "assets/js/37.89935ccd.js",
    "revision": "c2d46dc9179324cbe744d16cc9e485cf"
  },
  {
    "url": "assets/js/38.7c17b8eb.js",
    "revision": "3e4de7575e0b37a702f91dae46b26709"
  },
  {
    "url": "assets/js/39.fc712150.js",
    "revision": "0c7b6aa454721a31651c3a81f7977f02"
  },
  {
    "url": "assets/js/4.f44b1ca0.js",
    "revision": "26091d4d37ba977c1a98c8e3944c81e4"
  },
  {
    "url": "assets/js/40.dd6e5be9.js",
    "revision": "6f3c08b170d221bd8d695c3c52b9c3c4"
  },
  {
    "url": "assets/js/41.d6fada16.js",
    "revision": "b4ac4c6ae7dcb7f5839dab70b4e8a2b2"
  },
  {
    "url": "assets/js/42.add01bd8.js",
    "revision": "35a5d30b4d32b877bab67b90731c5174"
  },
  {
    "url": "assets/js/43.7a672fce.js",
    "revision": "33c1a28d3dcc0dbe8b72f0af665b8051"
  },
  {
    "url": "assets/js/44.0336915d.js",
    "revision": "1e55a231cf03bd5f6bb075a82851925f"
  },
  {
    "url": "assets/js/45.18b0db0b.js",
    "revision": "654a9d030f8b5c6dbb6cb171bac22898"
  },
  {
    "url": "assets/js/46.2a52e497.js",
    "revision": "5ab5e6c856220281d3ab1772622635a7"
  },
  {
    "url": "assets/js/47.196beeb3.js",
    "revision": "f62b1efdf447cf83712d83b1a52d8d5c"
  },
  {
    "url": "assets/js/48.a1cb8eb5.js",
    "revision": "53f5b8ec3626be1d421bb89593cdda96"
  },
  {
    "url": "assets/js/49.01e62330.js",
    "revision": "e3ba6a9e4a9538b85d293da3cd344638"
  },
  {
    "url": "assets/js/5.a51447c6.js",
    "revision": "824365dfc1e4be55878fd9be3c64e9a3"
  },
  {
    "url": "assets/js/50.be616601.js",
    "revision": "591ce1b8723c59b324eb82b8ecb3ba5a"
  },
  {
    "url": "assets/js/51.0be0ab50.js",
    "revision": "a9a94aeab3d1da68d97289c2b9a279f6"
  },
  {
    "url": "assets/js/52.5e7d748e.js",
    "revision": "96d326df915a8a836e4ae54641f18e63"
  },
  {
    "url": "assets/js/53.128b6070.js",
    "revision": "26391925f6ad3faf10056b04048e2052"
  },
  {
    "url": "assets/js/54.cf8fb743.js",
    "revision": "7586cbd24810ecdf00f0b2f441bf5913"
  },
  {
    "url": "assets/js/55.78b9ca17.js",
    "revision": "25ed71f9a6f40247e479764fd21b782f"
  },
  {
    "url": "assets/js/56.60596cbd.js",
    "revision": "56413f0148181a8d9604775d66bc3b53"
  },
  {
    "url": "assets/js/57.577471fa.js",
    "revision": "afd9e55f9e613293cd3e16e4f4ff69cb"
  },
  {
    "url": "assets/js/58.e6418249.js",
    "revision": "d734d317300c6ffe1cd387e20c94fcb5"
  },
  {
    "url": "assets/js/59.a9d58a9f.js",
    "revision": "498d5d81a1094a1ba3b6564a8a42d0d6"
  },
  {
    "url": "assets/js/6.6209d995.js",
    "revision": "12287f39c123a5a2027f1b423b3c48d0"
  },
  {
    "url": "assets/js/60.54804126.js",
    "revision": "8026fd7c4cd7b51f1b72efa979404b0c"
  },
  {
    "url": "assets/js/61.1d55dcb3.js",
    "revision": "dff3e432f775fcaa07d5a81e62e1ad3f"
  },
  {
    "url": "assets/js/62.f9b5de06.js",
    "revision": "fd9b81a135b2f7e9ca249ee0a7706970"
  },
  {
    "url": "assets/js/63.7d8ae6ef.js",
    "revision": "2da93905c737a481fc4d8e8ca60bc1cd"
  },
  {
    "url": "assets/js/64.2b29d901.js",
    "revision": "2350b0683f0b4c9ce4c4cdd624f6490e"
  },
  {
    "url": "assets/js/65.9d993778.js",
    "revision": "cc329dd8ececf6a300efb3ff972356cb"
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
    "url": "assets/js/7.17aa05ab.js",
    "revision": "3aa87ec9a68a7d4ca577fad4a31bbd7d"
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
    "url": "assets/js/app.3b7d3d1e.js",
    "revision": "fd8b3b765f69b920bc11555a97a795e1"
  },
  {
    "url": "index.html",
    "revision": "ef0900f39f9ce781c54821fda0cf7f65"
  },
  {
    "url": "nico2.jpeg",
    "revision": "644f824a1ce6855026b1de1b871ac52b"
  },
  {
    "url": "page/2/index.html",
    "revision": "ac378585f3f5bead09de874766ba1b93"
  },
  {
    "url": "page/3/index.html",
    "revision": "987654b572bda52f729976633d3e4007"
  },
  {
    "url": "page/4/index.html",
    "revision": "5c955b35d705922ce8ebfef3a958308f"
  },
  {
    "url": "page/5/index.html",
    "revision": "d0b9e2f9ad408ce7ce73943ab23ccc05"
  },
  {
    "url": "page/6/index.html",
    "revision": "44316e3e86be44bffdb0567fc47f714a"
  },
  {
    "url": "tag/css学习心得/index.html",
    "revision": "fbe92170653d6fa94ac56c0257cf5a66"
  },
  {
    "url": "tag/index.html",
    "revision": "b8f18939d386a4dd08966ea0ddff20cb"
  },
  {
    "url": "tag/Javascript学习笔记/index.html",
    "revision": "06d115ff9232e5910dbd90f407a4f5be"
  },
  {
    "url": "tag/Javascript学习笔记/page/2/index.html",
    "revision": "0534869fcffdef552887c04c5cfb32f6"
  },
  {
    "url": "tag/node.js学习笔记/index.html",
    "revision": "1de6a8852b0bce4101c83c73a3e83308"
  },
  {
    "url": "tag/node.js学习笔记/page/2/index.html",
    "revision": "77b1036d5451708100350ab6bc95ebc5"
  },
  {
    "url": "tag/vue源码学习/index.html",
    "revision": "c13985b0ba57d300acfe20f9ac797220"
  },
  {
    "url": "tag/web前端知识/index.html",
    "revision": "54055299bdc5b0848e7b3918c317cca0"
  },
  {
    "url": "tag/web前端知识/page/2/index.html",
    "revision": "6880ea3c841f425e5d96ad4380d36f77"
  },
  {
    "url": "tag/二次元/index.html",
    "revision": "defc45227c979c5315d460be5de9d1ed"
  },
  {
    "url": "tag/体会感悟/index.html",
    "revision": "4985879ca01a314ecc2310af0450b59b"
  },
  {
    "url": "tag/学习笔记/index.html",
    "revision": "7ec4e5804fb0674c168603fa7884b1bd"
  },
  {
    "url": "tag/生活琐事/index.html",
    "revision": "fdfa2f868e7f7d36ceca8096176cbf29"
  },
  {
    "url": "tag/矫情不是病/index.html",
    "revision": "6de2813f2f659d13f700ef80a6bcd27f"
  },
  {
    "url": "tag/读书笔记/index.html",
    "revision": "0ee0c557e9c6e1840144e64daddd4e9c"
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
