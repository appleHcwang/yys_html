import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/reset.css';
import 'vant/lib/index.css';
import { vant } from '@/config/vant.config.js'
import axios from '@/utils/ajax.js';
import store from '@/store/index';
 
const app = createApp(App)
app.config.globalProperties.$http = axios
// app.use(Vant)
vant(app)
app.use(store)
app.mount('#app')

app.config.globalProperties.$store = store

// import { Form } from 'vant';
// import { Field } from 'vant';

// app.use(Form);
// app.use(Field);


  

// axios.post('api/YYS-SSOServer/service/login2',{}).then(({ r })=>{

//   let response = JSON.parse(r);
//   console.log(response)
  store.commit('setToken', 'toengfdf');



// })