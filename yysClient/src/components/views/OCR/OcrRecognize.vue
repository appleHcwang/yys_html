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
      <van-cell title="患者姓名" is-link value="内容" />
      <van-cell title="识别类型" is-link value="内容" />

      <div style="padding: 10px 16px 10px 16px; line-height: 36px">
        <span>转写原件</span>
      </div>

      <div style="text-align: center">
        <van-uploader
          preview-size="108px"
          :after-read="afterRead"
          v-model="fileList"
          multiple
          :max-count="1"
        />

        <div v-show="showQrScanner" class="qr-scanner">
          <div class="box">
            <div class="line"></div>
            <div class="angle"></div>
          </div>
        </div>
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

export default {
  name: "OcrRecognize",
  components: {},

  data() {
    return {
      fileList: [],
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
    //   &:after {
    //   display: block;
    // width:100%;
    // height:1px;
    // background-color:red;
    //   content: "";
    // }
    height: calc(100vh - 56px);

    .qr-scanner {
      text-align: center;
      width: 100%;
      position: relative;
    }
    .qr-scanner .box {
      width: 213px;
      height: 213px;
      position: absolute;
      left: 50%;
      top: -20px;
      transform: translate(-50%, -50%);
      overflow: hidden;
      // border: 0.1rem solid rgba(0, 255, 51, 0.2);
      /* background: url('http://resource.beige.world/imgs/gongconghao.png') no-repeat center center; */
    }

    .qr-scanner .line {
      height: calc(100% - 2px);
      width: 100%;
      background: linear-gradient(
        180deg,
        rgba(0, 255, 51, 0) 43%,
        #139b7f 211%
      );
      border-bottom: 3px solid #139b7f;
      transform: translateY(-100%);
      animation: radar-beam 2s infinite alternate;
      animation-timing-function: cubic-bezier(0.53, 0, 0.43, 0.99);
      animation-delay: 0s;
    }

    .qr-scanner .box:after,
    .qr-scanner .box:before,
    .qr-scanner .angle:after,
    .qr-scanner .angle:before {
      content: "";
      display: block;
      position: absolute;
      width: 3vw;
      height: 3vw;
      border: 0.2rem solid transparent;
    }

    .qr-scanner .box:after,
    .qr-scanner .box:before {
      top: 0;
      border-top-color: #139b7f;
    }

    .qr-scanner .angle:after,
    .qr-scanner .angle:before {
      bottom: 0;
      border-bottom-color: #139b7f;
    }

    .qr-scanner .box:before,
    .qr-scanner .angle:before {
      left: 0;
      border-left-color: #139b7f;
    }

    .qr-scanner .box:after,
    .qr-scanner .angle:after {
      right: 0;
      border-right-color: #139b7f;
    }

    @keyframes radar-beam {
      0% {
        transform: translateY(-100%);
      }

      100% {
        transform: translateY(0);
      }
    }
  }
}

::v-deep .van-cell {
  line-height: 36px;
  align-items: center;
}
</style>