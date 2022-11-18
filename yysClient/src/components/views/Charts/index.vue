<!--
 * @Author: appleHcwang 2372233634@qq.com
 * @Date: 2022-11-18 11:10:32
 * @LastEditors: appleHcwang 2372233634@qq.com
 * @LastEditTime: 2022-11-18 16:32:11
 * @FilePath: /yysClient/src/components/views/Charts/BgCharts.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
<div style="display: flex;">


  <router-link to='/chartIndex/bgCharts'>

<div style="width:90px;height:90px;background-color:red">
</div>

</router-link>

<router-link to='/chartIndex/zzCharts'>
  <div style="width:90px;height:90px;background-color:blue">
</div>
</router-link>

</div>

   
    <div class="son-view">
      <router-view></router-view>
    </div>

  </div>
</template>
  
<script>

export default {
  name: 'ChartsIndex',
  data() {
    return {
      name: "张雪",

    };
  },
  mounted() {

  },
  methods: {


  }
};
</script>
  
