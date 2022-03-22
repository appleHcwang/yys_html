<template>
  <div class="app-tabs">
    <div class="tab-cnt">
      <span :class="['tab-item',{active: item.name === active}]"  v-for="item in options" :key="item.name"
      @click="onClick(item.name,item.label)"
      > 
          {{item.name}}
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
    onClick(name,label) {
      this.active = name;
      this.$emit("onChange", name,label);
    },
  },
};
</script>
<style lang="scss">
.app-tabs {

    text-align: center;
    margin: 10px 0;
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
      background-color: #F8F8F8;
      &.active {
          background-color: #339999;
          color: white;
      }
    }
  }
}
</style>