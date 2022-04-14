
import request from '../../utils/axios.js'

export function getDeptList(params) {
    let userId = localStorage.getItem('userId');
    return request({
      url: `/service/${userId}/getmydepts`,
      method: 'post',
      data: params
    })
  }
  