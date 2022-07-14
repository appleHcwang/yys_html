<template>
  检验
  <div class="inspect-list">
    <div class="scroll-box" style="height: 100%">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="loadInspectList"
      >
        <div
          v-for="item in inspectList"
          :key="item.id"
          class="inspect-item"
          @click="isShow = true"
        >
          <div class="info">
            <span class="name">{{ item.title }}</span>
            <span style="margin-top: 8px">
              <span class="text-icon">{{ item.rsState }}</span>
              <span class="time">{{ item.releaseDate }}</span>
            </span>
          </div>
          <van-icon
            name="arrow"
            color="#B3B3B3"
            size="40"
            style="transform: scale(0.5) translateX(10px)"
          />
        </div>
      </van-list>
    </div>

    <van-popup
      v-model="isShow"
      position="bottom"
      safe-area-inset-bottom
      round
      closeable
      style="height: 90vh"
    >
      <div class="popup_title van-hairline--bottom">测试</div>
      <div class="popup_content">
        <div style="font-size: 16px; font-weight: 500">C-反应蛋白</div>
        <div style="font-size: 14px">结果日期：2019-08-26 18:29</div>
        <div style="font-size: 14px">类型：血清</div>
        <div class="c-table van-hairline--surround">
          <div class="c-thead c-tr van-hairline--bottom">
            <div class="c-th">项目</div>
            <div class="c-th">结果</div>
            <div class="c-th">参考值</div>
            <div class="c-th">趋势</div>
          </div>
          <div v-for="item in 10" :key="item" class="c-tr van-hairline--bottom">
            <div class="c-td">天冬氨酸氨 基转移</div>
            <div class="c-td">24.5</div>
            <div class="c-td">0.81-1.45mmol/</div>
            <div class="c-td">
              <van-icon name="chart-trending-o" color="#339999" size="24" />
            </div>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import { getPatientInspectList } from "../../../../services/api-url/patient-list";

export default {
  name: "InspectList",
  components: {},
  data() {
    return {
      isShow: false,
      inspectList: [],
      loading: false,
      finished: false,
      pageNum: "1",
    };
  },
  created() {
    this.loadInspectList();
  },
  methods: {
    loadInspectList() {
      let postData = {
        params: {
          pageNum: this.pageNum,
          pageSize: "10",
          patientId:   this.$store.state.patient.patInfo.patId,
          filters: [],
          deptId: "244"
        },
        hosId: this.$store.state.patient.patInfo.hosId,
      };
      getPatientInspectList(postData)
        .then((result) => {
          console.log("666" + result);
        })
        .catch((reject) => {})
        .finally((error) => {});

      // let { r } = await this.$axios.post(`api/YYS-BusinessServer_V5/service/${ this.$store.state.userInfo.userId }/gettestreportlistcite/${ this.$store.state.patInfo.hosId }`,{
      //   params:JSON.stringify({
      //     pageNum:this.pageNum,
      //     pageSize:'10',
      //     filters:[]
      //   }),
      //   hosId:this.$store.state.patInfo.hosId,
      //   'method': 'S0004'
      // });

      // if(!r || r === '[]')return this.finished = true;

      // let result = JSON.parse(r);
      // this.inspectList.push(...result);

      // this.pageNum = String(+this.pageNum + 1);
      // this.loading = false;
    },
  },
};
</script>
<style lang="scss">
.inspect-list {
  background-color: #f2f2f2;
  height: calc(100vh - 90px);
  .inspect-item {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    height: 72px;
    padding: 16px;
    margin: 6px 0;
    background-color: #fff;
    .info {
      display: inline-flex;
      flex-direction: column;
      .name {
        font-size: 16px;
        line-height: 16px;
        font-weight: 600;
      }
      .text-icon {
        color: #339999;
        font-size: 8px;
        border: 1px solid currentColor;
        border-radius: 2px;
      }
      .time {
        margin-left: 10px;
        font-size: 14px;
        line-height: 14px;
        color: #999;
      }
    }
    &:active {
      background-color: #f2f2f2;
    }
  }
  .popup_title {
    height: 45px;
    line-height: 45px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
  }
  .popup_content {
    padding: 20px;
    .c-table {
      position: relative;
      margin-top: 8px;
      max-height: 65vh;
      overflow: auto;
      .c-thead {
        position: sticky;
        top: 0;
        z-index: 10;
        .c-th {
          height: 30px;
          padding-left: 10px;
          line-height: 30px;
        }
      }
      .c-td {
        height: 48px;
        display: inline-flex;
        align-items: center;
        padding-left: 10px;
      }
      .c-tr {
        display: flex;
        background-color: rgba(248, 248, 248, 1);
        border-bottom: 1px solid #ccc;
        div {
          box-sizing: border-box;
        }
        div:first-child,
        div:nth-child(2) {
          width: 80px;
        }
        div:last-child {
          width: 60px;
        }
        div:nth-last-child(2) {
          flex-grow: 1;
        }
      }
    }
  }
}
</style>