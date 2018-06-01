<template>
  <div class="v-article">
    <div class="article-title">{{article.title}}</div>
    <div class="article-info">
      <i class="el-icon-date article-info-i"> 发表于{{article.writeDate}}</i>
      <el-tag type="info" class="article-info-i">标签三</el-tag>
      <i class="el-icon-edit-outline article-info-i"> {{article.commentCount}}</i>
    </div>
    <div class="article-content" v-html="article.content"></div>
    <div class="article-read">
      <el-button plain>阅读全文</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VArticle',
  data () {
    return {
    }
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .v-article {
    padding: 90px 30px;
  }

  .article-title {
    margin: 0 auto;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    line-height: 40px;
  }
  .article-info{
    margin: 0 auto;
    font-size: 10px;
    color: #666;
    text-align: center;
  }
  .article-info-i{
    display: inline-block;
    margin-left: 15px;
  }
  .article-content{
    margin: 60px 0;
    font-size: 14px;
  }
  .article-read{
    margin: 0 auto;
    text-align: center;
  }
</style>
