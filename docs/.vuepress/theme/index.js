const removeMd = require('remove-markdown')

function getSummary(strippedContent, summaryLength) {
  if (!strippedContent) {
    return
  }
  return removeMd(
    strippedContent
      .trim()
      .replace(/^#+\s+(.*)/, '')
      .slice(0, summaryLength)
  )
}

module.exports = (themeConfig, ctx) => {
  // set default theme config
  themeConfig = Object.assign({}, {
    summary: true,
    summaryLength: 200,
    pwa: false,
  }, themeConfig)

  const defaultBlogPluginOptions = {
    globalPagination: {
      itemLayout: 'Post',
      itemPermalink: '/:year/:month/:day/:slug',
      pagination: {
        lengthPerPage: 10
      },
    },
    directories: [
      {
        id: 'post',
        dirname: '_posts',
        // layout: 'IndexPost', defaults to `Layout.vue`
        itemLayout: 'Post',
        path: '/',
        pagination: {
          sorter: (prev, next) => {
            function getTime(page) {
              return page.frontmatter.date
                ? new Date(page.frontmatter.date).getTime()
                : page.lastUpdated
            }
            const prevTime = getTime(prev)
            const nextTime = getTime(next)
            return prevTime - nextTime > 0 ? -1 : 1
          }
        },
      },
    ],
    frontmatters: [
      {
        id: "tag",
        keys: ['tag', 'tags'],
        path: '/tag/',
        layout: 'FrontMatterKey',
        scopeLayout: 'Layout'
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
    ['@vuepress/last-updated', {
      transformer: (timestamp) => timestamp
    }],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    [
      '@vuepress/blog',
      blogPluginOptions,
    ],
    [
      'vuepress-plugin-rss',
      {
        base_url: '/', // required
        site_url: 'https://blog.chenkeyi.com', // required
        copyright: '2019 Keyi Chen', // optional
        // How much articles
        count: 20
      }
    ]
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
      LAST_BUILD_TIME: Date.now(),
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
      // excerpt first
      const summaryContent = pageCtx.excerpt || pageCtx._strippedContent
      pageCtx.summary = getSummary(summaryContent, themeConfig.summaryLength)
    }
  }

  return config
}