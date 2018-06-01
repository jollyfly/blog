<template>
  <div>
    <el-row gutter="20">
      <el-col :span="5" offset="2" class="col">
        <introduction></introduction>
      </el-col>
      <el-col :span="14" class="col">
        <blog-container></blog-container>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Introduction from './components/Introduction'
import BlogContainer from './components/BlogContainer'

export default {
  name: 'App',
  components: {BlogContainer, Introduction}
}
</script>

<style>
  body {
    color: #555;
    background: #f5f7f9;
    padding: 0;
    margin: 0
  }
</style>
