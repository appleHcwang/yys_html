<template>
  <div class="dept-select">
    <van-nav-bar
      :safe-area-inset-top="true"
      title="省立医院"
      left-text="返回"
      fixed="true"
      left-arrow
      @click-left="$router.back(-1)"
    >
    </van-nav-bar>
    <div class="dept-list">
      <van-index-bar
        :index-list="indexList"
        :sticky="true"
        :sticky-offset-top="46"
      >
        <div v-for="item in indexList">
          <van-index-anchor index="item">{{ item }}</van-index-anchor>
          <van-cell v-for="itm in obj[item]" :title="itm.deptName"> </van-cell>
        </div>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import { getDeptList } from "@/services/api-url/hospital.js";

export default {
  name: "DeptSelect",
  components: {},
  data() {
    return {
      indexList: [],
      deptList: [],
      obj: {},

      iActiveColor: "#ff0", //选中时文本为黄色
    };
  },
  methods: {},

  created() {
    let currentHos = localStorage.getItem("currentHos");
    currentHos = currentHos ? JSON.parse(currentHos) : {};
    let data = {
      params: {
        orgId: currentHos.hosCode,
        orgName: currentHos.hosName,
      },
    };
    getDeptList(data)
      .then((res) => {
        this.deptList = JSON.parse(res);
        console.log(this.deptList);
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

        let arr = [];

        let ob = {};
        this.indexList.forEach((element) => {
          console.log(element);

          let dptList = [];
          this.deptList.forEach((dept) => {
            if (element === dept.shouPin) {
              dptList.push(dept);
            }
          });
          ob[element] = dptList;
          console.log(JSON.stringify(ob));
        });
        this.obj = ob;
      })
      .catch((error) => {
        console.log(error);
      });

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
