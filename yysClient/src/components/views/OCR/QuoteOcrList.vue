<template>
  <div class="quote-ocr-list">
    <van-nav-bar
      :fixed="true"
      :placeholder="true"
      :safe-area-inset-top="true"
      title="OCR识别"
      left-arrow
      @click-left="$router.back(-1)"
    >
    </van-nav-bar>

   <div class="quote-list-cnt">

  <van-collapse v-model="activeNames">
  <van-collapse-item name="1">
    <template #title>

      <div class="title-cnt">
       <span>引用病历</span>    
          <span>
                2022-07021 10:21
          </span>
      </div>

    </template>
     <div>
        测试测试
     </div>
  </van-collapse-item>
  <van-collapse-item title="标题2" name="2" icon="shop-o">
    内容
  </van-collapse-item>
</van-collapse>


   </div>



  </div>
</template>
<script>
 
export default {
  name: "QuoteOcrList",
  components: {
    
  },

  data() {
    return {
      loading: false,
      finished: false,
      pageNum: "1",
        activeNames: ['1'],
    };
  },
  created() {
    // this.loadCaseList();
  },
  mounted() {},
  methods: {
    gotoOcrRecognize() {
      alert("ocr");
    },
  },
};
</script>


<style scoped lang="scss">
.quote-ocr-list {
  height: 100%;
  background-color: #f7f7f7;
  .quote-list-cnt {
    height: calc(100vh - 46px);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    .title-cnt{
        display: flex;
        color: red;
        flex-direction: column;
     
    }
  }


  ::v-deep .van-cell__right-icon {
  line-height: 36px;
  align-items: center;
}
}


</style>