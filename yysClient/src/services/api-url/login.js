/*
 * @Author: appleHcwang 2372233634@qq.com
 * @Date: 2022-03-27 22:03:41
 * @LastEditors: appleHcwang 2372233634@qq.com
 * @LastEditTime: 2022-12-23 23:26:48
 * @FilePath: /yysClient/src/services/api-url/login.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '../../utils/axios-rm.js'

//登录
export function loginPhone(params) {
    return request({
        url:'/gateway/uap-service-ext-service/v1/pb/login/phone',
        method:'post',
        data: params
    })
}



