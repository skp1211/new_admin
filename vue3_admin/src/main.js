import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App); // 生成 Vue 实例 app
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 挂载到vue实例中
// app.prototype.$echarts = echarts; // 调用的时候就是 ：  this.$echarts

app.use(router); // 引用路由实例
app.mount("#app"); // 挂载到 #app
