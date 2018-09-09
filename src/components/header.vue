<template>
  <div class="header">
    <slot name='search'></slot>
    <div class="head_goback" v-if="goBack" @click="$router.go(-1)">
      <i class="iconfont icon-31fanhui1"></i>
    </div>
    <div class="header-title ellipsis" v-if="headTitle">
      <span class="header-title-text">{{headTitle}}</span>
    </div>
    <!-- <router-link v-if="headSite" :to="'/site'" class="head_site">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 31" class="header-site-logo">
        <path fill="#FFF" fill-rule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"></path>
      </svg>
      <span class="header-site-text">大华·华领国际</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" class="header-site-more">
        <path fill="#FFF" fill-rule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"></path>
      </svg>
    </router-link> -->
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  data() {
    return {

    };
  },
  props: {
    headSite: {
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
  },
});
</script>

<style lang="scss">
@import '../scss/common.scss';

.header {
  height: rem(200);
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(90deg,#0af,#0085ff);
}
</style>
