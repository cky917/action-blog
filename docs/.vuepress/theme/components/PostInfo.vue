<template>
  <div class="post-info">
    <span class="info-item" v-if="post.frontmatter.date">{{ post.frontmatter.date | dateFormatter }}</span>
    <span class="info-item">阅读：1234</span>
    <span class="info-item">评论：1234</span>
    <ul class="info-item item-info-tags">
      <li v-for="tag in tagList" :key="tag.key" class="item-info-tag">
        <NavLink :link="tag.path">{{ tag.key }}</NavLink>
      </li>
    </ul>
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
    tagList() {
      if (!this.post.frontmatter.tags) return []
      const tags = this.post.frontmatter.tags.split(',')
      const tagMap = this.$tag.map
      return tags.map(tag => tagMap[tag])
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
  .info-item
    margin-right: 20px
  .item-info-tags
    display flex
    list-style none
  .item-info-tag
    margin 0 5px
    border 1px solid #eee
    border-radius 20px
    padding 3px 10px
    a
      color #666
      &:hover
        color $accentColor
</style>