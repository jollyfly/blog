<template>
  <div class="v-menu">
    <el-menu default-active="1" router>
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">分类</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">归档</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span slot="title">标签</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-menu"></i>
        <span slot="title">关于我</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'VMenu'
}
</script>

<style scoped>

</style>
