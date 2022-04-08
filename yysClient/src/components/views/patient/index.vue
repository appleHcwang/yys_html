<template>
  <div class="patient">
    <app-tabs ref="apptabs" :options="options" @onChange="onChange"> </app-tabs>
    <van-swipe
      @change="onChangeIndex"
      :initial-swipe="pageItem"
      :loop="false"
      :show-indicators="false"
    >
      <van-swipe-item v-for="item in options" :key="item.name">

        <div v-if="item.index === 0">
          <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <pat-card v-for="item in patlist" :key="item" :patItem="item"> </pat-card>
          </van-list>
          </van-pull-refresh>
        </div>

        <div v-else-if="item.index === 1">
          <div class="search">
            <van-search v-model="searchValue" placeholder="请输入搜索关键词" />
          </div>
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <van-cell v-for="item in patlist" :key="item" :title="1" />
          </van-list>
        </div>

        <div v-else-if="item.index === 2">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <van-cell v-for="item in patlist" :key="item" :title="2" />
          </van-list>
        </div>

      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import AppTabs from "@/components/views/patient/AppTabs.vue";
import PatCard from "@/components/views/patient/pat-card.vue";

import { getPatientList } from "@/services/api-url/patient-list.js";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Patient",
  components: { AppTabs, PatCard },
  data() {
    return {
      searchValue: "",
      patlist: [],
      page: 1,
      pageItem:0,
      loading: false,
      finished: false,
      refreshing: false,
      options: [
        {
          name: "my",
          label: "我的",
          index: 0,
        },
        {
          name: "all",
          label: "全科",
          index: 1,
        },
        {
          name: "stat",
          label: "收藏",
          index: 2,
        },
      ],
    };
  },
  methods: {
    onChangeIndex(index) {
      let obj = this.options[index];
      this.$refs.apptabs.parentHandleclick(obj.name);
    },
    onChange(name, index) {
      this.pageItem = index;
    },

    onLoad() {
        if (this.refreshing) {
          this.patlist = [];
          this.page = 1
          this.refreshing = false;
        }
     let postData = {
      params: {
        bedNum: "",
        deptId: "180",
        pageSize: "10",
        filters: [],
        filters2: [],
        deptNote: "",
        pageNum: this.page,
      },
    };
    getPatientList(postData).then((res) => {
       let arr =  JSON.parse(res)
  
         this.patlist = [...arr];
         console.log(this.patlist + 'dsd')
  
    }).finally(err => {
 
    });
    },
    onRefresh() {
         alert("Refresh")
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },
   
  created() {
  
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.van-list {
  height: calc(100vh - 100px);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
