<template>
  <div v-touch:hold="collectOpen" class="ocr-list-card">
    <van-swipe-cell :disabled="true" class="swipe-cell">
      <!-- <div class="swipe-cell"> -->
      <div class="card-cnt">
        <div style="display: flex; align-items: center">
          <span class="cnt-name">{{ itemObj.patName }}</span>
          <span class="cnt-state">病历</span>
        </div>
        <p class="cnt-date">{{ itemObj.date }}</p>
      </div>
      <!-- <template #right>
        <van-button
          square
          text="删除"
          type="danger"
          class="delete-button"
          @click="clickItem"
        />
      </template> -->
      <!-- </div> -->
    </van-swipe-cell>

    <div v-show="showDelet" class="menu-delete">
      <span class="delete" @click="deleteClick">删除</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "OcrListCard",
  components: {},
  props: {
    itemObj: {},
  },
  data() {
    return {
      loading: false,
      finished: false,
      pageNum: "1",
      showDelet:false,
    };
  },
  created() {
    // this.loadCaseList();
  },
  mounted() {},
  methods: {
    collectOpen() {
      this.showDelet = true
    },
    clickItem() {
      alert(JSON.stringify(this.itemObj));
    },
    deleteClick() {
      this.showDelet = false
    }
  },
};
</script>
<style lang="scss">
.ocr-list-card {
  position: relative;
  width: 100%;
  padding: 16px 16px 0px 16px;
  background-color: #f7f7f7;
  .swipe-cell {
    background-color: white;
    border-radius: 8px;
    .card-cnt {
      height: 90px;
      padding: 20px 0px 0px 20px;
      .cnt-name {
        font-weight: bold;
        color: #333333;
        line-height: 24px;
        font-size: 18px;
      }
      .cnt-state {
        margin-left: 8px;
        background-color: rgba(77, 142, 255, 0.15);
        border-radius: 2px;
        padding: 0px 6px 0px 6px;
        font-size: 12px;
        color: #4d8eff;
        line-height: 18px;
      }
      .cnt-date {
        padding-top: 8px;
        font-size: 14px;
        color: #666666;
      }
    }
    .delete-button {
      height: 100%;
    }
  }
  .menu-delete {
    position: absolute;
    height: 100%;
    top: 16px;
    left: 16px;
    right: 16px;
    background: #ffffff;
    opacity: 0.89;
    display: flex;
    align-items: center;
    .delete {
      width: 70px;
      height: 48px;
      background: #ffffff;
      border-radius: 30px;
      border: 1px solid #ff4a00;
      font-size: 16px;
      color: #ff4a00;
      line-height: 48px;
      margin: 0px auto;
      text-align: center;
    }
    // opacity: 0.89;
  }
}
</style>