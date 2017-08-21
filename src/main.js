// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

import Vue from 'vue';
import VueResource from 'vue-resource';
import vuexI18n from 'vuex-i18n';
import { sync } from 'vuex-router-sync';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App';
import Translator, { languages } from './util/i18n';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.config.debug = true;

Vue.use(VueResource);
Vue.use(vuexI18n.plugin, store);
sync(store, router);
Vue.use(BootstrapVue);

for (let i = 0; i < languages.length; i += 1) {
  Vue.i18n.add(languages[i].locale, languages[i].translations);
}
Vue.i18n.set(Translator.getLocale());

/** eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App />',
});
