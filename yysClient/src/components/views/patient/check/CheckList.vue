<template>
  <div class="check-list">
    检查
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="loadCheckList">
      <div
        v-for="item in checkList"
        :key="item.id"
        class="check-item"
        @click="isShow = true">
        <div class="info">
          <span class="name">{{ item.chkType }}</span>
          <span style="margin-top:8px">
            <span class="text-icon">{{ item.chkResultState }}</span>
            <span class="time">{{ item.reportDate }}</span>
          </span>
        </div>
        <van-icon
          name="arrow"
          color="#B3B3B3"
          size="40"
          style="transform: scale(0.5) translateX(10px);" />
      </div>
    </van-list>

    <van-popup
      v-model="isShow"
      position="bottom"
      safe-area-inset-bottom
      round
      closeable
      style="height:90vh">
      <div class="popup_title van-hairline--bottom">
        测试
      </div>
      <div class="popup_content">
        <div class="item">
          <span class="label">检查单号</span>
        </div>
        <div class="item">
          <span class="label">报告时间</span>
        </div>
        <div class="item">
          <span class="label">版本号</span>
        </div>
        <div class="item">
          <span class="label">临床诊断</span>
        </div>
        <div class="item">
          <span class="label">检查类型</span>
        </div>
        <div class="item">
          <span class="label">检查所见</span>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
 

export default {
  name:'CheckList',
  components:{

  },
  data(){
    return {
      isShow:false,
      checkList:[],
      loading:false,
      finished:false,
      pageNum:'1'
    }
  },
  created(){


  },
  methods:{

  
 
  }
}
</script>
<style lang="scss">
.check-list{

 
}
</style>