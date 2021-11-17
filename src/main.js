import VueLocalStorage from "vue-localstorage";
import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

import VueHotkey from 'v-hotkey'
Vue.use(VueHotkey)
Vue.use(VueRouter);

Vue.use(VueLocalStorage);
Vue.use(VueLocalStorage, {name: "ls",bind: true,});
Vue.prototype.localStorage = VueLocalStorage;

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

import OCMSheet from './components/Custom/OCMSheet.vue'
Vue.component('ocm-sheet', OCMSheet)



Vue.prototype.$t = function(key,...params) {
  return this.$vuetify.lang.t(['$vuetify',key].join('.'),params)
};

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')




