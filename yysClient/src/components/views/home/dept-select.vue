<template>
  <div class="dept-select">
    <van-nav-bar
      :safe-area-inset-top="true"
      left-text="返回"
      fixed="true"
      left-arrow
      @click-left="$router.back(-1)"
    >
      <template #title>
        <span @click="hospitalSelClick" style="font-size: 14px">{{
          hosName
        }}</span>
      </template>
    </van-nav-bar>
    <div class="dept-list">
      <van-index-bar
        :index-list="indexList"
        :sticky="true"
        :sticky-offset-top="46"
      >
        <div v-for="item in indexList">
          <van-index-anchor index="item">{{ item }}</van-index-anchor>
          <van-cell
            @click="deptSelectClick(itm)"
            v-for="itm in obj[item]"
            :title="itm.deptName"
          >
          </van-cell>
        </div>
      </van-index-bar>
    </div>

    <van-popup
      v-model:show="show"
      round
      position="bottom"
      :style="{ height: '30%' }"
    >
      <HosPitalSelect @onCancel="onCancel" @onConfirm="onConfirm" />
    </van-popup>
  </div>
</template>

<script>
import { getDeptList } from "@/services/api-url/hospital.js";
import HosPitalSelect from "../home/hospital-select.vue";
import { setToken, getToken } from "@/utils/auth.js";
export default {
  name: "DeptSelect",
  components: { HosPitalSelect },
  data() {
    return {
      show: false,
      indexList: [],
      deptList: [],
      currentHos: {},
      obj: {},
      hosName: "",
      iActiveColor: "#ff0", //选中时文本为黄色
    };
  },
  methods: {
    hospitalSelClick() {
      this.show = true;
    },
    onCancel() {
      this.show = false;
    },

    /*
     * Method 科室选择
     */
    deptSelectClick(item) {
      this.$store.commit("hospital/setcurrentHos", this.currentHos);
      this.$store.commit("hospital/setcurrentDept", item);
      localStorage.setItem("currentHos", JSON.stringify(this.currentHos));
      localStorage.setItem("currentDept", JSON.stringify(item));

      this.$router.back(-1);
    },
    /**
     * @method 选择医院
     */
    onConfirm(value, index) {
      this.currentHos = value;
      this.hosName = value.hosName
      console.log(JSON.stringify(this.currentHos), index);
      // localStorage.setItem("currentHos", JSON.stringify(this.currentHos));
      if (this.currentHos.isSsoHos) {
        setToken(localStorage.getItem("ssoToken"));
      } else {
        setToken(localStorage.getItem("uapToken"));
      }
      this.show = false;
      this.getDeptListReq();
    },

    /** 
     * @method 科室请求
     */
    getDeptListReq() {
      let t = getToken();
      let data = {
        serverBaseUrl: this.currentHos.serverUrl,
        params: {
          orgId: this.currentHos.hosCode,
          orgName: this.currentHos.hosName,
          token: t,
        },
      };
      getDeptList(data)
        .then((res) => {
          this.deptList = JSON.parse(res);
          this.indexList = [];
          this.deptList.forEach((element) => {
            if (!this.indexList.includes(element.shouPin)) {
              this.indexList.push(element.shouPin);
            }
          });
          this.indexList = this.indexList.sort(function (s, t) {
            var a = s.toLowerCase();
            var b = t.toLowerCase();
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
          });

          let ob = {};
          this.indexList.forEach((element) => {
            // console.log(element);
            let dptList = [];
            this.deptList.forEach((dept) => {
              if (element === dept.shouPin) {
                dptList.push(dept);
              }
            });
            ob[element] = dptList;
            // console.log(JSON.stringify(ob));
          });
          this.obj = ob;
        })
        .catch((error) => {
          console.log(error);
          this.deptList = []
          this.indexList = []
        });
    },
  },

/**
 * @method  钩子函数
 */
  created() {
    let currentHos = localStorage.getItem("currentHos");
    currentHos = currentHos ? JSON.parse(currentHos) : {};
    this.currentHos = currentHos;
    this.hosName = currentHos.hosName;
    this.getDeptListReq();

    //  NSDictionary *param = @{@"orgId":kCacheInfo.orgId,@"orgName":kCacheInfo.orgName};
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dept-select {
  // display: flex;
  // flex-direction: column;

  .dept-list {
    padding-top: 46px;
  }
}
</style>
