<template>
  <Affix :offsetTop="headHeight">
    <div
      v-show="visible"
      class="toc"
      >
      <div class="toc-title">文章目录</div>
      <div class="toc-box">
        <div class="toc-lists">
          <div class="toc-item"
            ref="chairTocItem"
            v-for="(toc, index) in tocList"
            :class="[ `toc-h${toc.level}`, { active: activeIndex === index } ]"
            :key="index">
            <a :href="`#${toc.slug}`"
              :title="toc.title">
              {{ toc.title }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </Affix>
</template>

<script>
import Affix from './Affix'
import throttle from 'lodash.throttle'

export default {
  name: 'Toc',
  components: { Affix },
  data() {
    return {
      activeIndex: 0,
      headHeight: 0
    };
  },
  mounted() {
    this.headHeight = document.querySelector('.header').offsetHeight + 20
  },
  computed: {
    visible() {
      return (
        this.$frontmatter &&
        this.$frontmatter.toc !== false &&
        !!(this.tocList.length)
      );
    },
    tocList() {
      return this.$page && this.$page.headers && this.$page.headers || []
    }
  },
  watch: {
  },
}
</script>

<style lang="stylus" scoped>
.toc
  font-size .85em
  line-height 1.5
  width: 15em;
  font-size: 0.75em;
  z-index: 100;
  border-radius: 5px;
  transition .3s ease all
  .toc-title
    text-align: left;
    font-weight: bold;
    font-size: 1.5em;
    margin-bottom 20px
  .toc-box
    position: absolute;
    height: 400px;
    width: 100%;
    overflow: auto;
  .toc-lists
    position: absolute;
    margin-bottom: 1em;
    border-left: 3px solid #ccc;
    padding-left: 0;
    margin-top: 0;
  .toc-item
    cursor: pointer;
    word-break: break-all;
    margin-bottom 10px
    a
      transition:.3s ease all;  
      color $textColor
      &:hover
        color: $accentColor;
        outline: none;
      &.active
        position: relative;
        left: -3px;
        background: #f3f3f3;
        border-left: 3px solid #3498DB;
for i in range(2, 6)
  .toc-h{i}
    padding-left: 0.5rem * (i - 1);
</style>