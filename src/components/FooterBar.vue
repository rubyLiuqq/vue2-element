
<template>
  <div class="footer-bar">
    <ul>
      <li class="home">
        <router-link :to="'/'">
          <i class="iconfont icon-31shouye"></i>
          <div class="bar-text">首页</div>
        </router-link>
      </li>
      <li class="discovery">
        <router-link :to="'/search'">
          <i class="iconfont icon-chakan2"></i>
          <div class="bar-text">搜索</div>
        </router-link>
      </li>
      <li class="order">
        <router-link :to="'/order'">
          <i class="iconfont icon-quanbudingdan"></i>
          <div class="bar-text">订单</div>
        </router-link>
      </li>
      <li class="my">
        <router-link :to="'/member'">
          <i class="iconfont icon-31wode"></i>
          <div class="bar-text">我的</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {

    };
  },
});
</script>


<style lang="scss">
@import '../assets/font/iconfont.css';
@import '../scss/common.scss';

.footer-bar {
  width: 100%;
  height: rem(250);
  background: #fff;
  border-top: 1px solid #f0f0f0;
  box-shadow: 10px 10px 20px #888;
  position: fixed;
  bottom: 0;
  left: 0;

  i {
    font-size: 20px;
  }

  ul {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    li {
      text-align: center;
    }
  }

  .bar-text {
    font-size: 12px;
    color: #666;
  }
}
</style>

