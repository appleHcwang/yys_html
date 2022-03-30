<template>
  <div style="height:auto;">
          <van-nav-bar
      style="width: 100%; position: fixed; top: 0px"
      :safe-area-inset-top="true"
      title="消化内科"
      left-text="返回"
      left-arrow
      @click-left="$router.back(-1)"
    >
 
    </van-nav-bar>
    <iframe :src="this.$route.query.url" style="margin-top:44px;width:100%;height:100%;" frameborder="0" scrolling="no" id="bdIframe"></iframe>
  </div>
</template>

<script>
 
export default {
  name: "Common-iframe",
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    onChange(index) {
         
  
    },
  },

  created() {
//   alert(this.$route.query.url)

  },

  mounted(){
    /**
     * iframe-宽高自适应显示   
     */
    const oIframe = document.getElementById('bdIframe');
    const deviceWidth = document.documentElement.clientWidth;
    const deviceHeight = document.documentElement.clientHeight;
    oIframe.style.width = Number(deviceWidth) + 'px'; //数字是页面布局宽度差值
    oIframe.style.height = (Number(deviceHeight)) + 'px'; //数字是页面布局高度差
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 

</style>
