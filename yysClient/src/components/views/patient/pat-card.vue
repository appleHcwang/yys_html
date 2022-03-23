<template>
  <div class="pat-card">
   <p style="  background-color: #F2F2F2;
  height: 6px;"></p>
  <div class="pat-cardcnt">
   
    <p>
      <span style="
font-size: 16px;"> 1001床 </span>
    </p>
    <p>
      <span style=" display: block;padding:10px 0px 6px 0px;"> 杨*桃 女 56岁 </span>
    </p>
    <p>
      <span style="display: block;color: #999999; padding-bottom: 6px;"> 诊断：十二指肠癌切除术后伴肝脏、腹膜后多 诊断：十二指肠癌切除术后伴肝脏、腹膜后多 </span>
    </p>

    <p class="pat-cntbtm">
      <span>
        <img src="@/assets/yys/保险类型图标.png" alt="" />
        <span style="margin-left: 4px;"> 季琳琳 </span>
      </span>

      <span style=" margin-left: 14px ;">
        <img src="@/assets/yys/保险类型图标.png" alt="" />
        <span style="margin-left: 4px;"> 季琳琳 </span>
      </span>

      <span style="margin-left: 14px;">
        <img src="@/assets/yys/保险类型图标.png" alt="" />
        <span style="margin-left: 4px;"> 2018-09-03 15:09 </span>
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
    options: {
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
    padding:16px 16px;
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