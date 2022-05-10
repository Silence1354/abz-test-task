import { ValidationObserver, ValidationProvider, extend, setInteractionMode } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

setInteractionMode('lazy');

export default {
  install(Vue) {
    Vue.component('ValidationObserver', ValidationObserver);
    Vue.component('ValidationProvider', ValidationProvider);
  },
};
