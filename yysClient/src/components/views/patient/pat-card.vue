<template>
  <div class="pat-card">
    <p style="background-color: #f2f2f2; height: 6px"></p>
    <div class="pat-cardcnt">
      <p>
        <span style="font-size: 16px"> {{ patItem.hosBedNum }}床 </span>
      </p>
      <p>
        <span style="display: block; padding: 10px 0px 6px 0px">
          {{ patItem.patName }} {{ patItem.patSex }} {{ patItem.age }}
        </span>
      </p>
      <p>
        <span style="display: block; color: #999999; padding-bottom: 6px">
          诊断：{{patItem.DIAGNOSIS}}
          
        </span>
      </p>

      <p class="pat-cntbtm">
        <span>
          <img src="@/assets/yys/保险类型图标.png" alt="" />
          <span style="margin-left: 4px"> {{patItem.mainDoc}} </span>
        </span>

        <span style="margin-left: 14px">
          <img src="@/assets/yys/保险类型图标.png" alt="" />
          <span style="margin-left: 4px"> {{patItem.feeType}} </span>
        </span>

        <span style="margin-left: 14px">
          <img src="@/assets/yys/保险类型图标.png" alt="" />
          <span style="margin-left: 4px"> {{patItem.patHosDateIn}} </span>
        </span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "PatCard",
  components: {},
  props: {
    patItem: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      active: "",
    };
  },
  watch: {},
  methods: {},
};
</script>

<style lang="scss">
.pat-card {
  .pat-cardcnt {
    padding: 16px 16px;
    font-weight: 500;
    font-size: 14px;

    .pat-cntbtm {
      display: flex;
      font-size: 12px;
      align-items: center;
      span {
        display: flex;
        align-items: center;
        // text-align: center;
        line-height: 12px;
        height: 12px;
      }
    }
  }
}
</style>