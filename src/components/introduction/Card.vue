<template>
  <div class="card">
    <div class="card-title">{{title}}</div>
    <div class="card-sign">{{sign}}</div>
    <div class="card-bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
      title: 'JOLLY\'s Blog',
      sign: '勿在浮沙助高台'
    }
  }
}
</script>

<style scoped>
  .card {
    height: 120px;
    background: #111;
    color: #ddd;
    text-align: center;
  }

  .card-title {
    font-size: 20px;
    line-height: 70px;
  }
  .card-sign {
    font-size: 10px;
    line-height: 10px;
  }
  .card-bottom{
    height: 20px;
    background: #fff;
    margin-top: 20px;
  }
</style>
