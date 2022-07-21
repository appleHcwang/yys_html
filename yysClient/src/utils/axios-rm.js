import axios from 'axios';
import { getToken } from '../utils/auth.js'

export default async function ({ url, data = {}, method = 'post', headers = {} }) {
    const commonRequestInter = function (config) {
        config.data = {
            appVersion: '1200',
            osInfo: 'ANDROID',
            skey: 'dfgS^%_DGks$$@#46q9_8avgzhEs35q2f3',
            token: getToken(),
            params: config.data.params,
            orgId: config.data.hosCode,
            phoneNum: localStorage.getItem('userPhone'),
            imei: '530000000318641',
            mac: "13A22D38-A069-4220-8A14-DE7D52875B73",
            //   'params': '{"address":"无定位信息","phoneNum":"18856074994","imei":"530000000318641","userPwd":"123456","mac":"08:00:27:FF:3D:16"}',
            wgLat: '39.90719154403526',
            wgLon: '116.39108247569935',
            networkType: 'WIFI',
            stringVersion: '演示版本',
            descDevice: "SM-G9810",
            method: "S001",
        };
        return config
    }
    let config = commonRequestInter({ url, data, method, headers })
    return new Promise((resolve, reject) => {
        let axiosConfig = {
            ...config,
            timeout: 30 * 1000
        }
        axios(axiosConfig).then(response => {
            const res = response.data
            if (res.ec === '00068' && getToken()) {
                return reject(res.em);
            }
            if (res.s === '1') {
                return resolve(res.r);
            }
        }).catch(error => {
            console.log(error)

        })

        axios.interceptors.request.use((config) => {

         
            return config
        }, (err) => {

            return Promise.reject(err)
        })

        axios.interceptors.response.use((config) => {
          
            return config
        }, (e) => {
             // 401 一般是token 失效，403 是没有权限
    if (e.response?.status === 401) {
        window.location.reload();
        return Promise.reject("rmp.vehicle.Nopermission");
      }
      if (e.response?.status === 403) {
        return Promise.reject("rmp.vehicle.Nopermission");
      }
      if (e.response.status >= 500) {
        return Promise.reject("serverError");
      }
      return Promise.reject(e);
        })

    })
}



