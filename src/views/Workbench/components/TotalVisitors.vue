<template>
  <MyCard title="总访客数">
    <template slot="number">
      <span>{{ info.totalVisitors.toLocaleString() }}</span>
    </template>
    <div id="total-visitors-chart" class="total-visitors-chart"></div>
    <template slot="desc">
      <span>每日访客数 {{ info.todayVisitors.toLocaleString() }}</span>
    </template>
  </MyCard>
</template>

<script>
import MyCard from "./MyCard.vue";
import moment from "moment";

import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

export default {
  name: "TotalVisitors",
  components: {
    MyCard,
  },
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    const today = moment();
    const chartOption = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      grid: {
        left: "5px", // 距离容器左侧的距离
        right: "5px", // 距离容器右侧的距离
        top: "10px", // 距离容器顶部的距离
        bottom: "0px", // 距离容器底部的距离
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          today.subtract(7, "days").format("YYYY-MM-DD"),
          today.subtract(6, "days").format("YYYY-MM-DD"),
          today.subtract(5, "days").format("YYYY-MM-DD"),
          today.subtract(4, "days").format("YYYY-MM-DD"),
          today.subtract(3, "days").format("YYYY-MM-DD"),
          today.subtract(2, "days").format("YYYY-MM-DD"),
          today.subtract(1, "days").format("YYYY-MM-DD"),
        ],
      },
      yAxis: {
        type: "value",
        splitLine: {
          show: false, // 隐藏网格线
        },
      },
      series: [
        {
          data: [0, 0, 0, 0, 0, 0, 0],
          type: "line",
          smooth: 0.6,
          symbol: "none",
          areaStyle: {},
        },
      ],
    };
    return {
      myChart: null,
      chartOption,
    };
  },
  methods: {
    renderChart() {
      if (!this.myChart) {
        const chartDom = document.getElementById("total-visitors-chart");
        this.myChart = echarts.init(chartDom);
      }
      this.chartOption.series[0].data =
        this.info?.past7daysVisitors.map((item) => item.visitors) || [];
      this.myChart.setOption(this.chartOption);
    },
  },
};
</script>

<style lang="less" scoped>
.total-visitors-chart {
  height: 57px;
  width: 100%;
}
</style>
