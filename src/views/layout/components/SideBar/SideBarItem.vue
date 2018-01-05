<template>
  <div>
    <template v-for="item in routes" v-if="!item.isHidden">
      <router-link v-if="item.children.length === 1 && !item.children[0].children"
                   :to="item.path + '/' + item.children[0].path">
        <el-menu-item :index="item.path + '/' + item.children[0].path">
          <span>{{item.children[0].meta.title}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else :index="item.name || item.path" :key="item.name">
        <template slot="title">
          <span>{{item.meta.title}}</span>
        </template>
        <template v-for="child in item.children" v-if="!item.isHidden">
          <side-bar-item v-if="child.children && child.children.length > 0" :prefix="item.path + '/'" :routes="[child]"></side-bar-item>
          <router-link :to="prefix + item.path + '/' + child.path">
            <el-menu-item :index="prefix + item.path + '/' + child.path">
              <span>{{child.meta.title}}</span>
            </el-menu-item>
          </router-link>
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
      },
      prefix: {
        type: String,
        default: ''
      }
    }
  }
</script>
