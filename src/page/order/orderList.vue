<template>
  <div class="order-list">
    <head-top :go-back="true" :head-title="headTitle"></head-top>
    <div class="order-list-content">
      <order-item v-for="(item, key) in orderListsData" :key="key" :order-item="item"></order-item>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import headTop from '../../components/Header.vue';
import OrderItem from './OrderItem.vue';
import { getOrderList } from '../../services/getData';

export default Vue.extend({
  name: 'orderList',
  data() {
    return {
      headTitle: '订单',
      orderListsData: [],
    };
  },

  mounted() {
    this.orderList();
  },

  methods: {
    orderList() {
      getOrderList().then((lists) => {
        if (lists.data.code === 200 && lists.data.success) {
          const listsData = lists.data.data.orderListData;
          this.orderListsData = listsData;
        }
      });
    },
  },

  components: {
    headTop,
    OrderItem,
  },
});
</script>
<style lang="scss">
@import '../../scss/mixin.scss';
@import '../../scss/common.scss';

.order-list-content {
  margin-top: rem(200);
  margin-bottom: rem(250);
}

</style>

