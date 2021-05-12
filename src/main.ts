import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
// eslint-disable-next-line
import router from './router/index'
// eslint-disable-next-line
import store from './store/index'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
