import CButton from '@/ui/CButton.vue';
import CUpload from '@/ui/CUpload.vue';
import CInput from '@/ui/CInput.vue';
import CRadioButton from '@/ui/CRadioButton.vue';
import CRadioList from '@/ui/CRadioList.vue';

const VueUI = {
  install(Vue) {
    Vue.component('CButton', CButton);
    Vue.component('CUpload', CUpload);
    Vue.component('CInput', CInput);
    Vue.component('CRadioButton', CRadioButton);
    Vue.component('CRadioList', CRadioList);
  },
};

export default VueUI;
