import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

const vm = new Vue({
  render(h) { return h(App); },
});

vm.$mount('#app');
