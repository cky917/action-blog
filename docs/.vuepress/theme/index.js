const removeMd = require('remove-markdown')

function getSummary(themeConfig, ctx) {
  const strippedContent = ctx._strippedContent
  if (!strippedContent) {
    return
  }
  return removeMd(
    strippedContent
      .trim()
      .replace(/^#+\s+(.*)/, '')
      .slice(0, themeConfig.summaryLength)
  ) + ' ...'
}

module.exports = (themeConfig, ctx) => {
  // set default theme config
  themeConfig = Object.assign({}, {
    summary: true,
    summaryLength: 200,
    pwa: false,
  }, themeConfig)

  const defaultBlogPluginOptions = {
    directories: [
      {
        id: 'post',
        dirname: '_posts',
        // layout: 'IndexPost', defaults to `Layout.vue`
        itemLayout: 'Post',
        path: '/',
        itemPermalink: '/:year/:month/:day/:slug',
        pagination: {
          lengthPerPage: 10,
          sorter: (prev, next) => {
            const prevTime = new Date(prev.frontmatter.date).getTime()
            const nextTime = new Date(next.frontmatter.date).getTime()
            return prevTime - nextTime > 0 ? -1 : 1
          }
        },
      }
    ],
    frontmatters: [
      {
        id: "tag",
        keys: ['tag', 'tags'],
        path: '/tag/',
        // layout: 'Tag',  defaults to `FrontmatterKey.vue`
        frontmatter: { title: 'Tag' },
        pagination: {
          lengthPerPage: 5
        }
      }
    ]
  }
  const { modifyBlogPluginOptions } = themeConfig

  const blogPluginOptions = typeof modifyBlogPluginOptions === 'function'
    ? modifyBlogPluginOptions(defaultBlogPluginOptions)
    : defaultBlogPluginOptions

  const plugins = [
    '@vuepress/plugin-nprogress',
    ['@vuepress/medium-zoom', {
      selector: '.post-content :not(a) > img',
      // medium-zoom options here
      // See: https://github.com/francoischalifour/medium-zoom#options
      options: {
        margin: 16
      }
    }],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['@vuepress/back-to-top'],
    [
      '@vuepress/blog',
      blogPluginOptions,
    ],
  ]

  if (themeConfig.pwa) {
    plugins.push(
      ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
      }],
    )
  }

  const config = {
    plugins,
    define: {
      THEME_BLOG_PAGINATION_COMPONENT: themeConfig.paginationComponent
        ? themeConfig.paginationComponent
        : 'Pagination'
    }
  }

  /**
   * Generate summary.
   */
  config.extendPageData = function (pageCtx) {
    if (themeConfig.summary) {
      pageCtx.summary = getSummary(themeConfig, pageCtx)
    }
  }

  return config
}