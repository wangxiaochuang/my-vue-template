<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-title has-text-centered">登录</div>
    </div>
    <div class="card-content">
      <el-form :model="form" :statusIcon="true" :rules="rules" ref="form">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="form.username" autoComplete="on"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" autoComplete="on"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      var checkUserName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'))
        }
        callback()
      }
      var checkPassword = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入密码'))
        }
        callback()
      }
      return {
        form: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { validator: checkUserName, trigger: 'blur' }
          ],
          password: [
            { validator: checkPassword, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      login (ref) {
        this.$refs[ref].validate((valid) => {
          if (valid) {
            this.$auth.login()
          } else {
            return false
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .card {
    width: 500px;
    margin: auto auto;
    position: relative;
    top: 100px;
  }

</style>
