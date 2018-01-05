<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'APP',
    components: {
    },
    beforeMount () {
      const { body } = document
      const M_WIDTH = 1024
      const RATIO = 3
      const handler = () => {
        if (!document.hidden) {
          let rect = body.getBoundingClientRect()
          let isMobile = rect.width - RATIO < M_WIDTH
          this.toggleDevice(isMobile ? 'mobile' : 'other')
          this.toggleSidebar({
            opened: !isMobile
          })
        }
      }

      document.addEventListener('visibilitychange', handler)
      window.addEventListener('DOMContentLoaded', handler)
      window.addEventListener('resize', handler)
    },
    methods: mapActions([
      'toggleDevice',
      'toggleSidebar'
    ])

  }
</script>

<style lang="scss">
  @import "~bulma";
  $fa-font-path: '~font-awesome/fonts/';
  @import '~font-awesome/scss/font-awesome';
  @import "~animate.css";
  .animated {
    animation-duration: .377s;
  }
</style>
