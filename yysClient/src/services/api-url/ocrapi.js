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


