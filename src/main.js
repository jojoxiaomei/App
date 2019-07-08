import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible/index.js'

Vue.use(Vant)

// axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
axios.defaults.baseURL = 'http://toutiao.course.itcast.cn'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
