/*
 * @Author: appleHcwang 2372233634@qq.com
 * @Date: 2022-07-06 10:02:11
 * @LastEditors: appleHcwang 2372233634@qq.com
 * @LastEditTime: 2022-09-13 14:07:36
 * @FilePath: /yysClient/src/utils/common.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import store from '@/store/index';

import { setToken } from "@/utils/auth.js";

//退出登录

export function logout(rememberUserPhone) {



}


//登录存储数据
export function storageByLogin(token,userInfo,hosConfigArr,ssoToken,uapToken,ssoData){
    setToken(token);
    localStorage.setItem('uapToken',uapToken);
    localStorage.setItem('ssoToken',ssoToken);
    localStorage.setItem('userName',userInfo.userName);
    localStorage.setItem('userPhone',userInfo.userPhone);
    localStorage.setItem('userId',hosConfigArr[0].userId);
    localStorage.setItem('HosList',JSON.stringify(hosConfigArr));
    localStorage.setItem('currentHos',JSON.stringify(hosConfigArr[0]));//默认取第一个医院为当前医院。
    localStorage.setItem('ssoData',JSON.stringify(ssoData));
    localStorage.setItem('userInfo',JSON.stringify(userInfo))
    //获取角色权限 MDTadminrole(管理员) roletest(普通用户)
    // localStorage.setItem('roleName',userInfo.roleName);
    // $store.commit('SET_NAME', userInfo.userName);
  }
  