<template>
  <div class="mine">
    <div class="mine-top">
      <div class="top-head">
        <img class="img-head" src="@/assets/yys/logo.png" alt="" />
        <span>Ninesun</span>
        <span>主任医师</span>
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
        :icon="require('@/assets/yys/系统设置icon@2x.png')"
        title="单元格"
        is-link
      />
      <van-cell
        :icon="require('@/assets/yys/系统设置icon@2x.png')"
        title="单元格"
        is-link
      />
      <van-cell
        :icon="require('@/assets/yys/系统设置icon@2x.png')"
        title="单元格"
        is-link
      />
      <van-cell
        :icon="require('@/assets/yys/系统设置icon@2x.png')"
        title="单元格"
        is-link
      />
      <van-cell
        :icon="require('@/assets/yys/系统设置icon@2x.png')"
        title="单元格"
        is-link
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Mine",
  data() {
    return {};
  },
  methods: {},

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
      width: 64px;
      height: 64px;
    }
  }
  .top-menu {
    display: flex;
    justify-content: space-around;
    height: 80px;
    background: #339999;
    border-radius: 8px;
    margin-left: 17px;
    margin-right: 17px;
    align-items: center;

    p {
      color: white;
      text-align: center;
      font-size: 24px;
    }
  }

}

  .van-cell {
    height: 60px;
    align-items: center;
  }
 ::v-deep .van-cell__left-icon {
display:-webkit-box;

-webkit-box-pack:center;

-webkit-box-align:center;

  .van-icon__image {

    
  }
 }
  // ::v-deep .van-cell__title {
  //   height: 60px;
  // }
</style>
