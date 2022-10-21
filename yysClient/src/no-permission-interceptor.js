import router from './components/router/index';

router.beforeEach((to, from, next) => {
   console.log('名字')
   console.log(to.name)
   console.log('路径')
   console.log(to.path)
  const isLogin = localStorage.getItem('userInfo')?true:false
   if(isLogin) {
   //  next()
    to.path === '/' ? next('/mainTabbar') : next()
   } else {
    to.path === '/' ? next() : next('/')
   }
  })

  router.afterEach((to) => {
 
  })