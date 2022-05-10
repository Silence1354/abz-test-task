import Vue from 'vue';

import UI from '@/ui/_globals';
import Typograf from 'typograf';
import validations from '@/plugins/validations';
import router from './router';
import App from './App.vue';

import '@/assets/scss/app.scss';

Vue.config.productionTip = false;

Vue.use(UI);
Vue.use(validations);

const Tp = new Typograf({ locale: ['ru', 'en-US'] });

Vue.directive('typograph', {
  bind: (el) => {
    // eslint-disable-next-line no-param-reassign
    el.innerHTML = Tp.execute(el.innerHTML);
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
