<template>
  <div class="Layout">
    <router-view />
    <van-tabbar v-model="active" @change="onChange" route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/patient" icon="search"
        >患者</van-tabbar-item
      >
      <van-tabbar-item replace to="/message" icon="search"
        >消息</van-tabbar-item
      >
      <van-tabbar-item replace to="/mine" icon="search">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
//
import { Toast } from "vant";
export default {
  name: "Layout",
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    onChange(index) {
         
      Toast(index);
    },
  },

  created() {},
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
