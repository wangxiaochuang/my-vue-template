<template>
  <el-menu>
    <side-bar-item :routes="permission_routers"></side-bar-item>
  </el-menu>
</template>
<script>
  import SideBarItem from './SideBarItem'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      SideBarItem
    },
    computed: {
      ...mapGetters([
        'permission_routers'
      ])
    }
  }
</script>
<style lang="scss">
</style>
