<template>
  <div class="wrapper">
    <div class="my-inbox" ref="box" @click.prevent="">
      <div
        class="item"
        v-for="(item, index) in menuItems"
        :key="index"
        :id="index"
        :style="getStyle(index == currentIndex)"
        @click.prevent="clickMenuItem(index, $event)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "scroll-menu",
  props: {
    menuItems: Array,
    DefaultIndex: 0,
    iColor: {
      type: String, //未选中文本颜色
      default: "#333",
    },
    iBgColor: { //未选中背景色
      type: String,
      default: "#fff",
    },
    iActiveColor: { //选中时文本颜色
      type: String,
      default: "#fff",
    },
    iActiveBgColor: { //选中时背景色
      type: String,
      default: "#036875",
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  beforeMount() {
    //挂着前，修改默认选项
    this.currentIndex = this.DefaultIndex;
  },

  methods: {
    getStyle(select) {
      return {
        color: select ? this.iActiveColor : this.iColor,
        background: select ? this.iActiveBgColor : this.iBgColor,
      };
    },
    clickMenuItem(idx, event) {
      let inbox = this.$refs.box;

      // 点击事件传递给调用者
      if (this.currentIndex != idx) {
        this.currentIndex = idx;
        console.log("点击index: " + idx);
        this.$emit("clickLzMenuItem", this.menuItems[idx]);
      }
      //滚动 到中间
      let e = event.currentTarget;
      let left = e.offsetLeft - inbox.clientWidth / 2 + e.offsetWidth / 2;
      inbox.scrollLeft = left;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #f2f2f2;
  width: 100%;
  .my-inbox {
    overflow-y: hidden;
    overflow-x: scroll;
    width: 100%;
    white-space: nowrap;
    .item {
      display: inline-block;
      height: 2rem;
      line-height: 2rem;
      margin: 0.5rem;
      padding: 0px 0.8rem;
      text-align: center;
      color: red;
    }
    .active {
      background-color: #036875;
      font-weight: bold;
      border-radius: 25px;
      color: #fff;
    }
  }
}
</style>