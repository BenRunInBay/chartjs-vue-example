/**
 * ChartJS Vue Example
 * @date 2019-06-19
 **/
import "@babel/polyfill";
import Vue from "vue";
import router from "./router";
import App from "./App.vue";

import "@/css/base.css";

const DEV_MODE = process.env.NODE_ENV !== "production";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  data: {
    devMode: DEV_MODE
  }
}).$mount("#app");
