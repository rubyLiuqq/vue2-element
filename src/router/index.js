import Vue from 'vue';
import Router from 'vue-router';
// 增加个人收获地址页面
import AddSite from '../page/member/children/addSite.vue';
// 首页
import Home from '../page/home/home.vue';
// 个人中心
import Member from '../page/member/member.vue';
// 个人中心信息页面，换头像，改密码等
import MemberInfo from '../page/member/children/memberInfo.vue';
// 个人收获地址页面
import MySite from '../page/member/children/mySite.vue';
// 订单列表页
import OrderList from '../page/order/orderList.vue';
// 登陆页
import Login from '../page/login/login.vue';
// 商品搜索页
import Search from '../page/search/search.vue';
// 地址定位页面，搜索收获地址
import Site from '../page/site/site.vue';
// 城市选择页
import CitySiteSelect from '../page/site/citySiteSelect.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/member',
      name: 'member',
      component: Member,
      children: [{
        path: 'memberInfo',
        component: MemberInfo,
      }],
    },
    {
      path: '/mySite',
      name: 'mySite',
      component: MySite,
      children: [{
        path: 'addSite',
        component: AddSite,
      }],
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
    {
      path: '/site',
      name: 'site',
      component: Site,
    },
    {
      path: '/citySiteSelect',
      name: 'citySiteSelect',
      component: CitySiteSelect,
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: OrderList,
    },
  ],
});
