<template>
  <div class="dept-select">
    <van-nav-bar
      :safe-area-inset-top="true"
      title="省立医院"
      left-text="返回"
      fixed="true"
      left-arrow
      @click-left="$router.back(-1)"
    >
    </van-nav-bar>
<div class="dept-list">
 <van-index-bar :index-list="indexList" :sticky='false' :sticky-offset-top=46>
  <van-index-anchor index="1">标题1</van-index-anchor>
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  <van-index-anchor index="2">标题2</van-index-anchor>
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  <van-index-anchor index="3">标题2</van-index-anchor>
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  <van-index-anchor index="4">标题2</van-index-anchor>
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  <van-index-anchor index="5">标题2</van-index-anchor>
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  <van-index-anchor index="6">标题2</van-index-anchor>
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  
</van-index-bar>
</div>
    
  </div>
</template>

<script>
export default {
  name: "DeptSelect",
  components: {},
  data() {
    return {
       indexList: [1, 2,3,4,5,6],
      
      iActiveColor: "#ff0", //选中时文本为黄色
    };
  },
  methods: {},

  created() {},
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dept-select {
  // display: flex;
  // flex-direction: column;
  position: relative;
    .dept-list {
      top: 46px;
      width: 100%;
      position: absolute;
      height: calc(100vh - 46px);
      // overflow: auto;

    }
}

</style>
