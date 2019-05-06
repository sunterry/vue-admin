import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import webAdmin from '@/plugins';
import { authLogin } from '@/api/user';

Vue.use(webAdmin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  async mounted() {
    const res = await authLogin({ username: 'admin', password: '123' });
    console.log(res);
    this.$store.commit('releases/getVersion');
    this.$store.commit('ua/get');
  },
}).$mount('#app');
