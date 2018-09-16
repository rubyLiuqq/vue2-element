<template>
  <div class="home">
    <head-top :head-site="true"></head-top>
    <div class="search-wrapper">
      <div role="">

      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import headTop from '../../components/Header.vue';

export default Vue.extend({
  data() {
    return {

    };
  },
  components: {
    headTop,
  },
});
</script>

