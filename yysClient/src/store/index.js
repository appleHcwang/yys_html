import { createStore } from 'vuex';

import {  storageByLogin, } from '@/utils/common.js';

const store = createStore({
    state: {
            token: '',
            userInfo: {},
            patInfo: {}, //当前选中的患者
            patList: [], //患者列表
            name: localStorage.getItem('userName'),
            avatar: '',
            roles: []       
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        },
        setPatInfo(state, patInfo) {

            state.patInfo = patInfo;

        },
        setPatList(state, payload) {
            state.patList.push(...payload);
            console.error(state.patList.length)

        },
        SET_NAME: (state,name) => {
            state.name = name;
        },
        SET_AVATAR: (state,avatar) => {
            state.avatar  = avatar;
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles;
        }
    },
    actions: {
   //扫码登录
    /*
    *token token
    *userName 登录人姓名
    *userPhone 登录人电话
    *HosList 患者中心医院筛选列表
    */
    LoginByQrCode({ commit },payload){
        const { userInfo,token,hosConfigArr,ssoToken,uapToken } = payload;
        return new Promise((resolve) => {
          storageByLogin(token,userInfo,hosConfigArr,ssoToken,uapToken)
          resolve()
        })
      },
       // 登出
    LogOut({ state }) {
        return new Promise((resolve, reject) => {
       
            
        })
      },

    },
    getters: {

        activePatIndex(state) {

            return state.patList.findIndex(ele => ele.hosId === state.patInfo.hosId);

        }

    },
    modules: {

    }

})


export default store