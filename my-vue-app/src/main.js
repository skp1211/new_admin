import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

import '../theme/index.css'

const app = createApp(App) // 生成 Vue 实例 app

app.use(router) // 引用路由实例

app.mount('#app') // 挂载到 #app