<template>
  <div class="post-info">
    <span class="info-item" v-if="postTime">{{ postTime | dateFormatter }}</span>
    <span class="info-item">阅读：1234</span>
    <span class="info-item">评论：1234</span>
    <span v-for="tag in tagList" :key="tag.key" class="item-info-tag info-item">
      <NavLink :link="tag.path">{{ tag.key }}</NavLink>
    </span>
  </div>
</template>
<script>
export default {
  name: 'PostInfo',
  props: {
    post: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    postTime() {
      return this.post.frontmatter.date || this.post.lastUpdated
    },
    tagList() {
      if (!(this.post && this.post.frontmatter && this.post.frontmatter.tags)) return []
      const tags = this.post.frontmatter.tags
      const tagsList = typeof tags === 'string' ? [tags] : tags
      const tagMap = this.$tag.map
      return tagsList.map(tag => tagMap[tag])
    }
  }
}
</script>
<style lang="stylus" scoped>
.post-info
  display flex
  color: #666;
  font-size 0.8em;
  align-items: center
  flex-wrap wrap
  .info-item
    margin: .3rem 2rem .3rem 0
  .item-info-tag
    border 1px solid #eee
    margin-right: 1rem
    border-radius 2rem
    padding 0.3rem 0.5rem
    a
      color #666
      &:hover
        color $accentColor
</style>