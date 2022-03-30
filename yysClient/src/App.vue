<template>
  <div id="app">
    <transition :name="transitionName">
     <router-view class="view app-view"></router-view>
    </transition>
  </div>
  <!-- <Login msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import Login from "./components/views/login.vue";

export default {
  name: "App",
  data() {
    return {
      transitionName:"slide-left",
    };
},
watch: {
    $route(to, from) {
         console.log(from); // '/'
      console.log(to); // '/next1'
      //to、from是最基本的路由对象，分别表示从(from)某个页面跳转到(to)另一个页面,to.path（表示要跳转到的路由地址），from.path同理。
      const toDepth = to.meta.index;
      const fromDepth = from.meta.index;
      this.transitionName = toDepth > fromDepth ? 'fold-left' : 'fold-right';
 
    }
},
  components: {
    Login,
  },
};
</script>

<style lang="scss">
.app-view {
  // background: yellow;
}
.fold-left-enter-active {
    animation-name: fold-left-in;
    animation-duration: .3s;
      position: absolute; // 需要注意的地方
  width: 100%; // 需要注意的地方，否则会出现页面渲染卡顿现象
  will-change: transform;
  }
  .fold-left-leave-active {
    animation-name: fold-left-out;
    animation-duration: .3s;
      position: absolute; // 需要注意的地方
  width: 100%; // 需要注意的地方，否则会出现页面渲染卡顿现象
  will-change: transform;
  }
  @keyframes fold-left-in {
    0% {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      /* visibility: visible; */
    }
    /*50% {
      transform: translate3d(50%, 0, 0);
    }*/
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fold-left-out {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    /*50% {
      transform: translate3d(-50%, 0 , 0);
    }*/
    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      /* visibility: hidden; */
    }
  }

  .fold-right-enter-active {
    animation-name: fold-right-in;
    animation-duration: .3s;
      position: absolute; // 需要注意的地方
  width: 100%; // 需要注意的地方，否则会出现页面渲染卡顿现象
  will-change: transform;
  }
  .fold-right-leave-active {
    animation-name: fold-right-out;
    animation-duration: .3s;
      position: absolute; // 需要注意的地方
  width: 100%; // 需要注意的地方，否则会出现页面渲染卡顿现象
  will-change: transform;
  }
  @keyframes fold-right-in{
    0% {
      width: 100%;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      /* visibility: visible; */
    }
    /*50% {
      transform: translate3d(50%, 0, 0);
    }*/
    100% {
      width: 100%;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fold-right-out  {
    0% {
      width: 100%;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    /*50% {
      transform: translate3d(-50%, 0 , 0);
    }*/
    100% {
      width: 100%;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      /* visibility: hidden; */
    }
  }
</style>
