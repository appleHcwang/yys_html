<template>
  <div class="patient">
    <app-tabs  ref="apptabs" :options="options" @onChange="onChange"> </app-tabs>
<!-- 

      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list> -->
    
    <van-swipe @change="onChangeIndex" :initial-swipe="page" :loop="false" :show-indicators="false">
      <van-swipe-item v-for="item in options" :key="item.name">
        {{item.name}}
    <van-list
         
    
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell v-for="item in list" :key="item" :title="item" />
        </van-list>
    </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import AppTabs from "@/components/views/patient/AppTabs.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Patient",
  components: { AppTabs },
  data() {
    return {
      list: [],
      page:0,
      loading: false,
      finished: false,
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
        let obj = this.options[index]
    this.$refs.apptabs.parentHandleclick(obj.name);
      
    },
    onChange(name, index) {

  this.page = index;

    },

    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 20; i++) {
          this.list.push(i);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
  },
  created() {},
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .van-list{
    height:calc(100vh - 100px);
    overflow: auto;
    -webkit-overflow-scrolling:touch;
  }
</style>
