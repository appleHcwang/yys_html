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
  