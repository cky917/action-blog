<template>
  <div class="main-div posts-list">
    <div
      v-if="listPosts.length === 0"
      key="no-posts"
      class="no-posts"
    >
      {{ $themeConfig.lang.noRelatedPosts }}
    </div>

    <div
      v-else
      class="posts-items"
    >
      <PostsListItem :post="post"  v-for="post in listPosts" :key="post.path"/>
    </div>

    <component v-if="$pagination.length > 1 && paginationComponent" :is="paginationComponent"></component>
  </div>
</template>

<script>
import Vue from 'vue'
import { Pagination, SimplePagination } from '@vuepress/plugin-blog/lib/client/components'
import PostsListItem from './PostsListItem'

export default {
  name: 'PostsList',
  components: {
    PostsListItem,
  },
  data () {
    return {
      paginationComponent: null
    }
  },
  created() {
    this.paginationComponent = this.getPaginationComponent()
  },
  computed: {
    listPosts() {
      return this.$pagination.pages
    }
  },
  methods: {
    getPaginationComponent() {
      const n = THEME_BLOG_PAGINATION_COMPONENT
      if (n === 'Pagination') {
        return Pagination
      }
      if (n === 'SimplePagination') {
        return SimplePagination
      }
      return Vue.component(n) || Pagination
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'
.main-div
  width 80%
  margin 0 auto
  .no-posts
    color $grayTextColor
  .posts-items
    display flex
    flex-wrap wrap
    justify-content center
</style>