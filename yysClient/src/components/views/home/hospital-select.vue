<template>
  <div class="hosPital-select">
    <van-picker
      title="选择医院"
      show-toolbar
      :columns="hosColumns"
      @confirm="onConfirm"
      @cancel="onCancel"
      @change="onChange"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "HosPitalSelect",
  components: {},
  data() {
    return {
      hosColumns: [],
      hoslist:[],
      iActiveColor: "#ff0", //选中时文本为黄色
    };
  },
  methods: {
    onConfirm(value, index) {
      this.$emit("onConfirm", this.hoslist[index], index);
    },
    onChange(picker, value, index) {
      
    },
    onCancel() {
      this.$emit("onCancel");
      Toast("取消"); 
    },
  },
  created() {
    let hoslist = JSON.parse(localStorage.getItem("HosList"));
    this.hoslist = hoslist;
    this.hosColumns = hoslist.map((item) => {
      return item.hosName;
    });
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hosPital-select {
}
</style>
