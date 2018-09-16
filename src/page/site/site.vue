<template>
  <div class="site">
    <head-top :go-back="true" :head-title="profileTitle"></head-top>
    <div class="site-input">
      <router-link :to="'/citySiteSelect'">
        <div class="site-input-left">
          <p class="site-select-text">选择城市</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" class="site-select-icon"><path fill="#333" fill-rule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"></path></svg>
        </div>
      </router-link>
      <div class="site-input-right">
        <i class="iconfont icon-search"></i>
        <input type="text" class="site-select-input" id="siteSelectInput" placeholder="请输入地址">
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import headTop from '../../components/Header.vue';

export default Vue.extend({
  name: 'member',
  data() {
    return {
      profileTitle: '选择收获地址',
    };
  },
  components: {
    headTop,
  },
});
</script>

<style lang="scss">
@import '../../scss/common.scss';
@import '../../scss/mixin.scss';

.site-input {
  @include wh(100%, rem(280));
  background: white;
  margin-top: rem(200);
  line-height: rem(280);
  display: flex;

  .site-input-left {
    display: flex;
    width: rem(250);
    padding-left: rem(80);
    align-items: center;

    .site-select-text {
      width: rem(200);
      display: inline-block;
      vertical-align: middle;
      font-size: 14px;
      color: #333;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .site-select-icon {
      @include wh(rem(30), rem(30));
    }
  }

  .site-input-right {
    position: relative;
    flex: 1;
    padding: rem(50) rem(70);
    background: white;

    .icon-search {
      position: absolute;
      left: rem(115);
      top: rem(5);
    }

    .site-select-input {
      width: 100%;
      height: 100%;
      margin-top: -22px;
      margin-left: rem(15);
      font-size: 12px;
      color: #999;
      background: #f2f2f2;
      padding: 2.4vw 4.8vw 2.4vw 6.666667vw;
      border-radius: 4px;
    }
  }
}
</style>
