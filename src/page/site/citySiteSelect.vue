<template>
  <div class="city-select">
    <head-top :go-back="true" :head-title="profileTitle"></head-top>
    <div class="city-search">
      <i class="iconfont icon-search"></i>
      <input class="city-search-input" type="text" placeholder="输入城市名、拼音或首字母查询">
    </div>
    <div class="city-site-content">
      <div class="city-site-current">
        <p class="city-tips">{{currentTips}}</p>
        <div class="city-text">{{ currentCity }}</div>
      </div>
      <div class="city-site-list" v-for="(list, key) in listData" :key="key">
        <a :name="key">
          <p class="city-tips">{{key}}</p>
        </a>
        <div class="city-text" v-for="(item, itemIndex) in list" :key="itemIndex">
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>

    <!-- 侧边选择框 -->
    <div class="city-side-select">
      <a v-for="(letter, key) in letters" :key="key" :href="'#'+letter">
        <span v-text="letter"></span>
      </a>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapActions } from 'vuex';
import headTop from '../../components/Header.vue';
import { guesscity, groupcity } from '../../services/getData';

export default Vue.extend({
  data() {
    return {
      profileTitle: '城市选择',
      currentTips: '当前定位城市',
      currentCity: '',
      listData: {},
      letters: [],
    };
  },
  components: {
    headTop,
  },
  methods: {
    ...mapActions([
      'updateCurrentCity',
    ]),
  },
  mounted() {
    guesscity().then((guesscityData) => {
      if (guesscityData.data.code === 200 && guesscityData.data.success) {
        const guesscityMap = guesscityData.data.data.guesscityData;
        this.currentCity = guesscityMap.name;
        this.updateCurrentCity({
          currentCity: guesscityMap.name,
        });
      }
    });
    groupcity().then((groupcityData) => {
      if (groupcityData.data.code === 200 && groupcityData.data.success) {
        const groupcityMap = groupcityData.data.data.groupcityData;
        this.letters = Object.keys(groupcityMap).sort();
        this.listData = groupcityMap;
      }
    });
  },
});
</script>

<style lang="scss">
@import '../../scss/common.scss';
@import '../../scss/mixin.scss';

.city-select {
  position: relative;

  .city-search {
    @include wh(100%, rem(200));
    text-align: center;
    position: relative;
    margin-top: rem(200);
    background-image: linear-gradient(90deg,#0af,#0085ff);

    .icon-search {
      position: absolute;
      left: rem(220);
      top: rem(45);
    }

    .city-search-input {
      @include wh(80%, 80%);
      border-radius: 300px;
      padding-left: rem(130);
      color: #999;
    }
  }

  .city-side-select {
    position: fixed;
    right: rem(50);
    top: rem(900);
    width: rem(80);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #999;

    span {
      width: 100%;
      height: rem(90);
      line-height: rem(90);
    }
  }

  .city-site-content {
    background: #fff;

    .city-tips {
      @include wh(100%, rem(200));
      background: #f5f5f5;
      color: #666;
      line-height: rem(200);
      border-bottom: 1px solid #ddd;
      padding: 0 rem(80);
      font-size: 14px;
    }

    .city-text {
      @include wh(100%, rem(200));
      background: white;
      line-height: rem(200);
      margin-left: rem(80);
      color: #666;
      border-bottom: 1px solid #eee;
      font-size: 14px;

      &:last-child {
        border-bottom: none;
      }

      span {
        display: inline-block;
        width: 80%;
        height: 100%;
      }
    }
  }
}
</style>
