import axios from 'axios'
import store from '@/store/index.js';
let postData=  {
  'appVersion': '1413',
  'imei': '530000000318641',
  'mac': '08:00:27:FF:3D:16',
  'networkType': 'WIFI',
  'osInfo': 'ANDROID',
  'params': '{"address":"无定位信息","phoneNum":"18856074994","imei":"530000000318641","userPwd":"123456","mac":"08:00:27:FF:3D:16"}',
  'phoneNum': '18856074994',
  'skey': 'dfgS^%_DGks$$@#46q9_8avgzhEs35q2f3',
  'stringVersion': '演示版本',
  'token': 'ad1e2f82cd6a1cd45f3d73bb569ac414',
  'wgLat': '39.90719154403526',
  'wgLon': '116.39108247569935'
}
axios.interceptors.request.use(config=>{
  let $store = store.state || {};
  config.data = {...postData,...config.data};
  if($store.token)config.data.token = $store.token;
  return config;
})

axios.interceptors.response.use(response=>{
  return Promise.resolve(response.data);

})

export default axios;