// Vue JS
import Vue from "vue";

// Vuetify
import "@babel/polyfill";
import "@/plugins/vuetify";

// Vue Router
import router from "@/router";

// Vuex Store
import store from "@/store";

// Vue Axios
import axios from "axios";

// Applicação
import App from "@/App.vue";

// Dicas de produção
Vue.config.productionTip = false;

new Vue({
  router,
  axios,
  store,
  render: h => h(App)
}).$mount('#app')
