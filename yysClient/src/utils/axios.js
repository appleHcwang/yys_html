
import axios from 'axios';
import { getToken } from './auth.js'
import { Toast } from "vant";
export default async function ({ url, data = {}, method = 'post', headers = {} }) {
    const commonRequestInter = function (config) {
        let currentHos = localStorage.getItem('currentHos')
        currentHos = currentHos ? JSON.parse(currentHos) : {};
        if (config.data.serverBaseUrl) {
            config.url = config.data.serverBaseUrl + url;
        } else {
            config.url = currentHos.serverUrl + url;
        }
        config.data = {
            appVersion: '1200',
            osInfo: 'ANDROID',
            skey: 'dfgS^%_DGks$$@#46q9_8avgzhEs35q2f3',
            token: getToken(),
            params: JSON.stringify(config.data.params),
            orgId: config.data.params.orgId,
            phoneNum: localStorage.getItem('userPhone'),
            imei: '530000000318641',
            mac: "00c58b70fc12764aaa36f102e71fff974a9f66915a96c1bfbf663b8d74ff7cef",
            //   'params': '{"address":"无定位信息","phoneNum":"18856074994","imei":"530000000318641","userPwd":"123456","mac":"08:00:27:FF:3D:16"}',
            wgLat: '39.90719154403526',
            wgLon: '116.39108247569935',
            networkType: 'WIFI',
            stringVersion: '演示版本',
            descDevice: "SM-G9810",
            method: "S001",
            orgName: config.data.params.orgName,
             
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
            if (res.s === '0') {
                 Toast(res.em)
                return  reject(res.em);
            }
            if (res.s === '1') {
                return resolve(res.r);
            }
        }).catch(error => {
            console.log(error)
        })
    })
}



