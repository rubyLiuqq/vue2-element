<template>
  <div class="my-site">
    <header></header>
    <ul class="sites">
      <li v-for="(site, index) in siteList" :key="index">
        <span :v-text="getGeoHsah(site.st_geohash)"></span>
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
  methods: {
    getGeoHsah(geohash) {
      axios.get(`/v2/pois/${geohash}`).then((place) => {
        return place.name;
      });
    },
  },
});
</script>

<style lang="scss">
.my-site {
  width: 100%;
  height: 100%;
  z-index: 2;
}
</style>

