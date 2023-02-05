import {
    createApp
} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from '@/router'

const app = createApp(App) // 生成 Vue 实例 app

app.use(router) // 引用路由实例
app.use(ElementPlus)

app.mount('#app') // 挂载到 #app