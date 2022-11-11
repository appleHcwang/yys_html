/*
 * @Author: appleHcwang 2372233634@qq.com
 * @Date: 2022-10-20 16:57:04
 * @LastEditors: appleHcwang 2372233634@qq.com
 * @LastEditTime: 2022-10-20 17:34:32
 * @FilePath: /yysClient/src/no-permission-interceptor.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import router from './components/router/index';


router.beforeEach((to, from, next) => {

   const isLogin =  localStorage.getItem('userInfo')?true:false
  
   if(!isLogin && to.name !== 'login') {
    next({name: 'login'})
   } else {
    alert(to.name)
    if(to.name === 'login') {
      if (to.path === '/mainTabbar') { //这就是跳出循环的关键
        next()
     } else {
         next('/mainTabbar')
     }
      
    }
      next()
   }
  })

  router.afterEach((to) => {
 
  })