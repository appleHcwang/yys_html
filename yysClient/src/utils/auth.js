
const TokenKey = 'vue_admin_template_token'
import $store from '@/store/index.js'
export function getToken() {
    return window.localStorage.getItem(TokenKey)
  }
  
export function setToken(token) {
    $store.commit('user/SET_TOKEN',token)
    return window.localStorage.setItem(TokenKey,token)
}

export function removeToken() {
    return window.localStorage.removeItem(TokenKey)
  }
  