import request from '../../utils/axios-rm.js'

//登录
export function loginPhone(params) {
    return request({
        url:'/YYS-SSOServer/gateway/uap-service-ext-service/v1/pb/login/phone',
        method:'post',
        data: params
    })
}



