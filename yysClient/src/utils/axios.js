
import axios from 'axios';
import { getToken } from './auth.js'
import { Toast } from "vant";
export default async function ({ url, data = {}, method = 'post', headers = {
    "app-module-center":"X-AppCode",
    "X-AppCode":"app-module-center",
    "Authorization":'UAP ' + getToken(),
} }) {
    const commonRequestInter = function (config) {
        let currentHos =  localStorage.getItem('currentHos')
        currentHos = currentHos ? JSON.parse(currentHos) : {};
        console.log(JSON.stringify(config) + '参数')
        if (config.data.serverBaseUrl) {
            config.url = config.data.serverBaseUrl + url;
        } else {
            config.url = currentHos.serverUrl + url;
        }
        config.data = {
            appVersion: '1805',
            osInfo: 'IOS',
            skey: 'dfgS^%_DGks$$@#46q9_8avgzhEs35q2f3',
            token: getToken(),
            params: JSON.stringify(config.data.params),
            orgId: config.data.params.orgId || currentHos.hosCode,
            deviceInfo:"{\"device\" : \"iPhone\",\"os\" : \"I\",\"cpuInfo\" : \"\", \"imei\" : \"5EE490BB59AD44ECB796618059FBFCAD\",  \"osVersion\" : \"15.5\", \"simSn\" : \"\", \"uuid\" : \"494d1adb2973b7a23c37652f8a19dbb8\",  \"screenHeight\" : \"812.000000\",  \"screenWidth\" : \"375.000000\",  \"macAddress\" : \"E8:50:8B:08:BD:88\",  \"carriers\" : \"中国联通\"}",
            phoneNum: localStorage.getItem('userPhone'),
            imei: '5EE490BB59AD44ECB796618059FBFCAD',
            mac: "00c58b70fc12764aaa36f102e71fff974a9f66915a96c1bfbf663b8d74ff7cef",
            //   'params': '{"address":"无定位信息","phoneNum":"18856074994","imei":"530000000318641","userPwd":"123456","mac":"08:00:27:FF:3D:16"}',
            wgLat: '39.90719154403526',
            wgLon: '116.39108247569935',
            networkType: 'WIFI',
            stringVersion: '合肥大区',
            descDevice: "SM-G9810",
            method: "",
            orgName: config.data.params.orgName || currentHos.hosName,
            hosId: config.data.hosId ,
            patHosDateOut: "",
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



