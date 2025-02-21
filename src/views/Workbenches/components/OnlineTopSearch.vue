<template>
  <div class="online-top-search">
    <a-card title="在线搜索榜" style="width: 100%; border-radius: 10px">
      <div>
        <div class="online-top-search-charts">
          <div
            id="online-top-search-chart-one"
            class="online-top-search-chart-one"
          ></div>
        </div>
        <div class="online-top-search-content">
          <a-table
            :columns="columns"
            :data-source="data"
            size="small"
            :pagination="{
              pageSize: 5, // 每页显示 10 条
            }"
          >
            <span slot="range" slot-scope="text">
              {{ text }}
              <a-icon type="caret-up" style="color: red" />
            </span>
          </a-table>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script>
import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

import moment from "moment";

export default {
  name: "OnlineTopSearch",
  data() {
    const columns = [
      {
        title: "排行",
        dataIndex: "rank",
        key: "rank",
        width: "80px",
      },
      {
        title: "关键词",
        dataIndex: "keyword",
        key: "keyword",
      },
      {
        title: "用户数",
        dataIndex: "users",
        key: "users",
        ellipsis: true,
      },
      {
        title: "每日上升趋势",
        dataIndex: "range",
        key: "range",
        ellipsis: true,
        align: "right",
        scopedSlots: { customRender: "range" },
      },
    ];

    let data = [
      {
        key: "1",
        rank: "1",
        keyword: "搜索",
        users: "1,000",
        range: "+10%",
      },
      {
        key: "2",
        rank: "2",
        keyword: "搜索",
        users: "1,000",
        range: "+10%",
      },
      {
        key: "3",
        rank: "3",
        keyword: "搜索",
        users: "1,000",
        range: "+10%",
      },
      {
        key: "4",
        rank: "4",
        keyword: "搜索",
        users: "1,000",
        range: "+10%",
      },
      {
        key: "5",
        rank: "5",
        keyword: "搜索",
        users: "1,000",
        range: "+10%",
      },
    ];

    data = data.concat(
      data.map((item) => ({
        ...item,
        rank: +item.rank + 5,
      }))
    );

    const today = moment();
    const chartOption = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      grid: {
        left: "60px", // 距离容器左侧的距离
        right: "20px", // 距离容器右侧的距离
        top: "10px", // 距离容器顶部的距离
        bottom: "40px", // 距离容器底部的距离
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          today.subtract(14, "days").format("YYYY-MM-DD"),
          today.subtract(13, "days").format("YYYY-MM-DD"),
          today.subtract(12, "days").format("YYYY-MM-DD"),
          today.subtract(11, "days").format("YYYY-MM-DD"),
          today.subtract(10, "days").format("YYYY-MM-DD"),
          today.subtract(9, "days").format("YYYY-MM-DD"),
          today.subtract(8, "days").format("YYYY-MM-DD"),
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
      },
      series: [
        {
          smooth: 0.6,
          symbol: "none",
          data: [
            820, 932, 901, 934, 1290, 1330, 1320, 932, 901, 934, 1290, 1290,
            1330, 1320, 932,
          ],
          type: "line",
          areaStyle: {},
        },
      ],
    };
    return {
      data,
      columns,
      chartOption,
      myCharts: [],
    };
  },
  mounted() {
    setTimeout(() => {
      this.renderChart();
    });
  },
  methods: {
    renderChart() {
      if (this.myCharts.length < 1 || !this.myCharts.every((item) => item)) {
        const chartDomOne = document.getElementById(
          "online-top-search-chart-one"
        );
        this.myCharts[0] = echarts.init(chartDomOne);
      }
      this.myCharts[0].setOption(this.chartOption);
    },
  },
  beforeDestroy() {
    // 销毁 echarts
    this.myCharts.forEach((item) => {
      if (item != null) {
        item.dispose();
      }
    });
  },
};
</script>

<style lang="less" scoped>
.online-top-search {
  .online-top-search-charts {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div {
      height: 174px;
      width: 100%;
    }
  }
  .online-top-search-content {
    height: 286px;
  }
}
</style>
