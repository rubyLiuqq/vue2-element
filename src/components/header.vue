<template>
  <div class="header" :style="{backgroundImage: backgroundColor}">
    <slot name='search'></slot>
    <div class="head_goback" v-if="goBack" @click="$router.go(-1)">
      <i class="iconfont icon-31fanhui1"></i>
    </div>
    <div class="header-title ellipsis" v-if="headTitle">
      <span class="header-title-text">{{headTitle}}</span>
    </div>
    <router-link v-if="headSite" :to="'/site'" class="head_site">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 31" class="header-site-logo">
        <path fill="#FFF" fill-rule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"></path>
      </svg>
      <span class="header-site-text">{{positionCity}}</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" class="header-site-more">
        <path fill="#FFF" fill-rule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"></path>
      </svg>
    </router-link>
    <router-link class="head_add_site" :to="'/addSite'" v-if="addSite">
      <span>{{addSiteText}}</span>
    </router-link>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'Header',
  data() {
    return {
      positionCity: '' || '正在定位...',
      addSiteText: ' 增加地址',
    };
  },
  props: {
    headSite: {
      type: Boolean,
      default: false,
    },
    addSite: {
      type: Boolean,
      default: false,
    },
    headTitle: {
      type: String,
      default: '',
    },
    goBack: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapState([
      'currentCity',
    ]),
  },
  mounted() {
    if (this.currentCity) {
      console.log(this.currentCity);
      this.positionCity = this.currentCity;
    } else {
      this.$router.push('/site');
    }
  },
});
</script>

<style lang="scss">
@import '../scss/common.scss';
@import '../scss/mixin.scss';

.header {
  @include wh(100%, rem(200));
  position: fixed;
  z-index: 2;
  padding: 0 rem(80);
  line-height: rem(200);
  top: 0;
  left: 0;
  background-image: linear-gradient(90deg,#0af,#0085ff);

  .head_goback {
    @include wh(rem(200), rem(200));
    display: inline-block;
    line-height: rem(200);
    color: #fff;

    .iconfont {
      font-size: 20px;
    }
  }

  .header-title {
    @include center;
    width: 50%;
    color: #fff;
    text-align: center;
    left: 46%;

    .header-title-text{
      @include sc(17px, #fff);
      text-align: center;
      font-weight: 500;
    }
  }

  .header-site-logo{
    @include wh(rem(70), rem(70));
  }
  .header-site-text {
    font-size: 18px;
    color: #fff;
    margin: 0 rem(10);
  }
  .header-site-more {
    @include wh(rem(40), rem(50));
  }

  .head_add_site {
    @include sc(15px, #fff);
    position: absolute;
    right: rem(250);
    font-weight: 300;
  }
}
</style>
