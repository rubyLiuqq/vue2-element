import Vue from 'vue';
import Router from 'vue-router';
import Home from '../page/home/home.vue';
import Member from '../page/member/member.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/member',
      name: 'member',
      component: Member,
    },
  ],
});
