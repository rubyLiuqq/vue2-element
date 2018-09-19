<template>
  <div class="order-item">
    <div class="order-item-body">
      <img class="body-img" :src="orderItem.restaurant_image_url" alt="">
      <div class="body-info">
        <div class="body-info-top">
          <div class="info-top-title">
            <router-link class="restaurant-name" :to="'/'">
              <span>{{orderItem.restaurant_name}}</span>
            </router-link>
            <p>{{orderItem.status_bar.title}}</p>
          </div>
          <p class="info-top-time">{{orderItem.formatted_created_at}}</p>
        </div>
        <div class="body-info-bottom">
          <p>{{orderItem.basket.group[0][0].name}}等{{orderItem.total_quantity}}件商品</p>
          <span v-text="filterPrice(orderItem.total_amount)"></span>
        </div>
      </div>
    </div>
    <div class="order-item-bottom">
      <button class="get-coin" v-if="orderItem.status_code > 0">评价得金币</button>
      <button class="one-more-order" v-else>再来一单</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'OrderItem',
  data() {
    return {

    };
  },
  props: {
    orderItem: {
      type: Object,
      default: {},
    },
  },
  mounted() {
    console.log('methods', this.orderItem);
  },
  methods: {
    filterPrice(price) {
      return price.toFixed(2);
    },
  },
});
</script>

<style lang="scss">
@import '../../scss/common.scss';
@import '../../scss/mixin.scss';

.order-item {
  @include wh(100%, rem(800));
  background-color: #fff;
  margin-top: rem(40);
  padding: rem(80);
  box-sizing: border-box;
  position: relative;

  .order-item-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 70%;
    position: relative;
    border-bottom: 1px solid #eee;

    &::after {
      content: '';
      position: absolute;
      border-bottom: 1px solid #eee;
      width: rem(80);
      right: rem(-80);
      bottom: -1px;
    }

    .body-img {
      @include wh(rem(200), rem(200));
    }

    .body-info {
      flex: 1;
      margin-left: rem(60);

      .body-info-top {

        .info-top-title, .info-top-menu {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        .info-top-title {
          margin-top: rem(40);
          position: relative;

          .restaurant-name {
            color: #333;
            font-size: 16px;
            display: inline-block;
            max-width: 70%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          p {
            font-size: 14px;
          }
        }

        .info-top-time {
          padding: rem(20) 0;
          color: #999;
        }
      }

      .body-info-bottom {
        padding: rem(50) 0;
        border-top: 1px solid #eee;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 12px;
        color: #666;
        position: relative;

        p {
          width: 60%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }

  button {
    padding: rem(20) rem(40);
    font-size: 14px;
    background: #fff;
    border-radius: 4px;
    float: right;
  }
  .get-coin {
    padding-top: rem(60);

    button {
      border: 1px solid #ff5339;
      color: #ff5339;
    }
  }

  .order-item-bottom {
    padding-top: rem(60);

    button {
      border: 1px solid #2395ff;
      color: #2395ff;
    }
  }
}

</style>
