
import request from '../../utils/axios.js'

export function getPatientList(params) {
    let userId = localStorage.getItem('userId');
    return request({
      url: `/service/${userId}/getpatients3`,
      method: 'post',
      data: params
    })
  }
  

  //https://yys-dev.iflyhealth.com/YYS-BusinessServer-yf/service/xzwu6/getpatients3