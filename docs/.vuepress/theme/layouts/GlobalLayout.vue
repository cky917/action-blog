<template>
  <div id="vuepress-theme-cky">
    <TheHeader />
    <TheMain />
  </div>
</template>
<script>
import TheHeader from '../components/TheHeader.vue'
import TheMain from '../components/TheMain.vue'

export default {
  name: 'ThemeCky',
  components: { TheHeader, TheMain }
}
</script>
<style lang="stylus" src="../styles/index.styl" />