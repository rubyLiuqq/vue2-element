<template>
  <div class="my-site">
    <header></header>
    <ul class="sites">
      <li v-for="(site, index) in siteList" :key="index">
        <!-- <span :v-text="getGeoHsah(site.st_geohash)"></span> -->
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
import Header from '../../../components/Header.vue';
import { getAddressList } from '../../../services/getData';

export default Vue.extend({
  data() {
    return {
      siteList: [],
    };
  },
  components: {
    Header,
  },
  mounted() {
    // 获取个人中心页编辑地址
    getAddressList().then((listData) => {
      if (listData.data.success && listData.data.code === 200) {
        this.siteList = listData.data.data.addressData;
        console.log('==========>', this.siteList);
      }
    });
  },
  // methods: {
  //   getGeoHsah(geohash) {
  //     axios.get(`/v2/pois/${geohash}`).then((place) => {
  //       return place.name;
  //     });
  //   },
  // },
});
</script>

<style lang="scss">
.my-site {
  width: 100%;
  height: 100%;
  z-index: 2;
}
</style>

