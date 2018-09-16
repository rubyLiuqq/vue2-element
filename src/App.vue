<template>
  <div id="app">
    <router-view/>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import Vue from 'vue';
import { init } from './services/mock/mock';
import FooterBar from './components/FooterBar.vue';

export default Vue.extend({
  name: 'App',

  components: {
    FooterBar,
  },

  mounted() {
    init();
  },
});
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
