import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VAnimateCss from 'v-animate-css';
import VueGraph from 'vue-graph';
import vuetify from './plugins/vuetify';

Vue.use(VueGraph);
Vue.use(VAnimateCss);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
