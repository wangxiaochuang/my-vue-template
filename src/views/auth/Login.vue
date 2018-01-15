<template>
  <el-form>
    <el-form-item label="用户名" prop="username">
      <el-input type="text"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
  }
</script>
<style lang="scss" scoped>
  .is-black {
    opacity: 0.5;
  }
  .card {
    width: 500px;
    margin: auto auto;
    position: relative;
    top: 100px;
  }
</style>
