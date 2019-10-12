module.exports = {
  base: '/action-blog/',
  title: '蹦蹬儿你个蹦蹬儿',
  description: '',
  head: [
    ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
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
    footer: {
      links: [
        { link: 'https://wangfeia.com/', text: 'WangF Blog' },
        { link: 'http://neras.github.io/', text: '有只妖怪' },
        { link: 'http://www.cnblogs.com/observernotes/', text: 'observernote' },
        { link: 'http://tangyc.top/', text: '前端唐小胖' },
        { link: 'https://blog.lyhper.com', text: 'lyhper Blog' },
        { link: 'https://haofly.net/', text: '豪翔天下' }
      ]
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