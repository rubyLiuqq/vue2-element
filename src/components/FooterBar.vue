
<template>
  <div class="footer-bar">
    <ul>
      <li class="home">
        <i class="iconfont icon-31shouye"></i>
        <div class="bar-text">首页</div>
      </li>
      <li class="discovery">
        <i class="iconfont icon-chakan2"></i>
        <div class="bar-text">发现</div>
      </li>
      <li class="order">
        <i class="iconfont icon-quanbudingdan"></i>
        <div class="bar-text">订单</div>
      </li>
      <li class="my">
        <i class="iconfont icon-31wode"></i>
        <div class="bar-text">我的</div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import '../assets/font/iconfont.css';
@import '../scss/common.scss';

.footer-bar {
  width: 100%;
  height: rem(400);
  background: #fff;
  border-top: 1px solid #f0f0f0;
  box-shadow: 10px 10px 20px #888;
  position: fixed;
  bottom: 0;
  left: 0;

  i {
    font-size: 28px;
  }

  ul {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  .bar-text {
    font-size: 12px;
    color: #666;
  }
}
</style>

