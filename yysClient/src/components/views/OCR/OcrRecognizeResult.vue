<template>
  <div class="ocr-recognizerst">
    <van-nav-bar
      :fixed="true"
      :placeholder="true"
      :safe-area-inset-top="true"
      title="OCR识别"
      left-arrow
      @click-left="$router.back(-1)"
    >
    </van-nav-bar>

    <div style="background-color: #f7f7f7; height: 16px"></div>

    <div class="ocr-recognizerst-cnt">
      <van-cell>
        <template #title>
          <span class="custom-title">患者姓名</span>
          <span>李晓娟</span>
        </template>
      </van-cell>

      <van-cell center>
        <template #title>
          <span class="custom-title">识别类型</span>
          <span>李晓娟</span>
        </template>
      </van-cell>

      <van-cell center>
        <template #title>
          <div style="display: flex; align-items: center">
            <span class="custom-title">备注</span>
            <span>李晓娟</span>
          </div>
        </template>
      </van-cell>

      <div
        style="
          display: flex;
          justify-content: space-between;
          padding: 10px 16px 10px 16px;
          line-height: 36px;
        "
      >
        <span class="custom-title">转写内容</span>
        <van-button
          style="color: #139b7f; text-indent: 0.1em"
          color="white"
          @click="lookYj"
          :icon="require('@/assets/yys/lookYj.png')"
          type="primary"
          >查看原件</van-button
        >
      </div>

      <div style="text-align: center" v-html="resultStr"></div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";

export default {
  name: "OcrRecognizeResult",
  components: {},

  data() {
    return {
      fileList: [],
      showQrScanner: false,
      resultStr:'',
    };
  },
  created() {
    // this.loadCaseList();
   console.log(this.$route.params.res)
   let res = JSON.parse(this.$route.params.res)
   let data = res.data.data
  //  this.resultStr = res.data
   console.log(data)
  },
  mounted() {},
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log("889977");
      console.log(JSON.stringify(file));
    },
    startOcrRecognize() {
      this.showQrScanner = true;
      Toast("开始识别");
    },
    lookYj() {
      Toast("gg");
    },
  },
};
</script>
<style scoped lang="scss">
.ocr-recognizerst {
  &-cnt {
    height: calc(100vh - 56px);
    .custom-title {
      margin-right: 18px;
      vertical-align: middle;
      font-size: 16px;
      font-weight: 500;
      width: 64px;
    }
  }
}
::v-deep .van-cell {
  line-height: 36px;
  align-items: center;
}
span {
  vertical-align: middle;
}
</style>