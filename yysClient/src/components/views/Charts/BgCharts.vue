<!--
 * @Author: appleHcwang 2372233634@qq.com
 * @Date: 2022-11-18 11:10:32
 * @LastEditors: appleHcwang 2372233634@qq.com
 * @LastEditTime: 2022-11-18 14:58:18
 * @FilePath: /yysClient/src/components/views/Charts/BgCharts.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div
      class="echart"
      id="mychart"
      :style="{ float: 'left', width: '100%', height: '400px' }"
    ></div>
  </template>
  
  <script>
  import * as echarts from "echarts";
  
  export default {
    data() {
      return {
        name: "张雪",
        xData: ["2020-02", "2020-03", "2020-04", "2020-05"], //横坐标数据
        yData: [30, 132, 80, 134] //纵坐标数据，与横坐标对应
      };
    },
    mounted() {
      this.initEcharts();
    },
    methods: {
      initEcharts() {
        const option = {
          title: {
            text: "ECharts 入门示例"
          },
          tooltip: {},
          legend: {
            data: ["销量"]
          },
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar", //类型为柱状图
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        };
        const myChart = echarts.init(document.getElementById("mychart"));// 图标初始化
        myChart.setOption(option);// 渲染页面
        //随着屏幕大小调节图表
        window.addEventListener("resize", () => {
          myChart.resize();
        });
      }
    }
  };
  </script>
  
