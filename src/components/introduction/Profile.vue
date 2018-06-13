<template>
  <div class="profile">
    <div class="profile-card">
      <div class="profile-card-title">{{title}}</div>
      <div class="profile-card-sign">{{sign}}</div>
    </div>
    <div class="profile-p">
      <div class="profile-avatar"></div>
      <div class="profile-item">
        <div class="profile-item-i"><span class="profile-item-i-count">192</span><br>文章</div>
        <div class="profile-item-i"><span class="profile-item-i-count">19</span><br>分类</div>
        <div class="profile-item-i"><span class="profile-item-i-count">36</span><br>标签</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      title: 'Jolly\'s Blog',
      sign: '勿在浮沙助高台'
    }
  }
}
</script>

<style scoped>
  .profile {
    margin-top: 10px;
    background: #FFF;
  }

  .profile-card {
    background: #00a7d0;
    color: #fff;
    height: 110px;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    padding-top: 15px;
    padding-left: 10px;
  }

  .profile-card-title {
    font-size: 20px;
    line-height: 40px;
    font-family: 'Source Sans Pro', sans-serif;
  }

  .profile-card-sign {
    font-size: 10px;
    line-height: 10px;
  }
  .profile-p{
    position: relative;
    top:-45px
  }
  .profile-avatar {
    width: 90px;
    height: 90px;
    background: url("../../assets/avatar.jpg") no-repeat;
    background-size: 126px 126px;
    margin: 0 auto;
    border: 3px solid #fff;
    border-radius: 50%;

  }
  .profile-item {
    margin: 20px auto;
    width: 152px;
    height: 50px;
    text-align: center;
    font-size: 14px;
    color: #555;
  }

  .profile-item-i {
    width: 50px;
    height: 50px;
    float: left;
    line-height: 25px;
  }

  .profile-item-i:nth-child(2) {
    border-left: 1px solid #000;
    border-right: 1px solid #000;
  }

  .profile-item-i-count {
    font-weight: 600;
    color: #111;
  }
</style>
