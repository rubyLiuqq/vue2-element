import axios from 'axios';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false;
// axios.defaults.baseURL = 'https://elm.cangdu.org';
axios.defaults.withCredentials = true;

export default new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
