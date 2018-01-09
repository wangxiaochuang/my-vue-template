<template>
  <div class="app-wrapper">
    <div class="animated app-sidebar" :class="toggleClass.slideClass">
      <side-bar></side-bar>
    </div>
    <div class="main-container" :style="toggleClass.marginLeft">
      <nav-bar></nav-bar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
  import { SideBar, NavBar, AppMain } from './components/'
  import { mapGetters } from 'vuex'

  export default {
    name: 'layout',
    components: {
      SideBar,
      NavBar,
      AppMain
    },
    computed: {
      ...mapGetters([
        'sidebar'
      ]),
      toggleClass (self) {
        let { opened } = self.sidebar
        let ret = {
          slideClass: 'slideInLeft',
          marginLeft: '210px'
        }
        if (opened) {
          ret.slideClass = 'slideInLeft'
          ret.marginLeft = 'margin-left: 210px'
        } else {
          ret.slideClass = 'slideOutLeft'
          ret.marginLeft = 'margin-left: 0'
        }
        return ret
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    .app-sidebar {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 210px;
      max-height: 100vh;
      z-index: 1024 - 1;
      /*box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);*/
      overflow-y: auto;
      overflow-x: hidden;
    }
  }
</style>
