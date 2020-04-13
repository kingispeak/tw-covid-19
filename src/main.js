import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import echarts from 'echarts';
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-61761333-4',
  router
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
