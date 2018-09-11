import Vue from 'vue';
import Router from 'vue-router';
import AddSite from '../page/member/children/addSite.vue';
import Home from '../page/home/home.vue';
import Member from '../page/member/member.vue';
import MemberInfo from '../page/member/children/memberInfo.vue';
import MySite from '../page/member/children/mySite.vue';
import Order from '../page/order/order.vue';
import Login from '../page/login/login.vue';
import Search from '../page/search/search.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
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
      path: '/order',
      name: 'order',
      component: Order,
    },
  ],
});
