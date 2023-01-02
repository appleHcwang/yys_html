/*
 * @Author: appleHcwang 2372233634@qq.com
 * @Date: 2022-03-18 10:30:38
 * @LastEditors: appleHcwang 2372233634@qq.com
 * @LastEditTime: 2022-11-22 15:01:07
 * @FilePath: /yysClient/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/reset.css';
import * as funcs  from './base'
import 'vant/lib/index.css';
import { vant } from '@/config/vant.config.js'
import { install } from '@/plugins/custom-install.js'
// import axios from '@/utils/axios.js';
import store from '@/store/index';
import router from './components/router/index';


import Vconsole from 'vconsole';
import './no-permission-interceptor' 
import Vue2TouchEvents from 'vue2-touch-events'

const app = createApp(App)
new Vconsole({ maxLogNumber: 1000 });//打印1000次后自动清除

// app.config.globalProperties.$http = axios
vant(app)
install(app)
app.use(store)
app.use(router)
app.use(Vue2TouchEvents)
app.config.globalProperties.$store = store
app.config.globalProperties.$func = funcs
app.mount('#app')

// import { Form } from 'vant';
// import { Field } from 'vant';
// app.use(Form);
// app.use(Field);
// axios.post('api/YYS-SSOServer/service/login2',{}).then(({ r })=>{
//   let response = JSON.parse(r);
//   console.log(response)
// })


//   "type": "module",
// window.hydra.customPlugin({
//     action: 'ConsultPlugin.getTokenInfo',
//     success: (res) => {
     
      
//     },
//     fail: (err) => {
     
//     }
//   })


  import jsnative from "./utils/jsnative"
  jsnative()


