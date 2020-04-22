import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueAnalytics from 'vue-analytics';
import 'bootstrap';
import axios from 'axios';
import '@/assets/css/app.scss';
import _ from 'lodash';

// import echarts from 'echarts';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.prototype.$http = axios;
Vue.prototype._ = _;

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
