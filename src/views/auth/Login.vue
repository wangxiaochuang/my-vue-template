<template>
  <div class="hero is-black is-fullheight">
    <div class="hero-head">
      <div class="container">
        <div class="card">
          <header class="card-header">
            <div class="card-header-title">
              <div>jack 's blog</div>
            </div>
          </header>
          <div class="card-content">
            <div class="field">
              <label class="label">用户名</label>
              <div class="control has-icons-left has-icons-right">
                <input type="text" class="input" placeholder="请输入用户名">
                <span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fa fa-check"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label">密码</label>
              <div class="control has-icons-left has-icons-right">
                <input type="password" class="input" placeholder="请输入密码">
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fa fa-check"></i>
                </span>
              </div>
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">登录</a>
          </footer>
        </div>
      </div>
    </div>
  </div>
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
