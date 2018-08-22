<template>
  <div class="about">
    <ul class="list">
      <li v-for="k in lists" :key="k" class="record-item">
        <div class="image-wrapper">
          <span class="record-image"></span>
        </div>
        <div class="record-content">
          <div class="record-title">未填写收货地址</div>
          <div class="record-validity">有效期至 2020-07-03</div>
        </div>
        <div class="record-state">
          <div class="state-box"><span class="btn-orange list-use gradient">使用</span></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'about',
    data() {
      return {
        lists: [1, 2, 3, 4, 5, 6, 7, 8]
      }
    }
  }
</script>

<style>
  .list {
    width: 100%;
  }
  .record-item {
    display: block;
    width: 100%;
    margin: 0;
    padding: 0 30px;
    text-align: left;
    font-size: 0;
    border-bottom: 1px solid #F2F2F2;
    cursor: pointer;
  }
  .image-wrapper {
    display: inline-block;
    width: 140px;
    height: 120px;
    margin: 40px 0;
    text-align: center;
    vertical-align: middle;
  }
  .record-image {
    display: block;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    background-image: url("../assets/logo.png");
  }
  .record-content {
    display: inline-block;
    max-width: 340px;
    max-width: -webkit-calc(100% - 280px);
    max-width: calc(100% - 280px);
    padding: 0 20px;
    vertical-align: middle;
  }
  .record-title {
    width: 100%;
    line-height: 36px;
    font-size: 30px;
    color: #333333;
  }
  .record-validity {
    width: 100%;
    margin-top: 28px;
    line-height: 30px;
    font-size: 24px;
    color: #999999;
  }
  .record-state {
    float: right;
    display: table;
    height: 20px;
  }
  .state-box {
    display: table-cell;
    width: 140px;
    text-align: center;
    vertical-align: middle;
  }
  .btn-orange {
    height: 8px;
    line-height: 8px;
    margin: 0 auto;
    padding: 0 56px;
    text-align: center;
    color: #ffffff;
    border-radius: 100px;
    font-size: 32px;
    background-color: #FF7E00;
    cursor: pointer;
  }
  .list-use {
    width: 140px;
    height: 60px;
    line-height: 60px;
    padding: 0;
    font-size: 28px;
    border-radius: 48px;
  }
  .gradient {
    background-image: linear-gradient(90deg, #FFA400 0%, #FF7E00 100%);
  }
</style>
