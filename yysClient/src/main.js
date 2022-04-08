import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/reset.css';
import 'vant/lib/index.css';
import { vant } from '@/config/vant.config.js'
// import axios from '@/utils/axios.js';
import store from '@/store/index';
import router from './components/router/index';

import './no-permission-interceptor' 
const app = createApp(App)
// app.config.globalProperties.$http = axios
vant(app)
app.use(store)
app.use(router)
app.mount('#app')
app.config.globalProperties.$store = store
// import { Form } from 'vant';
// import { Field } from 'vant';
// app.use(Form);
// app.use(Field);
// axios.post('api/YYS-SSOServer/service/login2',{}).then(({ r })=>{
//   let response = JSON.parse(r);
//   console.log(response)
// })


//   "type": "module",