<template>
  <div class="pat-card">
    <p>123</p>
    <p>456</p>
    <p>789</p>
    <p>10111112</p>
  </div>
</template>
<script>
export default {
  name: "PatCard",
  components: {},
  props: {
    options: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      active: "",
    };
  },
  watch: {},
  methods: {},
};
</script>

<style lang="scss">
</style>