/* eslint-disable vue/valid-v-for */
<template>
  <div class="home">

<van-nav-bar :safe-area-inset-top="true" title="消化内科" left-text="返回" left-arrow>
    <template #left>
    <van-icon :name="require('@/assets/yys/发现页-pad图标.png')" size="24" />
   <span style="font-size:14px;color: #339999;">PAD</span>
  </template>
  <template #right>
    <van-icon :name="require('@/assets/yys/发现页-扫码图标.png')" size="24" />
  </template>
</van-nav-bar>

    
    <div class="swipe">
      <van-swipe :loop="false" class="my-swipe" :autoplay="1000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img style="height: 170px" v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <van-search
      class="search"
      style="line-height: 20px"
      @click="searchClick"
      disabled="true"
      placeholder="请输入搜索关键词"
    />
    <div>
      <van-swipe
        :loop="false"
        style="background-color: white; height: 202px"
        class="my-swipe"
      >
        <van-swipe-item v-for="n in menu" :key="n">
          <van-grid :border="false" :column-num="4">
            <van-grid-item
              @click="handleItemClick(e, value)"
              v-for="value in n"
              :key="value"
              :icon="value.extJson.iconUrl"
              :text="value.name"
            />
          </van-grid>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home-page",
  data() {
    return {
      images: [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ],
      menu:[],
      menuList: [
        {
          title: "会诊管理",
          icon: require('@/assets/yys/会诊管理.png'),
        },
        {
          title: "会诊管理",
          icon: require('@/assets/yys/会诊管理.png'),
        },
        {
          title: "会诊管理",
          icon: require('@/assets/yys/会诊管理.png'),
        },
        {
          title: "会诊管理",
          icon: require('@/assets/yys/会诊管理.png'),
        },
        {
          title: "会诊管理",
          icon: require('@/assets/yys/会诊管理.png'),
        },
        {
          title: "会诊管理",
          icon: require('@/assets/yys/会诊管理.png'),
        },
        {
          title: "会诊管理",
          icon: require('@/assets/yys/会诊管理.png'),
        },
        {
          title: "会诊管理",
          icon: require('@/assets/yys/会诊管理.png'),
        },
        {
          title: "测试管理",
          icon: require('@/assets/yys/会诊管理.png'),
        },
      ],
    };
  },
  methods: {
    searchClick() {
      alert("sfs");
    },
    click() {
      alert("sfs");
    },
    handleItemClick(e, val) {
      // alert(JSON.stringify(val));
       
      plus.runtime.openWeb(val.url);
    },
    group(array, subNum) {
      let index = 0;
      let newArray = [];
      while(index < array.length) {
          newArray.push(array.slice(index, index += subNum));
      }
      return newArray;
  }

  },

  created() {
    // this.menu =   this.group(this.menuList,8)
    let hos = JSON.parse(localStorage.getItem('currentHos'))
     
     this.menu =   this.group(hos.moduleConfig.indexList,8)

  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/assets/style/variables.scss";
.search {
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  border: 1px solid #339999;
}
::v-deep .van-nav-bar__content { 
  height:64px;
}
::v-deep .van-search__content {
  background-color: white;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
}

::v-deep .van-swipe__indicator {
  background-color: $themeColor;
}
</style>
