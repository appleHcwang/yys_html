import router from './components/router/index';


router.beforeEach((to, from, next) => {
   if(localStorage.getItem('userInfo')) {
    next()
   } else {

   }
    
    next()
  })

  router.afterEach((to) => {
 
  })