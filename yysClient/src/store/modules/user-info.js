import {  storageByLogin, } from '@/utils/common.js';

const userInfo = {
    namespaced: true,
    state: {
        token: '',
        userInfo: {},
        name: localStorage.getItem('userName'),
        avatar: '',
        roles: []
    },

    getters:{
        token: (state) => {
            return state.token;
        }
    },

    mutations: { //同步修改 store 中的值
        SET_TOKEN(state, token) {
            state.token = token;
        },
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        },
        SET_NAME: (state, name) => {
            state.name = name;
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar;
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
             const { userInfo,token,hosConfigArr,ssoToken,uapToken,ssoData} = payload;
             return new Promise((resolve) => {
               storageByLogin(token,userInfo,hosConfigArr,ssoToken,uapToken,ssoData)
               resolve()
             })
           },
            // 登出
         LogOut({ state }) {
             return new Promise((resolve, reject) => {
            
                 
             })
           },
     
         },

}

export default userInfo
