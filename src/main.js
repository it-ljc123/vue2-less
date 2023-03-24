import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/zh-CN";
// rem 适配
import "./utils/rem.js";
// 全局样式
import "@/styles/index.less";
import "element-ui/lib/theme-chalk/index.css";
import http from "@/utils/request";
Vue.use(ElementUI, { zIndex: 3000, locale });
// 请求挂载
Vue.prototype["$request"] = http;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
