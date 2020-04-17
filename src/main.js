import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import echarts from 'echarts';
import VueAnalytics from 'vue-analytics';
import 'bootstrap';
import axios from 'axios';
import '@/assets/css/app.scss';

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.prototype.$http = axios;

window.axios = axios;

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-61761333-4',
  router,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered')),
}).$mount('#app');
