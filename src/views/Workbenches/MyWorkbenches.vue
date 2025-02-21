<template>
  <div class="my-workbenches">
    <div class="desc-cards">
      <MyCard
        class="desc-card"
        title="销售总额"
        :number="info.totalSales"
        desc="每日销售额 ￥ 23456"
      />
      <MyCard
        class="desc-card"
        title="总访客数"
        :number="info.totalVisitors"
        desc="每日访客数 23456"
      />
      <MyCard
        class="desc-card"
        title="总订单数"
        :number="info.totalOrders"
        desc="成单率 60%"
      />
      <MyCard
        class="desc-card"
        title="完成进度"
        :number="info.totalProgress"
        desc="今日提升 20%"
      />
    </div>

    <SalesDataCard class="sales-data-card" />

    <div class="info-cards">
      <OnlineTopSearch class="info-card" />
      <ProportionOfSales class="info-card" />
    </div>
  </div>
</template>

<script>
import MyCard from "./components/MyCard.vue";
import SalesDataCard from "./components/SalesDataCard.vue";
import OnlineTopSearch from "./components/OnlineTopSearch.vue";
import ProportionOfSales from "./components/ProportionOfSales.vue";
import { getWorkbenchesData } from "@/api/common";

class CreateInfo {
  constructor() {
    // 销售总额
    this.totalSales = "";
    // 今日销售额
    this.todaySales = "";
    // 总访客数
    this.totalVisitors = "";
    // 今日访客数
    this.todayVisitors = "";
    // 总订单数
    this.totalOrders = "";
    // 今日订单数
    this.todayOrders = "";
    // 完成进度
    this.totalProgress = "";
    // 今日完成进度
    this.todayProcess = "";
  }
}

export default {
  name: "MyWorkbenches",
  components: {
    MyCard,
    SalesDataCard,
    OnlineTopSearch,
    ProportionOfSales,
  },
  data() {
    return {
      info: new CreateInfo(),
    };
  },
  mounted() {
    getWorkbenchesData({}).then((res) => {
      if (res.code === 200) {
        this.info = res.data;
      }
    });
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.my-workbenches {
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
</style>
