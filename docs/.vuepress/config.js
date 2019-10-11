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
        link: 'https://github.com/cky917'
      }
    ],
    lang: {
      noRelatedPosts: '没有文章'
    },
    pagination: {}
  }
}