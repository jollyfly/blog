<template>
  <div class="profile">
    <div class="avatar"></div>
    <div class="profile-title">Jolly</div>
    <div class="profile-item">
      <div class="profile-item-i"><span class="profile-item-i-count">192</span><br>文章</div>
      <div class="profile-item-i"><span class="profile-item-i-count">192</span><br>分类</div>
      <div class="profile-item-i"><span class="profile-item-i-count">192</span><br>标签</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style scoped>
  .profile {
    margin-top: 10px;
    background: #fff;
    padding: 20px 10px;
  }
  .avatar{
    width: 120px;
    height: 120px;
    background: url("../../assets/avatar.jpg") no-repeat;
    background-size: 126px 126px;
    margin: 0 auto;
    border: 3px solid #eee
  }
  .profile-title{
    text-align: center;
    color: #222;
    font-weight: 600;
    font-size: 14px;
    line-height: 36px;
  }
  .profile-item{
    margin: 0 auto;
    width: 152px;
    height: 50px;
    text-align: center;
    font-size: 14px;
    color: #555;
  }
  .profile-item-i{
    width: 50px;
    height: 50px;
    float: left;
    line-height: 25px;
  }
  .profile-item-i:nth-child(2){
    border-left: 1px solid #000;
    border-right: 1px solid #000;
  }
  .profile-item-i-count{
    font-weight: 600;
    color: #111;
  }
</style>
