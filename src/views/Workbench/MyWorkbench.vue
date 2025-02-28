<template>
  <div class="my-workbench">
    <div class="desc-cards">
      <a-skeleton
        class="desc-card"
        :class="{
          skeleton: loading,
        }"
        active
        :loading="loading"
      >
        <TotalSales class="desc-card" :info="info" />
      </a-skeleton>
      <a-skeleton
        class="desc-card"
        :class="{
          skeleton: loading,
        }"
        active
        :loading="loading"
      >
        <TotalVistors ref="refTotalVistors" class="desc-card" :info="info" />
      </a-skeleton>
      <a-skeleton
        class="desc-card"
        :class="{
          skeleton: loading,
        }"
        active
        :loading="loading"
      >
        <TotalOrders ref="refTotalOrders" class="desc-card" :info="info" />
      </a-skeleton>
      <a-skeleton
        class="desc-card"
        :class="{
          skeleton: loading,
        }"
        active
        :loading="loading"
      >
        <TotalProgress class="desc-card" :info="info" />
      </a-skeleton>
    </div>

    <a-skeleton
      class="sales-data-card"
      :class="{
        skeleton: loading,
      }"
      active
      :loading="loading"
    >
      <SalesDataCard class="sales-data-card" />
    </a-skeleton>

    <div class="info-cards">
      <a-skeleton
        class="info-card"
        :class="{
          skeleton: loading,
        }"
        active
        :loading="loading"
      >
        <OnlineTopSearch class="info-card" />
      </a-skeleton>
      <a-skeleton
        class="info-card"
        :class="{
          skeleton: loading,
        }"
        active
        :loading="loading"
      >
        <ProportionOfSales class="info-card" />
      </a-skeleton>
    </div>
  </div>
</template>

<script>
import SalesDataCard from "./components/SalesDataCard.vue";
import OnlineTopSearch from "./components/OnlineTopSearch.vue";
import ProportionOfSales from "./components/ProportionOfSales.vue";
import { getWorkbenchData } from "@/api/common";
import TotalSales from "./components/TotalSales.vue";
import TotalVistors from "./components/TotalVistors.vue";
import TotalOrders from "./components/TotalOrders.vue";
import TotalProgress from "./components/TotalProgress.vue";

class CreateInfo {
  constructor() {
    // 销售总额
    this.totalSales = 1021214;
    // 今日销售额
    this.todaySales = 24355;
    // 销售额增长率
    this.salesIncreasePrecent = 50;
    // 销售额下降率
    this.salesDecreasePrecent = 50;
    // 总访客数
    this.totalVistors = 830355;
    // 今日访客数
    this.todayVistors = 93036;
    // 7天访客数
    (this.past7daysVisitors = [
      {
        visitors: 85738,
      },
      {
        visitors: 11710,
      },
      {
        visitors: 19806,
      },
      {
        visitors: 57725,
      },
      {
        visitors: 60947,
      },
      {
        visitors: 65521,
      },
      {
        visitors: 18719,
      },
    ]),
      // 总订单数
      (this.totalOrders = 36394641);
    // 今日订单数
    this.todayOrders = 22320;
    // 7天订单数
    this.past7daysOrders = [
      {
        orders: 74753,
      },
      {
        orders: 94412,
      },
      {
        orders: 12363,
      },
      {
        orders: 19583,
      },
      {
        orders: 69487,
      },
      {
        orders: 16963,
      },
      {
        orders: 15375,
      },
    ];
    // 完成进度
    this.totalProgress = 76;
    // 今日进度
    this.todayProcess = 16;
  }
}

export default {
  name: "MyWorkbench",
  components: {
    SalesDataCard,
    OnlineTopSearch,
    ProportionOfSales,
    TotalSales,
    TotalVistors,
    TotalOrders,
    TotalProgress,
  },
  data() {
    return {
      info: new CreateInfo(),
      loading: true,
    };
  },
  mounted() {
    getWorkbenchData({}).then((res) => {
      if (res.code === 200) {
        this.info = res.data;

        setTimeout(() => {
          this.renderChart();
        });
      }
    });

    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
  methods: {
    renderChart() {
      if (this.$refs.refTotalVistors && this.$refs.refTotalOrders) {
        this.$refs.refTotalVistors.renderChart();
        this.$refs.refTotalOrders.renderChart();
      } else {
        setTimeout(() => {
          this.renderChart();
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.my-workbench {
  .desc-cards {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;

    .desc-card {
      width: calc((100% - 24px * 3) / 4);
      margin-right: 24px;
      margin-bottom: 24px;

      &:nth-child(4n) {
        margin-right: 0;
      }
    }
  }

  .sales-data-card {
    margin-bottom: 24px;
  }

  .info-cards {
    display: flex;
    align-items: center;
    width: 100%;

    .info-card {
      width: calc((100% - 24px * 1) / 2);
      margin-right: 24px;
      margin-bottom: 24px;

      &:nth-child(2n) {
        margin-right: 0;
      }
    }
  }
}
.skeleton {
  background-color: #ffffff;
  padding: 24px;
  border-radius: 10px;
  height: 100%;
}
</style>
