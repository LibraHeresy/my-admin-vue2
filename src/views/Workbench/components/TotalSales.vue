<template>
  <MyCard title="销售总额">
    <template slot="number">
      <span>￥{{ info.totalSales.toLocaleString() }}</span>
    </template>
    <div style="margin-bottom: 10px; display: flex">
      <div>
        <span style="font-size: 14px"> 新增 {{ salesIncreasePercent }}% </span>
        <a-icon style="color: red; font-size: 14px" type="caret-up" />
      </div>
      <div style="margin-left: 24px">
        <span style="font-size: 14px"> 下降 {{ salesIncreasePercent }}% </span>
        <a-icon style="color: green; font-size: 14px" type="caret-down" />
      </div>
    </div>
    <template slot="desc">
      <span>每日销售额 ￥{{ info.todaySales.toLocaleString() }}</span>
    </template>
  </MyCard>
</template>

<script>
import MyCard from "./MyCard.vue";

export default {
  name: "TotalSales",
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
    return {};
  },
  computed: {
    salesIncreasePercent() {
      return ((this.info.todaySales / this.info.totalSales) * 100).toFixed(2);
    },
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
