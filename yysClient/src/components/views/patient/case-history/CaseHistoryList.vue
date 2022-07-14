<template>
  <div class="case-history-list">
   病历
    <div class="case-ul scroll-box">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="loadCaseList">
        <div
          v-for="(item,index) in hospitalRecords"
          :key="`hos${index}`">
          <div class="case-type-name">
            {{ item.dirName }}
          </div>
          <div
            v-for="item2 in item.records"
            :key="item2.id"
            class="case-item van-hairline--bottom van-hairline--left">
            <div class="info">
              <span class="name">{{ item2.dirName }}</span>
              <span>
                <span class="text-icon">已签</span>
                <span class="doctor">{{ item2.recorder }}</span>
              </span>
            </div>
            <span class="time">{{ item2.recordDate }}</span>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>
<script>

export default {
  name:'CaseHistoryList',
  components:{ 

  },
  data(){
    return {
      options:[
        {
          name:'院内病历',
          label:'院内病历'
        },
        {
          name:'语音病历',
          label:'语音病历'
        },
      ],
      hospitalRecords:[],//院内病历
      voiceRecords:[],// 语音病历
      loading:false,
      finished:false,
      pageNum:'1'
    }
  },
  created(){

    // this.loadCaseList();

  },
  mounted(){


  },
  methods:{

    async loadCaseList(){



    },
    onChange(name){

      console.error(name);

    }

  }
}
</script>
<style lang="scss">
.case-history-list{
  .case-ul{
    position: relative;
    height: calc(100vh - 145px);
    .case-type-name{
      position: sticky;
      top:0;
      height: 40px;
      line-height: 40px;
      padding: 0 16px;
      font-size: 16px;
      font-weight: 600;
      background-color: #f2f2f2;
      opacity: 1;
      z-index: 100;
      box-shadow:0px 1px 0px 0px rgba(230,230,230,1);
    }
  }
  .case-item{
    position: relative;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px 20px 10px 14px;
    margin-left: 16px;
    box-sizing: border-box;
    &::before{
      content: '';
      display: block;
      position: absolute;
      width: 5px;
      height: 5px;
      background-color: #ccc;
      border-radius: 50%;
      left: 0px;
      top: 50%;
      transform: translate3d(-50%,-50%,0);
      z-index: 9;
    }
    &:active{
      background-color: #f2f2f2;
    }

    .info{
      display: inline-flex;
      align-self: stretch;
      flex-direction: column;
      justify-content: space-between;
      .name{
        font-size: 16px;
        font-weight: 600;
      }
      .text-icon{
        margin-right: 5px;
        color: #339999;
        font-size: 8px;
        border-radius: 4px;
        vertical-align: middle;
        border:1px solid currentColor;
      }
      .doctor{
        margin-top: 3px;
        font-size: 14px;
        vertical-align: middle;
        color: #999;
      }
    }
    .time{
      font-size: 14px;
      color: #999;
    }
  }
}
</style>