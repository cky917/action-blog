<template>
  <div class="post-list-item">
    <h3 class="post-title">
      <NavLink :link="post.path">{{ post.title }}</NavLink>
    </h3>
    
    <p class="post-summary">
      {{ post.frontmatter.summary || post.summary }}
    </p>
    <PostInfo :post="post" />
  </div>
</template>
<script>
import { NavigationIcon, ClockIcon } from 'vue-feather-icons'
import PostInfo from './PostInfo'

export default {
  name: 'PostListItem',
  components: {  NavigationIcon, ClockIcon, PostInfo },
  props: {
    post: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.post-list-item
  border 1px solid #eaeaea
  padding 2em 3em
  margin 10px
  word-break break-all
  transition: .3s ease all
  width 90%
  &:hover
    box-shadow: 0 4px 6px 2px #eee
  .post-title
    font-size 1.5em
    line-height 1.3
  .post-summary
    font-size 0.8em
    line-height 1.8
</style>