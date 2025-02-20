<template>
  <div class="my-workbenches">
    <div class="desc-cards">
      <MyCard class="desc-card" title="我的待办" :number="1" desc="这是描述" />
      <MyCard class="desc-card" title="我的待办" :number="1" desc="这是描述" />
      <MyCard class="desc-card" title="我的待办" :number="1" desc="这是描述" />
      <MyCard class="desc-card" title="我的待办" :number="1" desc="这是描述" />
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

export default {
  name: "MyWorkbenches",
  components: {
    MyCard,
    SalesDataCard,
    OnlineTopSearch,
    ProportionOfSales,
  },
  data() {
    return {};
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
