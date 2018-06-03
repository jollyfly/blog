<template>
<div class="logged-menu">
  <el-badge :value="20" class="logged-menu-badge">
    <el-button type="info" icon="el-icon-message" circle size="mini"></el-button>
  </el-badge>
  <el-dropdown size="medium" placement="bottom-start" @command="handleCommand">
    <div class="logged-menu-avatar"><img :src="loggedMenu.avatar"></div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="a">个人中心</el-dropdown-item>
      <el-dropdown-item command="manage">后台管理</el-dropdown-item>
      <el-dropdown-item command="signOut">退出登陆</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>

</div>
</template>

<script>
export default {
  name: 'LoggedMenu',
  methods: {
    handleCommand (command) {
      if (command === 'signOut') {
        this.logout()
      }
      if (command === 'manage') {
        this.$router.push('/manage/article/edit')
      }
    },
    logout: function () {
      this.$confirm('是否确定退出登陆?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.commit('logoutS')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '退出登陆失败，请稍后再试'
        })
      })
    }
  },
  props: {
    loggedMenu: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .logged-menu-avatar img{
    width: 42px;
    height: 42px;
    border-radius: 50%;
    margin-top: 9px;
    cursor: pointer;
    margin-left: 20px;
  }
  .logged-menu-badge{
    top: -15px
  }
</style>
