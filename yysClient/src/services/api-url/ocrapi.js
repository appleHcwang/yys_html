//2.2 请求地址
// http://ip:port/aimed/v1/lancer/overAll


import axios from 'axios';

//通用识别
export function ocrOverAll(params) {
    console.log(params,'jjjjjjjjj');
    axios({
        url: '/OCR/general',
        method: 'POST',
        data: params
      }).then(function (res) {
       console.log(res)
      }).catch(function (err) {
      console.log(err)
      })
  
}



//通用识别
export function medHistory(params) {
  console.log(params,'jjjjjjjjj');

 return new Promise((rersolve,reject) => {

  axios({
    url: '/OCR/medHistory',
    method: 'POST',
    data: params
  }).then(function (res) {
    return rersolve(res);
    }).catch(function (err) {
  console.log(err)
  })


})

  

}


// return new Promise((resolve, reject) => {
//   let axiosConfig = {
//       ...config,
//       timeout: 30 * 1000
//   }
//   axios(axiosConfig).then(response => {
//       const res = response.data
//       if (res.ec === '00068' && getToken()) {
//           return reject(res.em);
//       }
//       if (res.s === '0') {
//            Toast(res.em)
//           return  reject(res.em);
//       }
//       if (res.s === '1') {
//           return resolve(res.r);
//       }
//   }).catch(error => {
//       console.log(error)
//   })


//   axios.interceptors.request.use((config) => {

   
//       return config
//   }, (err) => {

//       return Promise.reject(err)
//   })

//   axios.interceptors.response.use((config) => {
     
//       return config
//   }, (e) => {
//          // 401 一般是token 失效，403 是没有权限
// if (e.response?.status === 401) {
//   window.location.reload();
//   return Promise.reject("rmp.vehicle.Nopermission");
// }
// if (e.response?.status === 403) {
//   return Promise.reject("rmp.vehicle.Nopermission");
// }
// if (e.response.status >= 500) {
//   return Promise.reject("serverError");
// }
// return Promise.reject(e);
//   })
// })