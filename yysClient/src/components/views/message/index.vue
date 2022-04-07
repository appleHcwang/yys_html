<template>
  <div class="message">消息</div>

  <scroll-menu :menuItems="menuItems" :iActiveColor="iActiveColor" :DefaultIndex="(1)" @clickLzMenuItem="clickMenuItem">
    
     </scroll-menu>
</template>

<script>
import scrollMenu from "../common/scroll-menu.vue"
export default {
  name: "Message",
  components:{
    scrollMenu,
  },
  data() {
    return {
      menuItems: [
        {
          id: 1,
          name: "通知公告",
        },
        {
          id: 2,
          name: "讲座预告",
        },
        {
          id: 3,
          name: "综合新闻",
        },
        {
          id: 4,
          name: "校园动态",
        },
        {
          id: 5,
          name: "教育教学",
        },
        {
          id: 6,
          name: "创新创业",
        },
        {
          id: 7,
          name: "开放办学",
        },
        {
          id: 8,
          name: "我爱我家",
        },
      ],
      iActiveColor: "#ff0", //选中时文本为黄色
    };
  },
  methods: {
     clickMenuItem: function(item) {
      console.log(item.name);
    }
  },

  created() {},
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
