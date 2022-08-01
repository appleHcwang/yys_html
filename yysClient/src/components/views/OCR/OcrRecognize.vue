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
    <div style="background-color: #f7f7f7; height: 16px"></div>
    <div class="ocr-recognize-cnt">
      <van-cell center title="患者姓名" is-link :value="patName" />
      <van-cell center title="识别类型" is-link :value="recognizeType" />

      <van-cell center title="备注">
        <van-field
          v-model="inputValue"
          autosize
          placeholder="请输入"
          input-align="right"
        />
      </van-cell>

      <div style="padding: 10px 16px 10px 16px; line-height: 36px">
        <span>转写原件</span>
      </div>

      <div style="text-align: center;position: relative;">
        <van-uploader
          :after-read="afterRead"
          v-model="fileList"
          multiple
          :max-count="1"
        >
          <div
            style="
              width: 108px;
              height: 108px;
              border-radius: 8px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              border: 1px dashed #cccccc;
            "
          >
            <img
              src="@/assets/yys/加号.png"
              style="width: 30px; height: 30px"
            />
            <span style="font-size: 16px; padding-top: 16px; color: #999999"
              >添加原件</span
            >
          </div>
        </van-uploader>

        <!-- <div v-show="showQrScanner" class="qr-scanner">
          <div class="box">
            <div class="line"></div>
            <div class="angle"></div>
          </div>
        </div> -->

        <QrScanner style="position:absolute ; top: 0px;" v-show="showQrScanner"></QrScanner>
      </div>

      <van-button
        type="primary"
        size="large"
        @click="startOcrRecognize"
        color="#139B7F"
        style="
          position: fixed;
          left: 16px;
          bottom: 40px;
          width: calc(100vw - 32px);
          border-radius: 8px;
        "
        >开始识别</van-button
      >
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import QrScanner from "@/components/views/OCR/QrScanner.vue";

export default {
  name: "OcrRecognize",
  components: {
    QrScanner,
  },

  data() {
    return {
      fileList: [],
      inputValue: "",
      patName: "请选择",
      recognizeType: "请选择",
      showQrScanner: false,
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
    startOcrRecognize() {
      this.showQrScanner = true;
      Toast("开始识别");
    },
  },
};
</script>
<style scoped lang="scss">
.ocr-recognize {
  &-cnt {
    height: calc(100vh - 56px);
  }
}

::v-deep .van-cell {
  line-height: 36px;
}

::v-deep .van-field {
  padding: 0px 20px;
}

::v-deep .van-uploader__preview-image {
  width: 193px;
  height: 273px;
}
</style>