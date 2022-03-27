<template>
  <div class="mine">
    <div class="mine-top">
      <div class="top-head">
        <img class="img-head" src="@/assets/yys/头像.png" alt="" />
        <span style="margin-top: 9px; font-weight: 500">Ninesun</span>
        <span class="doc-zc" style="margin-top: 10px; font-size: 10px"
          >主任医师</span
        >
      </div>

      <div class="top-menu">
        <div>
          <p>15</p>
          <p style="font-size: 12px">图片收藏</p>
        </div>

        <div>
          <p>12</p>
          <p style="font-size: 12px">指南收藏</p>
        </div>
      </div>
    </div>

    <div class="mine-btm">

 <van-cell
 

   v-for="item in menuList" :key="item"
        center
        @click="clickItem(item)"
        :icon=item.icon
        :title= item.title
        is-link>
 </van-cell>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  name: "Mine",
  data() {
    return {
      menuList: [
        {
          title: "设备管理",
          icon: require('@/assets/yys/系统设置icon@2x.png'),
          index: 0,
        },
        {
          title: "系统设置",
          icon: require('@/assets/yys/系统设置icon@2x.png'),
          index: 1,
        },
        {
          title: "意见反馈",
          icon: require('@/assets/yys/系统设置icon@2x.png'),
          index: 2,
        },
        {
          title: "关于我们",
          icon: require('@/assets/yys/系统设置icon@2x.png'),
          index: 2,
        },
      ],
    };
  },
  methods: {
    clickItem(item) {
      Dialog.confirm({
        title: item.title,
        message: "是否退出当前登录",
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
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
.mine-top {
  .top-head {
    display: flex;
    flex-direction: column;
    align-items: center;
    .img-head {
      margin-top: 108px;
      width: 64px;
      height: 64px;
    }
    .doc-zc {
      border-radius: 2px;
      border: 1px solid #339999;
      padding: 2px 5px;
      color: #339999;
    }
  }
  .top-menu {
    display: flex;
    justify-content: space-around;
    height: 80px;
    background: #339999;
    border-radius: 8px;
    margin: 20px 17px 0px 17px;
    align-items: center;
    box-shadow: 0px 8px 8px 0px rgba(51, 153, 153, 0.2);
    p {
      color: white;
      text-align: center;
      font-size: 24px;
    }
  }
}

.mine-btm {
  margin-top: 16px;
}
.van-cell {
  height: 60px;
  // align-items: center;
}
::v-deep .van-icon__image {
  height: 24px;
  line-height: 24px;
}
// ::v-deep .van-cell__title
//   height: 60px;
//
</style>
