<template>
  <section class="hero is-light">
    <div class="hero-head">
      <nav class="navbar">
        <div class="navbar-start">
          <div class="navbar-item" @click="toggleSidebar({opened: !sidebar.opened})">
            <span v-show="device.isMobile" class="icon">
              <i class="fa fa-bars"></i>
            </span>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            Home
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    components: {},
    computed: mapGetters({
      sidebar: 'sidebar',
      device: 'device'
    }),
    methods: {
      ...mapActions([
        'toggleSidebar'
      ])
    }
  }
</script>
<style lang="scss">
</style>
