<template>
  <div>
    <template v-for="item in routes" >
      <router-link v-if="item.children.length === 1 && !item.children[0].children"
                   :to="item.path + '/' + item.children[0].path" :key="item.children[0].name">
        <el-menu-item :index="item.path + '/' + item.children[0].path">
          <span>{{item.children[0].meta.title}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else :index="item.name || item.path" :key="item.name">
        <template slot="title">
          <span>{{item.meta.title}}</span>
        </template>
      </el-submenu>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'SideBarItem',
    props: {
      routes: {
        type: Array
      }
    }
  }
</script>
