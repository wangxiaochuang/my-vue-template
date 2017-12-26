<template>
  <section class="app-main">
    <div class="container is-fluid is-marginless app-content">
      <transition
        mode="out-in"
        enterActiveClass="fadeIn"
        leaveActiveClass="fadeOut"
        appear>
        <router-view class="animated"></router-view>
      </transition>
    </div>
  </section>
</template>

<script>
  export default {
    components: {
    }
  }
</script>
