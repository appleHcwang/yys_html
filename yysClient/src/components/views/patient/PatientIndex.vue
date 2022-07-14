<template>
  <div class="patient-index">
    <van-nav-bar>
      <template #left>
        <van-icon name="arrow-left" @click="$router.go(-1)" />
      </template>

      <template #title>
        <span style="display: inline-flex; align-items: center">
          <span
            class="c-icon"
            :style="{ visibility: activePatIndex ? 'unset' : 'hidden' }"
            @click="changePat(-1)"
          >
            <van-icon name="arrow-left" />
          </span>
          <span>{{ `${patInfo.hosBedNum}床  ${patInfo.patName}` }}</span>
          <span
            class="c-icon"
            :style="{
              visibility:
                activePatIndex === patList.length - 1 ? 'hidden' : 'unset',
            }"
            @click="changePat(1)"
          >
            <van-icon name="arrow" />
          </span>
        </span>
      </template>
    </van-nav-bar>
    <van-tabs v-model="active" color="#339999" title-active-color="#339999">
      <van-tab title="信息">
        <PatientBaseInfo></PatientBaseInfo>
      </van-tab>
      <van-tab title="医嘱">
        <advice-list :key="`advice${patInfo.hosId}`"></advice-list> 
      </van-tab>
      <van-tab title="病历">
        <case-history-list :key="`case${patInfo.hosId}`"></case-history-list>
      </van-tab>
      <van-tab title="检查">
        <!-- <check-list :key="`check${patInfo.hosId}`"></check-list> -->
        <check-list></check-list>
      </van-tab>
      <van-tab title="检验">
        <inspect-list :key="`inspect${patInfo.hosId}`"></inspect-list>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import CaseHistoryList from "./case-history/CaseHistoryList.vue";
import InspectList from "./inspect/InspectList";
import CheckList from "./check/CheckList";
import AdviceList from "./doctor-advice/AdviceList";
export default {
  name: "PatientIndex",
  components: { AdviceList, CaseHistoryList, InspectList, CheckList },
  data() {
    return {
      active: "",
      key: 1,
    };
  },
  computed: {
    // ...mapState(['patient/patInfo','patient/patList']),
    // ...mapGetters(['activePatIndex'])
    ...mapState({
      patInfo: (state) => state.patient.patInfo,
      patList: (state) => state.patient.patList,
    }),

    ...mapGetters("patient", ["activePatIndex"]),
  },
  created() {
    console.log("dddddd");
    console.log("nn" + JSON.stringify(this.patList));
  },
  methods: {
    changePat(num) {
      console.log(this.activePatIndex);
      this.$store.commit(
        "patient/setPatInfo",
        this.patList[this.activePatIndex + num]
      );
      this.$router.push({ params: { hosId: this.patInfo.hosId } });
    },
  },
};
</script>



<style lang="scss">
.patient-index {
  .van-nav-bar__left {
    font-size: 22px;
  }
  .c-icon {
    position: relative;
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 1px solid #666666;
    border-radius: 50%;
    &:first-child {
      margin-right: 5px;
    }
    &:last-child {
      margin-left: 5px;
    }
    i {
      position: absolute;
      top: 50%;
      left: 50%;
      color: #666666;
      transform: translate3d(-50%, -50%, 0);
    }
  }
}
</style>