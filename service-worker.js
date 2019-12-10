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
    "revision": "65b806541ab367cb66b3e126e6c1a742"
  },
  {
    "url": "2015/08/18/ajax/index.html",
    "revision": "4f279057c5f48de28d5f1917e0fd9937"
  },
  {
    "url": "2015/09/23/repaiting/index.html",
    "revision": "2647565e4ae5ab0199f309a19502ee55"
  },
  {
    "url": "2015/09/30/javascript实践/index.html",
    "revision": "b38b50a555261869d0b43372da12edc5"
  },
  {
    "url": "2015/10/28/log1/index.html",
    "revision": "21ff21e3314b067c67c1ff37b54a00b3"
  },
  {
    "url": "2015/11/06/log2/index.html",
    "revision": "eb9a3ae71964902d967dc70d5ee84db3"
  },
  {
    "url": "2015/11/09/less-is-more/index.html",
    "revision": "5d16be8f7cb3dcb5dcd84af9eef22234"
  },
  {
    "url": "2015/11/20/array-methods/index.html",
    "revision": "3c5575ebe846c459cfcd61372683ad9b"
  },
  {
    "url": "2015/11/20/css-center/index.html",
    "revision": "cf15ce19079b101e5f8e290151fa5d6d"
  },
  {
    "url": "2015/11/20/not-only-if-else/index.html",
    "revision": "d1fa135955f2e7c20f8fd725b5c78741"
  },
  {
    "url": "2015/11/25/jqueryperformanceoptimization/index.html",
    "revision": "7e416e641884c1111449deb326f24357"
  },
  {
    "url": "2015/12/01/nodejsstudy1/index.html",
    "revision": "387f9e29757b2c870dd203b46194534c"
  },
  {
    "url": "2015/12/02/nodejsstudy2/index.html",
    "revision": "8ee1c00ef1d7149ce32a17d15083b557"
  },
  {
    "url": "2015/12/03/nodejsstudy3/index.html",
    "revision": "df4dda0322d4abd4859c1572002abc9d"
  },
  {
    "url": "2015/12/11/nodejsstudy4/index.html",
    "revision": "4e107c3d8cc8e21e7a0d52f9a0cb1591"
  },
  {
    "url": "2016/01/04/nodejsstudy5/index.html",
    "revision": "4ecf9848ffb32cd14a1397a4dc36ef42"
  },
  {
    "url": "2016/01/04/nodejsstudy6/index.html",
    "revision": "afbee8f099ab06e802e6a81ab6e8fa3e"
  },
  {
    "url": "2016/01/06/nodejsstudy10/index.html",
    "revision": "da90ecff435194c216243204b271d99c"
  },
  {
    "url": "2016/01/06/nodejsstudy7/index.html",
    "revision": "67cf50c60436130ac7dedf7c03eb5dfc"
  },
  {
    "url": "2016/01/06/nodejsstudy8/index.html",
    "revision": "80a9c605d9aa96c06ce83e4ee87e5b20"
  },
  {
    "url": "2016/01/06/nodejsstudy9/index.html",
    "revision": "38c09ea3a7ddb805656e2d2123cc7d5f"
  },
  {
    "url": "2016/01/07/nodejsstudy11/index.html",
    "revision": "8f8913c910ab8d42a457a17235e33368"
  },
  {
    "url": "2016/01/21/frontend-knowledge/index.html",
    "revision": "51dc5961ac9f1f168a5508b1ac354499"
  },
  {
    "url": "2016/01/27/chineseinputmethods/index.html",
    "revision": "d5590d7e4dcefeaaf536ff8d440ae4fa"
  },
  {
    "url": "2016/02/17/_2016/index.html",
    "revision": "e2bd27efe0032f1929eb533cc2e82ad0"
  },
  {
    "url": "2016/02/24/fidder/index.html",
    "revision": "404bc91ca4f1f424721b35c3fc53ea68"
  },
  {
    "url": "2016/03/25/introduction-jquery-deferred-objects/index.html",
    "revision": "346e0233486f4a07e7bf2d14a23b9cb0"
  },
  {
    "url": "2016/07/25/pm2-node-service/index.html",
    "revision": "4a271a2b8163219558c2d1e5942cd93f"
  },
  {
    "url": "2017/01/05/my2016and2017/index.html",
    "revision": "3f373cc5946f39c360e3290d7613935b"
  },
  {
    "url": "2017/01/06/mocha/index.html",
    "revision": "980aafd1bc7bec0394cb5cd3cf30608f"
  },
  {
    "url": "2017/03/27/reading-notes-of-ecmascript6/index.html",
    "revision": "ad8263d5e31a7e1eb4e8dabed77c1f22"
  },
  {
    "url": "2017/04/27/debounce-and-throttle/index.html",
    "revision": "fc7c2d9dab808c5762f2800ba849cad9"
  },
  {
    "url": "2017/06/27/wxpachong/index.html",
    "revision": "49b7b5e1b70d3bf8f93a20f39ae20a82"
  },
  {
    "url": "2017/08/27/postmessage-api/index.html",
    "revision": "640861b55be923213439093522a2ae60"
  },
  {
    "url": "2017/09/05/webpack/index.html",
    "revision": "70beb5b2a3e45a7a7876df256deb7877"
  },
  {
    "url": "2017/10/17/businesscode/index.html",
    "revision": "41b7e7b0be816e997a24e6b9812e1220"
  },
  {
    "url": "2018/02/28/typescript1/index.html",
    "revision": "6e1d08965f81a3e249c30728a266bfaf"
  },
  {
    "url": "2018/02/28/typescript2/index.html",
    "revision": "e4cf87084997b41897efaf4da15e33cf"
  },
  {
    "url": "2018/02/28/typescript3/index.html",
    "revision": "6cc8fd095d1069899d01d1e61a071c78"
  },
  {
    "url": "2018/03/08/vue-source-code-study-1/index.html",
    "revision": "3f5f637926b89cbaf48043fc45414757"
  },
  {
    "url": "2018/03/09/vue-source-code-study-2/index.html",
    "revision": "4e580715b54a0bb6f72d8453ed55687d"
  },
  {
    "url": "2018/03/19/vue-source-code-study-3/index.html",
    "revision": "87d6496154cd7d3bbd4e56188e3a98de"
  },
  {
    "url": "2018/03/21/blog-transfer/index.html",
    "revision": "0200ce04c34d13c4ba254ee595181857"
  },
  {
    "url": "2018/03/21/vue-source-code-study-4/index.html",
    "revision": "b354c50456d453790d4c6414110866f6"
  },
  {
    "url": "2018/05/07/ip-proxy-request/index.html",
    "revision": "632aac6d6311d8e3848b1df3fab31f8a"
  },
  {
    "url": "2018/12/21/electron-spider/index.html",
    "revision": "2f2e20228f1efcbda4f1bbdd9f0b4dac"
  },
  {
    "url": "2019/01/03/_2019-flag/index.html",
    "revision": "38ab046b9674712ab167cc14a14ea5d9"
  },
  {
    "url": "2019/01/10/regexp-study/index.html",
    "revision": "d40f138ba470365c09466cd388702ac9"
  },
  {
    "url": "2019/06/03/js-module-webpack/index.html",
    "revision": "6a70e14884ff6a7d375cc40d175a2356"
  },
  {
    "url": "2019/07/01/_2019-study/index.html",
    "revision": "94bf03747f1fb59f7668bdeb6c7b9837"
  },
  {
    "url": "2019/07/01/http/index.html",
    "revision": "4c2b3c0e6089983f31ade7f8f3a44ace"
  },
  {
    "url": "2019/07/02/flex-and-grid/index.html",
    "revision": "8f9c412061c976765ba8dc9229fab2cd"
  },
  {
    "url": "2019/07/30/fp-chapter4-currying/index.html",
    "revision": "69b31efe0e4c5f7d8b2aee285d981e3e"
  },
  {
    "url": "2019/07/30/fp-chapter5-compose/index.html",
    "revision": "344ff389b49c3ce903e4a310d554ec2d"
  },
  {
    "url": "2019/07/30/head-first-design-pattern/index.html",
    "revision": "1866c03681e70694172c32482ca4802e"
  },
  {
    "url": "2019/07/31/fp-chapter6/index.html",
    "revision": "41c9c0da6115642fc836685c92be94cd"
  },
  {
    "url": "2019/11/11/functional-javascript-v3-note/index.html",
    "revision": "a4e5e2001e6bfd9aabde2a17e5cbed60"
  },
  {
    "url": "2019/11/12/blog-migrate2/index.html",
    "revision": "95286a8b2436bbfbcfebce41061ae247"
  },
  {
    "url": "404.html",
    "revision": "f558552cb6089925e0f70768f638b939"
  },
  {
    "url": "about-me/index.html",
    "revision": "b4b1be6e1ef7ba50afed8657584233af"
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
    "url": "assets/js/11.4151b15a.js",
    "revision": "9823b8a8e3babb80f0e9885897198bdc"
  },
  {
    "url": "assets/js/12.189e6564.js",
    "revision": "05145a375da01029b99a3184e693311c"
  },
  {
    "url": "assets/js/13.e05485ff.js",
    "revision": "143555c653c9466195f07ba7c4280159"
  },
  {
    "url": "assets/js/14.26d68a6b.js",
    "revision": "3b061693af0ba82101d6f28dacab124d"
  },
  {
    "url": "assets/js/15.da08099c.js",
    "revision": "775c04ca4f0ecbed1a1b3a9f924b38b7"
  },
  {
    "url": "assets/js/16.7789e1c2.js",
    "revision": "9bf23f02018dc1bf7a5fc506735708d2"
  },
  {
    "url": "assets/js/17.6ae2110e.js",
    "revision": "ac3814252a13aafa585d8af7e3b45a73"
  },
  {
    "url": "assets/js/18.33046b46.js",
    "revision": "dc3df1deb45a5c1ba952742419ffcc9f"
  },
  {
    "url": "assets/js/19.c9fda2bd.js",
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
    "url": "assets/js/22.03b0ce1d.js",
    "revision": "a71025d00256c88f5cba79289383417d"
  },
  {
    "url": "assets/js/23.1c097044.js",
    "revision": "fa5b97b223e1e4d107c28ea94bdb72dd"
  },
  {
    "url": "assets/js/24.755a0d89.js",
    "revision": "faaecf67d37220f579dbe42b0ad1aecb"
  },
  {
    "url": "assets/js/25.0d1774ee.js",
    "revision": "e981ece4306b4d19c9e8fb260a47374f"
  },
  {
    "url": "assets/js/26.67d1a5a7.js",
    "revision": "04add67a8fb714604e7ef488731a2cd5"
  },
  {
    "url": "assets/js/27.0374ab8b.js",
    "revision": "3516830792f7b084ac27d5506f76979a"
  },
  {
    "url": "assets/js/28.3b8ee267.js",
    "revision": "864f1d1548179b228699a95d7dd3f700"
  },
  {
    "url": "assets/js/29.e6383299.js",
    "revision": "6c40b45589b9b51402995ee1226f28ba"
  },
  {
    "url": "assets/js/3.29691287.js",
    "revision": "d4f64809947ef5a0d8fcec00ebbe02c0"
  },
  {
    "url": "assets/js/30.03820ac7.js",
    "revision": "1101b83d8f04ec396a876b3ab8e62753"
  },
  {
    "url": "assets/js/31.0a0e16ae.js",
    "revision": "006482e201e1079d80d0d47f5559a6ed"
  },
  {
    "url": "assets/js/32.16cede74.js",
    "revision": "75bb32c2ea49c31a744458c5eaf1afdb"
  },
  {
    "url": "assets/js/33.05774556.js",
    "revision": "c58d38738b9c20342f39aec5ead5c9a6"
  },
  {
    "url": "assets/js/34.dbe7eee0.js",
    "revision": "addbd40b46f37d480aae07305e94de0b"
  },
  {
    "url": "assets/js/35.bf888eec.js",
    "revision": "7b5a02c927f79e72b2f0bc3aa9414bca"
  },
  {
    "url": "assets/js/36.2a04ae46.js",
    "revision": "ade73fcc26656c962fa11355bfc06231"
  },
  {
    "url": "assets/js/37.db2bd845.js",
    "revision": "8640c6c2a974f8df0c02d2bd05b9b8c1"
  },
  {
    "url": "assets/js/38.509c8d7e.js",
    "revision": "777d48dab30eec78c5dcc646b83a6405"
  },
  {
    "url": "assets/js/39.e46acd36.js",
    "revision": "130a52cdb3126ba61cec72e35431cc77"
  },
  {
    "url": "assets/js/4.f44b1ca0.js",
    "revision": "26091d4d37ba977c1a98c8e3944c81e4"
  },
  {
    "url": "assets/js/40.542ca90f.js",
    "revision": "5b1e0b6cfef33e0426d8c7708c1cc581"
  },
  {
    "url": "assets/js/41.35a10547.js",
    "revision": "a52f815dae8aca30e9d6dd4d7bfb5ee1"
  },
  {
    "url": "assets/js/42.3123b392.js",
    "revision": "76e46e3abfe0c54d87d4b5a67c503bb4"
  },
  {
    "url": "assets/js/43.2ba74c50.js",
    "revision": "cc4e17fc07846987c180b342f287cd33"
  },
  {
    "url": "assets/js/44.7c5157a9.js",
    "revision": "1f35380cc48e366ca60058aab92fa79b"
  },
  {
    "url": "assets/js/45.9642a5fc.js",
    "revision": "0815c5bc55d71bfc6e5fdaeccf91d378"
  },
  {
    "url": "assets/js/46.9c732223.js",
    "revision": "af30cdd10c6441436b3c39ab5f16ed18"
  },
  {
    "url": "assets/js/47.b91c78e4.js",
    "revision": "a9cdb963e13aac14e55d23e66c3a4c77"
  },
  {
    "url": "assets/js/48.8f20ffe5.js",
    "revision": "1dc059784fd31bb040c7fcfacc0f14f3"
  },
  {
    "url": "assets/js/49.6029d821.js",
    "revision": "eaf52db99f467a856d511a015c44d3f9"
  },
  {
    "url": "assets/js/5.4ce3bf93.js",
    "revision": "1b533e04038f1dcea993919af629233e"
  },
  {
    "url": "assets/js/50.9e074859.js",
    "revision": "6e6aab7f816a1ff56970d784a6b6e348"
  },
  {
    "url": "assets/js/51.234ba8cb.js",
    "revision": "3df24019a5259c09b3e747edd9215129"
  },
  {
    "url": "assets/js/52.8c15294a.js",
    "revision": "528d2e2895a599581b973f0cd095162f"
  },
  {
    "url": "assets/js/53.8d9cdd0e.js",
    "revision": "18e5e55a904308c0459680911f000163"
  },
  {
    "url": "assets/js/54.e48eec0c.js",
    "revision": "6da605742fc4e77ffe4206698fb502b9"
  },
  {
    "url": "assets/js/55.24743666.js",
    "revision": "85cfafe469f78c3cf3067c780678a33c"
  },
  {
    "url": "assets/js/56.df0e9105.js",
    "revision": "4c78f3c99daaae4f27b33f3cea3f6e47"
  },
  {
    "url": "assets/js/57.96cfe663.js",
    "revision": "d7ecceed04c4937e2b123382c57463b0"
  },
  {
    "url": "assets/js/58.51cb4487.js",
    "revision": "b39c5f8fec709af6ec56738e22ebb7f9"
  },
  {
    "url": "assets/js/59.c26646d6.js",
    "revision": "835ada0de6cb762e605758afc506af0b"
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
    "url": "assets/js/app.676d1154.js",
    "revision": "546bce64688f943757bebdd1cbd29183"
  },
  {
    "url": "index.html",
    "revision": "8ad32ae78653a3e6b864364d8d8654b9"
  },
  {
    "url": "nico2.jpeg",
    "revision": "644f824a1ce6855026b1de1b871ac52b"
  },
  {
    "url": "page/2/index.html",
    "revision": "4bbe20369b09003c94866d605c09f2e0"
  },
  {
    "url": "page/3/index.html",
    "revision": "4f3f4b0ec05f75bd100d83cbd01890cb"
  },
  {
    "url": "page/4/index.html",
    "revision": "9a1e0edbb62e8b2ea7e3f015e9355fdd"
  },
  {
    "url": "page/5/index.html",
    "revision": "4ad745e9fdc7660cd26536ff61605826"
  },
  {
    "url": "page/6/index.html",
    "revision": "62017ee8469de542f45a686dc0a2af8a"
  },
  {
    "url": "tag/css学习心得/index.html",
    "revision": "8048876b075d425dc407d6687f6aef03"
  },
  {
    "url": "tag/index.html",
    "revision": "c743cd8ef282b4957f7b2cb189f82d44"
  },
  {
    "url": "tag/Javascript学习笔记/index.html",
    "revision": "0e1b9dd38ddd6b137d6612207b02dccb"
  },
  {
    "url": "tag/Javascript学习笔记/page/2/index.html",
    "revision": "8066e0239a431850fe44057f5d79a5a7"
  },
  {
    "url": "tag/node.js学习笔记/index.html",
    "revision": "6fdae728addfb862231aa0a1f1c44997"
  },
  {
    "url": "tag/node.js学习笔记/page/2/index.html",
    "revision": "b75712aaf9076e9f31aaf0c071ed1c18"
  },
  {
    "url": "tag/vue源码学习/index.html",
    "revision": "3ad3ec6545fad286aae554d1f2fa8db7"
  },
  {
    "url": "tag/web前端知识/index.html",
    "revision": "5e64996a065b37b8054278f2a50106c5"
  },
  {
    "url": "tag/web前端知识/page/2/index.html",
    "revision": "8abc20235f7bc132879425948d309124"
  },
  {
    "url": "tag/二次元/index.html",
    "revision": "e0b099adf7e68eaadd90cce0a83f2a9d"
  },
  {
    "url": "tag/体会感悟/index.html",
    "revision": "1b6b9a28e89d318dba3f480171171453"
  },
  {
    "url": "tag/学习笔记/index.html",
    "revision": "b24c33ee462a81c0fd5e23e5b7677a0b"
  },
  {
    "url": "tag/生活琐事/index.html",
    "revision": "666f43a44c90582f465c978c39dca123"
  },
  {
    "url": "tag/矫情不是病/index.html",
    "revision": "d470bb5789469f914ee55cbc5c6c19a1"
  },
  {
    "url": "tag/读书笔记/index.html",
    "revision": "e753f1eef6e705719dc7172303005c2e"
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
