import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App); // 生成 Vue 实例 app
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 全局方法
app.config.globalProperties.$filters = {
  prefix(url) {
    if (url && url.startsWith("http")) {
      // 当 url 以 http 开头时候，我们返回原路径
      return url;
    } else {
      // 否则，我们给路径添加 host，如下
      url = `http://backend-api-02.newbee.ltd${url}`;
      return url;
    }
  },
};
app.config.globalProperties.goTop = function () {
  const main = document.querySelector(".main");
  main.scrollTop = 0;
};
app.use(router); // 引用路由实例
app.mount("#app"); // 挂载到 #app
