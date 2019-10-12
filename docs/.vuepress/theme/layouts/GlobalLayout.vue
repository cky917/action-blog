<template>
  <div id="vuepress-theme-cky">
    <TheHeader />
    <TheMain />
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from '../components/TheHeader.vue'
import TheMain from '../components/TheMain.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
  name: 'ThemeCky',
  components: { TheHeader, TheMain, TheFooter }
}
</script>
<style lang="stylus" src="../styles/index.styl" />