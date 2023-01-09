import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element.js'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import axios from 'axios'
import TreeTable from 'vue-table-with-tree-grid'

// 配置请求的跟路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须 return config
  return config
})
const app = createApp(App)
app.config.globalProperties.$http = axios
app.use(TreeTable)
installElementPlus(app)
app.use(router).mount('#app')
