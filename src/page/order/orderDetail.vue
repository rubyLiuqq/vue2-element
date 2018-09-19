<template>
  <div class="order-detail">

  </div>
</template>

<script>
import Vue from 'vue';
import headTop from '../../components/Header.vue';
import { guesscity, getAddressList } from '../../services/getData';

export default Vue.extend({
  name: 'orderDetail',
  data() {
    return {
      headTitle: '订单详情',
    };
  },

  components: {
    headTop,
  },
});
</script>

<style lang="scss">

</style>
