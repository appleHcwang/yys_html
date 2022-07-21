<template>
  <div class="ocr-recognize-list">
 ocr 识别
  </div>
</template>
<script>

export default {
  name:'OcrRecognizeList',
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


  }
}
</script>
<style lang="scss">
.ocr-recognize-list{



}
</style>