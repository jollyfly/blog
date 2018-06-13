<template>
  <div id="app">
    <v-menu></v-menu>
    <el-row>
      <el-col :span="5" :offset="2" class="col">
        <router-view name="left"></router-view>
      </el-col>
      <el-col :span="15" class="col">
        <router-view name="right"></router-view>
      </el-col>
    </el-row>
    <div class="bottom">asdfadsfadsf</div>
  </div>
</template>

<script>
import Introduction from './components/Introduction'
import BlogContainer from './components/BlogContainer'
import VMenu from './components/VMenu'

export default {
  name: 'App',
  components: {VMenu, BlogContainer, Introduction},
  created: function () {
    this.$store.dispatch('init').then(() => {
      console.log(localStorage.getItem('loginState'))
    })
  }
}
</script>

<style>
  body {
    color: #555;
    background: url("./assets/back.jpg") no-repeat;
    padding: 0;
    margin: 0;
    height: 100%;
  }
  .bottom{
    padding-top: 50px;
    padding-bottom: 20px;
    text-align: center;
  }
</style>
