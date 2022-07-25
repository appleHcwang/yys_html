<template>
  <div class="ocr-recognize">
    <van-nav-bar
      :fixed="true"
      :placeholder="true"
      :safe-area-inset-top="true"
      title="OCR识别"
      left-arrow
      @click-left="$router.back(-1)"
    >
    </van-nav-bar>
   <div style="background-color:#f7f7f7;height:16px"></div>
    <div class="ocr-recognize-cnt">
      <van-cell title="患者姓名" is-link value="内容" />
      <van-cell title="识别类型" is-link value="内容" />

      <van-uploader
        :after-read="afterRead"
        v-model="fileList"
        multiple
        :max-count="1"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "OcrRecognize",
  components: {},

  data() {
    return {
      fileList: [],
    };
  },
  created() {
    // this.loadCaseList();
  },
  mounted() {},
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log("889977");
      console.log(JSON.stringify(file));
    },
  },
};
</script>
<style scoped lang="scss">
.ocr-recognize {
    &-cnt {
      
      height:calc(100vh - 56px);
    }
}

::v-deep .van-cell {
  line-height: 36px;
}
</style>