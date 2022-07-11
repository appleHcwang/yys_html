import { createStore } from 'vuex';
import userInfo from '../store/modules/user-info.js';
import hospitalInfo from '../store/modules/hospital-info.js';

import homeModule from '../store/modules/home.js';

import patientModule from '../store/modules/patient.js';
	
import { storageByLogin, } from '@/utils/common.js';
const store = createStore({
    // state: {
           
    //     patInfo: {}, //当前选中的患者
    //     patList: [], //患者列表
    // },
    // mutations: {
  
    //     setPatInfo(state, patInfo) {
    //         state.patInfo = patInfo;
    //     },
    //     setPatList(state, payload) {
    //         state.patList.push(...payload);
    //         console.error(state.patList.length)
    //     },
    // },
    // actions: {

    // },
    // getters: {
    //     activePatIndex(state) {
    //         return state.patList.findIndex(ele => ele.hosId === state.patInfo.hosId);

    //     }

    // },
    modules: {
        homeee: homeModule,
        user: userInfo,
        hospital: hospitalInfo,
        patient:patientModule,
      

    }

})


export default store