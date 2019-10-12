<template>
  <footer class="footer">
    <p>
      友情链接：
      <NavLink
        v-for="(item, index) in links"
        :link="item.link"
        class="link"
      > {{ index === 0 ? '' : '| ' }}{{ item.text }}</NavLink>
    </p>
    <p>All content copyright <NavLink :link="$localePath" class="link">{{ $siteTitle }}</NavLink> © 2015 • All rights reserved.</p>
    <p>本站访客数1578人次</p>
  </footer>
</template>
<script>
export default {
  name: 'TheFooter',
  computed: {
    links() {
      return this.$themeConfig.footer && this.$themeConfig.footer.links || []
    }
  }
}
</script>
<style lang="stylus" scoped>
.footer
  position: relative;
  margin: 8rem 0 0 0;
  padding: 4rem 2rem;
  border-top: #EBF2F6 1px solid;
  font-size: 0.8em;
  line-height: 1.3em;
  color: #BBC7CC;
  text-align: center;
  background: #f8f8f8;
  .link 
    color #BBC7CC
    &:hover
      color $accentColor
</style>