<template>
  <div>
    <v-menu></v-menu>
    <el-row>
      <el-col :span="4" :offset="3" class="col">
        <introduction></introduction>
      </el-col>
      <el-col :span="13" class="col">
        <router-view></router-view>
      </el-col>
    </el-row>
    <div class="bottom">asdfadsfadsf</div>
  </div>
</template>

<script>
import Introduction from './components/Introduction'
import BlogContainer from './components/BlogContainer'
import Marked from 'marked'
import VMenu from './components/VMenu'

export default {
  name: 'App',
  components: {VMenu, BlogContainer, Introduction},
  methods: {
    marks: function () {
      console.log(Marked('# hello'))
    }
  },
  mounted: function () {
    this.marks()
  }

}
</script>

<style>
  body {
    color: #555;
    background: #f5f7f9;
    padding: 0;
    margin: 0
  }
  .bottom{
    padding-top: 50px;
    padding-bottom: 20px;
    text-align: center;
  }
</style>
