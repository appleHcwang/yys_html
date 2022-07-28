<template>
  <div class="ocr-recognize-list">
    <van-nav-bar
      :fixed="true"
      :placeholder="true"
      :safe-area-inset-top="true"
      title="OCR识别"
      left-arrow
      @click-left="$router.back(-1)"
    >
    </van-nav-bar>
    <div class="list-cnt">
      <div style="margin-bottom: 106px">
        <OcrListCard
          @deleteCallback="deleteHandle"
          v-for="item in ocrList"
          :itemObj="item"
          :key="item.id"
        ></OcrListCard>
      </div>

      <van-button
        type="primary"
        size="large"
        @click="gotoOcrRecognize"
        color="#139B7F"
        style="
          position: fixed;
          left: 16px;
          bottom: 40px;
          width: calc(100vw - 32px);
          border-radius: 8px;
        "
        >OCR识别</van-button
      >
    </div>

    <!-- <OcrListCard></OcrListCard> -->
  </div>
</template>
<script>
import OcrListCard from "@/components/views/OCR/OcrListCard.vue";
import { Toast } from "vant";
export default {
  name: "OcrRecognizeList",
  components: {
    OcrListCard,
  },

  data() {
    return {
      ocrList: [
        { patName: "张华", date: "2022-07-21 10:21", state: "1", id: "1" },
        { patName: "张丽梅", date: "2022-07-11 11:21", state: "2", id: "2" },
        { patName: "张丽梅", date: "2022-07-11 11:21", state: "2", id: "3" },
        { patName: "张丽梅", date: "2022-07-11 11:21", state: "2", id: "4" },
        { patName: "张丽梅", date: "2022-07-11 11:21", state: "2", id: "5" },
        { patName: "张丽梅", date: "2022-07-11 11:21", state: "2", id: "6" },
        { patName: "张丽梅", date: "2022-07-11 11:21", state: "2", id: "7" },
        { patName: "张丽梅", date: "2022-07-11 11:21", state: "2", id: "8" },
        { patName: "张丽梅", date: "2022-07-11 11:21", state: "2", id: "9" },
        { patName: "张丽梅", date: "2022-07-11 11:21", state: "2", id: "10" },
        { patName: "张丽梅", date: "2022-07-11 11:21", state: "2", id: "11" },
      ],
      loading: false,
      finished: false,
      pageNum: "1",
    };
  },
  created() {
    // this.loadCaseList();
  },
  mounted() {},
  methods: {
    gotoOcrRecognize() {
      this.$router.push({
        name: "OcrRecognize",
        query: {},
      });
    },
    deleteHandle(item) {
      Toast(JSON.stringify(item));
    },
  },
};
</script>
<style lang="scss">
.ocr-recognize-list {
  height: 100%;
  background-color: #f7f7f7;

  .list-cnt {
    height: calc(100vh - 46px);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
}

::v-deep .van-button-large-height {
}
</style>