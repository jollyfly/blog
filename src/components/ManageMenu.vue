<template>
<div class="manage-menu">
  <el-menu default-active="/manage/article/new" router>
    <el-submenu index="1">
      <template slot="title">
        <i class="material-icons">description</i>
        <span>文章管理</span>
      </template>
      <el-menu-item index="/manage/article/new"><i class="material-icons">edit</i>新增文章</el-menu-item>
      <el-menu-item index="/manage/article/edit"><i class="material-icons">build</i>管理</el-menu-item>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">分类管理</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="material-icons">loyalty</i>
      <span slot="title">标签管理</span>
    </el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  name: 'ManageMenu',
  methods: {
  }
}
</script>

<style scoped>
.manage-menu{
  background: #fff;
  margin-top: 30px;
}
</style>
