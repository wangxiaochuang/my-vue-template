<template>
  <el-menu
    backgroundColor="#545c64"
    textColor="#FFF"
    activeTextColor="#ffd04b"
    uniqueOpened="true"
    class="menu-sidebar">
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
  .menu-sidebar {
    height: 100%;
    color: white;
  }
</style>
