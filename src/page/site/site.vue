<template>
  <div class="site">
    <head-top :go-back="true" :head-title="profileTitle" :add-site="isLogin"></head-top>
    <div class="site-input">
      <router-link :to="'/citySiteSelect'">
        <div class="site-input-left">
          <p class="site-select-text"> {{ selectText }}</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" class="site-select-icon"><path fill="#333" fill-rule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"></path></svg>
        </div>
      </router-link>
      <div class="site-input-right">
        <i class="iconfont icon-search"></i>
        <input type="text" class="site-select-input" id="siteSelectInput" placeholder="请输入地址">
      </div>
    </div>
    <div class="site-content">
      <div class="site-position">
        <p class="site-content-text">当前地址</p>
        <div class="site-content-posi">
          <span class="current-city" @click="harvestList()">{{currentPosition}}</span>
          <span :class="{ active: isClick }" class="reset-position" @click="resetPosition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" class="reset-position-icon">
              <g fill="none" fill-rule="evenodd">
                <circle cx="7.5" cy="7.5" r="7" stroke="#2395FF"></circle>
                <path fill="#2395FF" d="M7 0h1v5H7zM7 10h1v5H7zM10 7h5v1h-5zM0 7h5v1H0z"></path>
              </g>
            </svg>
            <span>重新定位</span>
          </span>
        </div>
      </div>
      <section class="harvest-address">
        <p class="site-content-text">收获地址</p>
        <div class="harvest-lists" v-for="(item, key) of userAddress" :key="key" @click="harvestList(item)">
          <p>
            <span class="user-name">{{item.name}}</span>
            <span class="user-sex" v-if="item.sex === 1">男士</span>
            <span class="user-sex" v-else>女士</span>
            <span class="user-phone">{{item.phone}}</span>
          </p>
          <p class="user-address">{{item.address_detail}}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';
import headTop from '../../components/Header.vue';
import { guesscity, getAddressList } from '../../services/getData';

export default Vue.extend({
  name: 'member',
  data() {
    return {
      selectText: '',
      profileTitle: '选择收获地址',
      currentPosition: '未能获取地址',
      isClick: false,
      userAddress: [],
    };
  },
  computed: {
    ...mapState([
      'currentCity',
      'isLogin',
    ]),
  },

  mounted() {
    this.selectText = this.currentCity || '选择城市';
    if (this.currentCity) {
      this.currentPosition = this.currentCity;
    } else {
      this.getCurrentCity();
    }
    this.getUserSiteList();
  },

  methods: {
    ...mapActions([
      'updateCurrentCity',
    ]),

    /**
     * 获取当前定位
     */
    getCurrentCity() {
      guesscity().then((guesscityData) => {
        if (guesscityData.data.code === 200 && guesscityData.data.success) {
          const guesscityMap = guesscityData.data.data.guesscityData;
          this.currentPosition = guesscityMap.name;
          this.updateCurrentCity({
            currentCity: guesscityMap.name,
            currentStGeohash: `${guesscityMap.latitude},${guesscityMap.longitude}`,
          });
        }
      });
    },

    /**
     * 重新定位
     */
    resetPosition() {
      this.isClick = true;
      this.getCurrentCity();
    },

    /**
     * 获取用户地址
     */
    getUserSiteList() {
      getAddressList().then((address) => {
        if (address.data.code === 200 && address.data.success) {
          this.userAddress = address.data.data.addressData;
        }
      });
    },

    /**
     * 地址选择的交互事件
     */
    harvestList(item) {
      this.$router.push('/');
      if (item) {
        this.updateCurrentCity({
          currentCity: item.address_detail,
          currentStGeohash: item.st_geohash,
        });
      }
    },
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

.site-content {

  .site-content-text {
    @include wh(100%, rem(200));
    background: #f5f5f5;
    color: #666;
    line-height: rem(200);
    padding: 0 rem(80);
    font-size: 14px;
  }

  .site-content-posi {
    @include wh(100%, rem(200));
    display: flex;
    box-sizing: border-box;
    padding: 0 rem(80);
    background: white;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    font-size: 12px;
    color: #2395ff;

    .current-city {
      color: #333;
      font-size: 14px;
      font-weight: 700;
      max-width: rem(500);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .reset-position {

    .reset-position-icon {
      @include wh(rem(65), rem(65));
    }

    &:active {
      .reset-position-icon {
        transform: rotate(10turn);
      }
    }
  }

  .harvest-address {
    margin-bottom: rem(250);

    .harvest-lists {
      @include wh(100%, rem(200));
      padding: 0 rem(80);
      padding-top: rem(40);
      color: #2a2a2a;
      background-color: white;
      border-bottom: 1px solid #eee;

      .user-name {
        color: #333;
        font-size: 14px;
        font-weight: 700;
      }
      .user-sex {
        color: #666;
        font-size: 12px;
      }
      .user-phone {
        margin-left: rem(20);
        font-size: 12px;
        color: #666;
      }
      .user-address {
        color: #333;
        margin-top: rem(20);
      }
    }
  }
}
</style>
