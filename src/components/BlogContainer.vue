<template>
  <div class="blog-container">
    <div class="blog-container-article" v-for="(article,index) in this.articles" :key="index">
      <v-article :article="article"/>
      <hr class="blog-hr">
    </div>
  </div>
</template>

<script>
import VArticle from './blogContainer/VArticle'

export default {
  name: 'BlogContainer',
  components: {VArticle},
  data () {
    return {
      articles: [{
        title: '元旦出游',
        writeDate: '2017-12-07',
        commentCount: 28,
        content: `元旦出游计划出游流水 时间 活动 说明 2017-12-29 19:00 出发去杭州 18：00左右取车 2017-12-29 21:00 到达杭州 找好宾馆后，
        找个地方吃海鲜！ 2017-12-29 23:00 洗洗睡 可以斗地主 2017-12-30 07:30 起床 收 ...`
      }, {
        title: 'spring源码分析',
        writeDate: '2017-10-07',
        commentCount: 26,
        content: `近些年，RestFul WebService的流行，也产生一个问题，大量的API接口的文档维护、查询等比较困难。通过Swagger可以将这些API通过
        注解的方式在程序中进行维护，同时也提供了很精美的界面。网上也有很多关于Spring或者SpringBoot整合Swagger的技术文章，但总感觉通过 ...`
      }]
    }
  }
}
</script>

<style scoped>
  .blog-container{
  }
  .blog-container-article {
    background: #fff;
    margin: 10px 0 10px 23px;
    opacity: 0.9;
    border: 1px solid #f8f8f8;
  }
  .blog-hr{
    border: 0;
  }
</style>
