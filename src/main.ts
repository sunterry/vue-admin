import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import dtAdmin from '@/plugins';

Vue.use(dtAdmin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
