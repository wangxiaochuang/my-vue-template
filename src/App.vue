<template>
  <div id="app">
    <nav-bar></nav-bar>
    <app-main></app-main>
  </div>
</template>

<script>
  import { NavBar, AppMain } from './components/layout/'
  export default {
    name: 'app',
    components: {
      NavBar,
      AppMain
    }
  }
</script>
<style lang="scss">
  @import "~bulma";

  /*必须要指定其路径，不然编译出错*/
  $fa-font-path: '~font-awesome/fonts/';
  @import "~font-awesome/scss/font-awesome";
</style>
