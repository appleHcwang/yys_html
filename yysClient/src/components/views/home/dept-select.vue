<template>
  <div class="dept-select">
    <van-nav-bar
      style="width: 100%; top: 0px"
      :safe-area-inset-top="true"
      title="省立医院"
      left-text="返回"
      fixed="true"
      left-arrow
      @click-left="$router.back(-1)"
    >
    </van-nav-bar>
    <div>
      <van-index-bar>
        <van-index-anchor index="A" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />

        <van-index-anchor index="B" />
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
    display: flex;
}

</style>
