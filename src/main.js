import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueAnalytics from 'vue-analytics';
import jQuery from 'jquery';
import 'bootstrap';
import './utils/Axios';
import './assets/css/app.scss';
import VueLazyload from 'vue-lazyload';
import VueHead from 'vue-head';
import { CONFIG as SiteConfig } from './config';

Vue.config.productionTip = false;
Vue.prototype.$conf = SiteConfig;

Vue.use(VueHead);
Vue.use(VueLazyload);

window.$ = window.jQuery = jQuery;

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: SiteConfig.Analytics_ID,
  router
});

new Vue({
  router,
  store,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered'))
}).$mount('#app');
