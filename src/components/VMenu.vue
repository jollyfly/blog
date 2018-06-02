<template>
  <div class="v-menu">
    <el-row>
      <el-col :offset="3" :span="11">
        <el-menu default-active="1" router mode="horizontal" background-color="#fff" class="v-menu-m">
          <el-menu-item index="1">
            <i class="material-icons">home</i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">分类</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="material-icons">folder</i>
            <span slot="title">归档</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="material-icons">loyalty</i>
            <span slot="title">标签</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="material-icons">perm_identity</i>
            <span slot="title">关于我</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="4">
        <el-input placeholder="搜索" class="v-menu-search"><el-button slot="append" icon="el-icon-search"></el-button></el-input>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-button plain class="login-btn">登陆</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'VMenu'
}
</script>

<style scoped>
  .v-menu {
    font-size: 14px;
    margin: 0 auto;
    background: #fff;
    border-bottom: solid 1px #e6e6e6;
  }
  .v-menu-m{
    border-bottom: 0;
  }
  .login-btn{
    margin-top: 10px;
  }
  .v-menu-search{
    margin-top: 10px;
  }
</style>
