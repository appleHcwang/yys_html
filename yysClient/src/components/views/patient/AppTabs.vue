<template>
  <div class="app-tabs">
    <div class="tab-cnt">
      <span
        :class="['tab-item', { active: item.name === active }]"
        v-for="item in options"
        :key="item.name"
        @click="onClick(item.name, item.index)"
      >
        {{ item.name }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppTabs",
  components: {},
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      active: "",
    };
  },
  watch: {
    options: {
      deep: true,
      immediate: true,
      handler(value) {
        if (value[0]) this.active = value[0].name;
      },
    },
  },
  methods: {
    onClick(name, index) {
      this.active = name;
      this.$emit("onChange", name, index);
    },

      parentHandleclick(name) {
          this.active = name;
      }
  },
};
</script>
<style lang="scss">
.app-tabs {
  // position: fixed;
  text-align: center;
  margin: 10px 0;
  // left: 0;
  // right: 0;
  // z-index: 1000;
  .tab-cnt {
    display: inline-flex;
    background-color: #f2f2f2;
    border-radius: 17px;
    text-align: center;
    border: 1px solid #e6e6e6;
    .tab-item {
      text-align: center;
      padding: 9px 27px;
      border-radius: 17px;
      font-size: 12px;
      line-height: 12px;
      background-color: #f8f8f8;
      &.active {
        background-color: #339999;
        color: white;
      }
    }
  }
}
</style>