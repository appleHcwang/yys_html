import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/reset.css';
import 'vant/lib/index.css';
// import Vant from 'vant'
// import { vant } from './config/vant.config';
// import Vant from 'vant';

import { vant } from '@/config/vant.config.js'



 
const app = createApp(App)
// app.use(Vant)
vant(app)
app.mount('#app')


// import { Form } from 'vant';
// import { Field } from 'vant';

// app.use(Form);
// app.use(Field);
