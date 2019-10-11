module.exports = {
  base: '/action-blog/',
  title: 'cky',
  description: 'cky',
  head: [
    ['link', { rel: "shortcut icon", href: "/assets/favicons.png"}],
  ],
  themeConfig: {
    header: {
    },
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Tags',
        link: '/tag'
      },
      {
        text: 'About Me',
        link: '/about-me'
      },
      {
        text: 'Github',
        link: 'https://github.com/cky917/action-blog'
      }
    ],
    lang: {
      noRelatedPosts: '没有文章'
    },
    comment: {
      clientID: '9068103e415d7a74bf5a',
      clientSecret: 'a091cca6ab37509e364b2af223f220f9c53307b7',
      repo: 'action-blog',
      owner: 'cky917',
      admin: ['cky917']
    },
    pagination: {}
  }
}