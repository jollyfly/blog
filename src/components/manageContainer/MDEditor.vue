<template>
  <div class="md-editor">
    <el-row>
      <el-col :span="5" :offset="4">
        <el-select v-model="value" placeholder="分类" :value="cate">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"/>
        </el-select>
      </el-col>
      <el-col :span="8">
        <el-input v-model="editorTitle" placeholder="标题"></el-input>
      </el-col>
      <el-col :span="5">
        <el-button plain>发布</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="5">
      <el-col :span="12">
        <textarea :value="input" @input="update" title="" class="md-editor-md"></textarea>
      </el-col>
      <el-col :span="12">
        <div class="md-editor-html" v-html="compliedMD" v-highlight></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Marked from 'marked'
import _ from 'lodash'

export default {
  name: 'MDEditor',
  data () {
    return {
      cate: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      input: '',
      editorTitle: ''
    }
  },
  computed: {
    compliedMD: function () {
      return Marked(this.input, {
        sanitize: true
      }
      )
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 200)
  }
}
</script>

<style scoped>
  .md-editor-html {
    height: 500px;
    margin-top: 20px;
    background: #fff;
    padding: 20px;
    box-sizing: border-box;
  }

  .md-editor-md {
    border: none;
    resize: none;
    outline: none;
    background-color: #fff;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    height: 500px;
    margin-top: 20px;
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
  }
</style>
