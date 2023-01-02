/*
 * @Author: appleHcwang 2372233634@qq.com
 * @Date: 2022-10-20 16:57:04
 * @LastEditors: appleHcwang 2372233634@qq.com
 * @LastEditTime: 2022-12-21 22:56:26
 * @FilePath: /yysClient/src/no-permission-interceptor.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import router from './components/router/index';

/**
 * 路由拦截
 */
router.beforeEach((to, from, next) => {
    console.log('mmm');
    console.log(to,from);
   console.log('nnn')
    const isLogin =  localStorage.getItem('userInfo')?true:false
    if(isLogin) {
       if(to.path == '/login') {
        next('mainTabbar')
       } else {
        next()
       }

    } else {
        if(to.path == '/login') {
            next()
        } else {
            next('/')
        }
      
    }
  })

  router.afterEach((to) => {
 
  })