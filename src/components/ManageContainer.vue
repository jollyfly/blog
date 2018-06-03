<template>
  <div class="manage-container">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'ManageContainer',
  data () {
    return {}
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (!vm.$store.state.loginModule.loginState) {
        vm.$message({
          showClose: true,
          message: '请先登录',
          type: 'error'
        })
        vm.$router.push('/')
      }
    })
  }
}
</script>

<style scoped>
  .manage-container {
    padding: 30px 20px;
  }
</style>
