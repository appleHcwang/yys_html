
import request from '../../utils/axios.js'
import $store from '@/store/index.js'
export function getPatientList(params) {
    let userId = localStorage.getItem('userId');
    return request({
      url: `/service/${userId}/getpatients3`,
      method: 'post',
      data: params
    })
  }
  
  export function getPatientInspectList(params) {
     let userId = localStorage.getItem('userId');
     let hosId = $store.state.patient.patInfo.hosId;
    return request({
      url: `/service/${userId}/gettestreportlist3/${hosId}`,
      method: 'post',
      data: params
    })
  }

  //https://yys-dev.iflyhealth.com/YYS-BusinessServer-yf/service/xzwu6/getpatients3