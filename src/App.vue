<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'APP'
  }
</script>

<style lang="scss">
  @import "~bulma";
  @import "~animate.css";
  .animated {
    animation-duration: .377s;
  }
</style>
