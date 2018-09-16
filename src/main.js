import axios from 'axios';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
// axios.defaults.baseURL = 'https://elm.cangdu.org';
axios.defaults.withCredentials = true;

export default new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
