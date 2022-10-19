import router from './components/router/index';


router.beforeEach((to, from, next) => {
   if(!localStorage.getItem('userInfo') && to.name !== 'login') {
    next({name: 'login'})
   } else {
      next()
   }
  })

  router.afterEach((to) => {
 
  })