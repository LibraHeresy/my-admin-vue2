<template>
  <div class="proportion-of-sales">
    <a-card
      title="The Proportion Of Sales"
      style="width: 100%; border-radius: 10px"
    >
      <a slot="extra" href="#">more</a>
      <div>
        <div
          id="proportion-of-sales-chart"
          class="proportion-of-sales-chart"
        ></div>
      </div>
    </a-card>
  </div>
</template>

<script>
import * as echarts from "echarts/core";
import { TooltipComponent, LegendComponent } from "echarts/components";
import { PieChart } from "echarts/charts";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout,
]);

export default {
  name: "ProportionOfSales",
  data() {
    const chartOption = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: "Search Engine" },
            { value: 735, name: "Direct" },
            { value: 580, name: "Email" },
            { value: 484, name: "Union Ads" },
            { value: 300, name: "Video Ads" },
          ],
        },
      ],
    };

    return {
      myChart: null,
      chartOption,
    };
  },
  mounted() {
    setTimeout(() => {
      this.renderChart();
    });
  },
  methods: {
    renderChart() {
      if (!this.myChart) {
        const chartDom = document.getElementById("proportion-of-sales-chart");
        this.myChart = echarts.init(chartDom);
      }
      this.myChart.setOption(this.chartOption);
    },
  },
  beforeDestroy() {
    // 销毁 echarts
    if (this.myChart != null) {
      this.myChart.dispose();
    }
  },
};
</script>

<style lang="less" scoped>
.proportion-of-sales {
  .proportion-of-sales-chart {
    height: 460px;
  }
}
</style>
