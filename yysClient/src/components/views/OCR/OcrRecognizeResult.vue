<template>
  <div class="ocr-recognizerst">
    <van-nav-bar :fixed="true" :placeholder="true" :safe-area-inset-top="true" title="OCR识别" left-arrow
      @click-left="$router.back(-1)">
    </van-nav-bar>

    <div style="background-color: #f7f7f7; height: 16px"></div>

    <div class="ocr-recognizerst-cnt">
      <van-cell>
        <template #title>
          <span class="custom-title">患者姓名</span>
          <span>李晓娟</span>
        </template>
      </van-cell>

      <van-cell center>
        <template #title>
          <span class="custom-title">识别类型</span>
          <span>李晓娟</span>
        </template>
      </van-cell>

      <van-cell center>
        <template #title>
          <div style="display: flex; align-items: center">
            <span class="custom-title">备注</span>
            <span>李晓娟</span>
          </div>
        </template>
      </van-cell>

      <div style="
          display: flex;
          justify-content: space-between;
          padding: 10px 16px 10px 16px;
          line-height: 36px;
        ">
        <span class="custom-title">转写内容</span>
        <van-button style="color: #139b7f; text-indent: 0.1em" color="white" @click="lookYj"
          :icon="require('@/assets/yys/lookYj.png')" type="primary">查看原件</van-button>
      </div>

      <div style="padding: 0px 20px 20px 20px; line-height: 25px;" v-html="resultStr"></div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";

export default {
  name: "OcrRecognizeResult",
  components: {},

  data() {
    return {
      fileList: [],
      showQrScanner: false,
      resultStr: '',
      data:{},
      datam: { "ocrType": "MedHistory", "ocrAttr": { "0||uName||姓名：": "罗翠", "10||curSickHis||现病史：": "患者于二日前无明显诱因下出现大便时肛门肿物脱出，伴疼痛带\n血，未经任何治疗，今来我院就诊。\n患者发病以来，食欲及睡眠可，精神欠佳，体重无明显减轻。\n门诊以“环状混合痔、2型糖尿病”收入院。\n便血：(无）:自-年-月 发现排便前（-)排便时（-)排便后（-)喷\n血（-)滴血（-)与粪便混合（-)量-颜色：鲜红（-)暗红（-)柏油样\n(-)疼痛：(有）:诱因琐顿性质：烧灼感（-)刺痛（-)胀痛（+)无\n痛（-)搔痒（-)排便前（-)排便时（-)排便后（+)持续时间半小时脱\n出（有）:自2007年3月发现便后脱出（+)行走（-)自然还纳（-)需\n手还纳（+)卧床休息（-)于/天前嵌顿脓肿（无）:自-年-月开始部位无\n自溃（-)切开（-)脓量（-)分泌（无）:量（-)性质（-)由肛门流出\n(-)由瘦道流出（-)大便：1日1次正常软便（+)干燥（-)细（-)\n扁（-)压痕（-)脓血（-)粘液（-)饮食：辣（+)蒜（-)酒（-)烟\n(-)其它：消瘦（-)失眠（-)大便失禁（-)排尿困难（-)曾经何种治\n疗：未曾治疗。", "11||oldSickHis||既往史：": "否认高血压、心脏病等慢性病史；否认重大外伤及手术史；否认", "12||illHis||输血史": "输血史；否认药物及食物过敏史。\n\r\n家族史： 否认家族遗传病病史。\n\r\n个人史： 生于原籍，未到过疫区，无不良嗜好。\n月经史：14岁初潮，4-5天/28-30天。\n病史陈述者签名：\t年月日\n第1页", "1||hospPatID||病案号：": "00092", "3||gender||性别：": "女", "4||age||年龄：": "20", "5||work||职业：": "不样", "6||merry||婚姻：": "未婚", "7||nation||民族：": "汉", "8||addr||住址：": "不详", "9||departManSay||主诉：": "便时肛门肿物脱出伴疼痛带血二日余。" }, "ocrTable": { "tableHeader": null, "tableHeaderContent": null, "tableBody": null, "score": 0, "dataDesc": null }, "subType": "" },
    };
  },
  created() {
    // this.loadCaseList();
    //  console.log(this.$route.params.res)
     let res = JSON.parse(this.$route.params.res)
   console.log(JSON.parse(res.data.data).ocrAttr)
    //  this.resultStr = res.data
      this.data.ocrAttr =  JSON.parse(res.data.data).ocrAttr
    console.log('88888')
    let newData = {}
    //  newData[newkey] = this.data.ocrAttr[key]
    //    console.log(newkey)
    let num = []
    Object.keys(this.data.ocrAttr).forEach((key) => {
      let value
      let str = ''
      let newkey = key.split('||')
      num.push(newkey[0])
      str = newkey[newkey.length - 1] + this.data.ocrAttr[key]
      // console.log(newkey)
      newData[newkey[0]] = str

    });
    num.sort(function (a, b) {
      return a - b
    })
    //  console.log(newData + num)

    let htmlCnt = ''
    num.forEach(function (val, index) {
      htmlCnt = htmlCnt + newData[val] + '<br>'

    })
    this.resultStr = htmlCnt

    console.log(this.resultStr)


  },
  mounted() { },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log("889977");
      console.log(JSON.stringify(file));
    },
    startOcrRecognize() {
      this.showQrScanner = true;
      Toast("开始识别");
    },
    lookYj() {
      Toast("gg");
    },
  },
};
</script>
<style scoped lang="scss">
.ocr-recognizerst {
  &-cnt {
    height: calc(100vh - 56px);
  overflow: scroll;
    .custom-title {
      margin-right: 18px;
      vertical-align: middle;
      font-size: 16px;
      font-weight: 500;
      width: 64px;
    }
  }
}

::v-deep .van-cell {
  line-height: 36px;
  align-items: center;
}

span {
  vertical-align: middle;

}
</style>