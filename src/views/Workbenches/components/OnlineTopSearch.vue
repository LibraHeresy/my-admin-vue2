<template>
  <div class="online-top-search">
    <a-card title="Online Top Search" style="width: 100%; border-radius: 10px">
      <a slot="extra" href="#">more</a>
      <div>
        <div class="online-top-search-charts">
          <div
            id="online-top-search-chart-one"
            class="online-top-search-chart-one"
          ></div>
          <div
            id="online-top-search-chart-two"
            class="online-top-search-chart-two"
          ></div>
        </div>
        <div class="online-top-search-content">
          <a-table :columns="columns" :data-source="data" size="small">
            <a slot="name" slot-scope="text">{{ text }}</a>
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

export default {
  name: "OnlineTopSearch",
  data() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        scopedSlots: { customRender: "name" },
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
        width: 80,
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address 1",
        ellipsis: true,
      },
      {
        title: "Long Column Long Column Long Column",
        dataIndex: "address",
        key: "address 2",
        ellipsis: true,
      },
      {
        title: "Long Column Long Column",
        dataIndex: "address",
        key: "address 3",
        ellipsis: true,
      },
      {
        title: "Long Column",
        dataIndex: "address",
        key: "address 4",
        ellipsis: true,
      },
    ];

    const data = [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park, New York No. 1 Lake Park",
        tags: ["nice", "developer"],
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 2 Lake Park, London No. 2 Lake Park",
        tags: ["loser"],
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
      {
        key: "4",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
      {
        key: "5",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
    ];

    const chartOption = {
      grid: {
        left: "60px", // 距离容器左侧的距离
        right: "20px", // 距离容器右侧的距离
        top: "10px", // 距离容器顶部的距离
        bottom: "40px", // 距离容器底部的距离
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
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
      if (this.myCharts.length < 2 || !this.myCharts.every((item) => item)) {
        const chartDomOne = document.getElementById(
          "online-top-search-chart-one"
        );
        const chartDomTwo = document.getElementById(
          "online-top-search-chart-two"
        );
        this.myCharts[0] = echarts.init(chartDomOne);
        this.myCharts[1] = echarts.init(chartDomTwo);
      }
      this.myCharts[0].setOption(this.chartOption);
      this.myCharts[1].setOption(this.chartOption);
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
      width: calc((100% - 24px) / 2);
    }
  }
  .online-top-search-content {
    height: 286px;
  }
}
</style>
