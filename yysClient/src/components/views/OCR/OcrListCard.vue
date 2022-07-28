<template>
  <div v-touch:hold="collectOpen" class="ocr-list-card">
    <van-swipe-cell :disabled="true" class="swipe-cell">
      <!-- <div class="swipe-cell"> -->
      <div class="card-cnt">
        <div style="display: flex; align-items: center">
          <span class="cnt-name">{{ itemObj.patName }}</span>
          <span 
          v-bind:class="['cnt-state',stateStyle]">病历</span>
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
    <div v-show="showDelet" class="menu-delete" @click="dismiss">
      <span class="delete" @click="deleteClick">删除</span>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
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
      showDelet: false,
      stateStyle:"bl",
    };
  },

  created() {
   this.stateStyle = "jy";
    // this.loadCaseList();
  },
  mounted() {
    // this.stateStyle = "jc";
  },
  methods: {
    collectOpen() {
      this.showDelet = true;
    },
    clickItem() {
      alert(JSON.stringify(this.itemObj));
    },
    deleteClick() {
      this.showDelet = false;
     this.$emit("deleteCallback",this.itemObj)
    },
    dismiss(){
      this.showDelet = false;
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
  user-select: none;
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
        // background-color: rgba(77, 142, 255, 0.15);
        border-radius: 2px;
        padding: 0px 6px 0px 6px;
        font-size: 12px;
        // color: #4d8eff;
        line-height: 18px;
      }
      .cnt-date {
        padding-top: 8px;
        font-size: 14px;
        color: #666666;
      }
    }
  }
  .menu-delete {
    position: absolute;
    height: calc(100% - 16px);
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

  .bl {
    background-color: rgba(77, 142, 255, 0.15);
    color: #4d8eff;
  }
  .jc {
    background-color: rgba(0, 84, 104, 0.12);
    color: #005468;
  }
  .jy {
    background-color: rgba(255, 157, 11, 0.15);
    color: #ff9d0b;
  }
  .wb {
    background-color: rgba(0, 199, 145, 0.09);
    color: #00c791;
  }
}
</style>