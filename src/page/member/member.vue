<template>
  <div class="member">
    <head-top :go-back="true" :head-title="profileTitle"></head-top>

    <!--  无论是否登陆，会全局拦截，跳转登陆页面 -->
    <router-link :to="'/member/memberInfo'">
      <div class="member-loading">
        <img class="unlode-avatar" src="../../assets/images/avatar.png" alt="">
        <div class="loading-content">
          <p class="user-name">{{userName}}</p>
          <p class="user-phone">
            <i class="iconfont icon-shouji"></i>
            <span class="phone-num">{{phoneNum}}</span>
          </p>
        </div>
        <i class="iconfont icon-fenxiang2-copy loading-next"></i>
      </div>
    </router-link>

    <section class="main-info">
      <div class="main-info-money">
        <div class="money-up">
          <p v-if="moneyNum">
            <span class="money-num main-info-num">{{moneyNum}}</span>
            <span class="money-unit main-info-unit">元</span>
          </p>
          <p class="info-icon info-icon-money" v-else>
            <i class="icon-money"></i>
          </p>
        </div>
        <p class="money-down">
          <span>钱包</span>
        </p>
      </div>
      <div class="main-info-red">
        <div class="red-up">
          <p v-if="redNum">
            <span class="red-num main-info-num" >{{redNum}}</span>
            <span class="red-unit main-info-unit">个</span>
          </p>
          <p class="info-icon info-icon-red" v-else>
            <i class="iconfont icon-31hongbao"></i>
          </p>
        </div>
        <p class="red-down">
          <span>红包</span>
        </p>
      </div>
      <div class="main-info-coin">
        <div class="coin-up">
          <p v-if="coinNum">
            <span class="coin-num main-info-num" >{{coinNum}}</span>
            <span class="coin-unit main-info-unit">个</span>
          </p>
           <p class="info-icon info-icon-coin" v-else>
            <i class="iconfont icon-31jifen"></i>
          </p>
        </div>
        <p class="coin-down">
          <span>金币</span>
        </p>
      </div>
    </section>

    <section>
      <router-link :to="'/mySite'" class="member-site">
        <i class="iconfont icon-dangdi"></i>
        <div class="member-right">
          <span>我的地址</span>
          <i class="iconfont icon-fenxiang2-copy loading-next"></i>
        </div>
      </router-link>
    </section>

    <section>
      <a href='https://home.m.duiba.com.cn/#/chome/index'>
        <div class="member-store">
          <i class="iconfont icon-shopping"></i>
          <div class="member-right">
            <span>金币商城</span>
            <i class="iconfont icon-fenxiang2-copy loading-next"></i>
          </div>
        </div>
      </a>
      <div class="member-gift">
        <i class="iconfont icon-liwuhuodong"></i>
        <div class="member-right">
          <span>分享拿10元现金</span>
          <i class="iconfont icon-fenxiang2-copy loading-next"></i>
        </div>
      </div>
    </section>
    <section>
      <div class="member-kefu">
        <i class="iconfont icon-service"></i>
        <div class="member-right">
          <span>我的客服</span>
          <i class="iconfont icon-fenxiang2-copy loading-next"></i>
        </div>
      </div>
      <div class="member-dianpu">
        <i class="iconfont icon-dianpu"></i>
        <div class="member-right">
          <span>下载饿了么APP</span>
          <i class="iconfont icon-fenxiang2-copy loading-next"></i>
        </div>
      </div>
    </section>
    <!-- <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition> -->
  </div>
</template>

<script>
import Vue from 'vue';
import headTop from '../../components/Header.vue';

export default Vue.extend({
  name: 'member',
  data() {
    return {
      profileTitle: '我的',
      moneyNum: '',
      redNum: 0,
      coinNum: 0,
      phoneNum: '登录后享受更多特权',
      userName: '登录/注册',
    };
  },
  components: {
    headTop,
  },
});
</script>


<style lang="scss">
@import '../../scss/common.scss';
@import '../../scss/mixin.scss';

.member-loading {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: rem(400);
  color: #fff;
  margin-top: rem(200);
  padding: rem(80);
  background-image: linear-gradient(90deg, #0af, #0085ff);

  .unlode-avatar {
    @include wh(rem(260), rem(260));
    border-radius: 50%;
  }

  .loading-content {
    margin-left: rem(60);

    .user-name {
      font-size: 20px;
    }

    .user-phone {
      margin-top: rem(20);
      font-size: 12px;
    }
  }

  .loading-next {
    position: absolute;
    right: rem(80);
  }
}

.main-info {
  @include wh(100%, rem(400));
  display: table;
  background: #fff;

  .main-info-money,
  .main-info-red,
  .main-info-coin {
    width: 33%;
    display: table-cell;
    text-align: center;
    vertical-align: middle;

    .money-up {
      overflow: hidden;
      height: 2.08333rem;
    }

    .info-icon {
      @include wh(rem(150), rem(150));
      display: inline-block;
      border-radius: 50%;
    }

    .info-icon-money {
      background-color: #ff9903;

      &::after {
        content: '¥';
        position: absolute;
        font-size: 16px;
        color: #fff;
        margin-left: -5px;
        margin-top: 6px;
      }
    }
    .info-icon-red {
      background-color: #ff5e3d;
    }
    .info-icon-coin {
      background-color: #6bc20d;
    }

    .iconfont {
      font-size: 20px;
      color: #fff;
      line-height: 33px;
    }
  }

  .main-info-money, .main-info-red {
    border-right: 1px solid #efefef;
  }

  .money-down, .red-down, .coin-down {
    margin-top: rem(30);
  }
}

.member-site,
.member-store, .member-gift,
.member-kefu, .member-dianpu {
  @include wh(100%, rem(210));
  line-height: rem(210);
  background: #fff;
  padding: 0 rem(80);
  color: #333;
  display: flex;

  i {
    font-size: 20px;
  }

  .icon-fenxiang2-copy {
    font-size: 12px;
    color: #bbb;
  }

  .icon-dangdi {
    color: #4aa5f0;
  }
  .icon-shopping {
    color: #94d94a;
  }
  .icon-liwuhuodong {
    color: #fc7b53;
  }
  .icon-service {
    color: #4aa5f0
  }
  .icon-dianpu {
    color: #3cabff;
  }
}
.member-site, .member-store, .member-kefu {
  margin-top: rem(70);
}
.member-gift, .member-dianpu {
  border-top: 1px solid #efefef;;
}
.member-right {
  display: inline-block;
  margin-left: rem(30);
  display: flex;
  justify-content: space-between;
  width: 85%;

  span {
    font-size: 15px;
  }
}
.router-slid-enter-active, .router-slid-leave-active {
  transition: all .4s;
}
.router-slid-enter, .router-slid-leave-active {
  transform: translate3d(2rem, 0, 0);
  opacity: 0;
}
</style>
