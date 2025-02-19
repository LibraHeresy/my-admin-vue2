<template>
  <a-card
    style="width: 100%; border-radius: 10px"
    :tab-list="tabList"
    :active-tab-key="tab"
    @tabChange="(key) => onTabChange(key)"
  >
    <SalesData ref="refSalesData" v-if="tab === 'sales'" />
    <SalesData ref="refSalesData" v-if="tab === 'visits'" />

    <div slot="tabBarExtraContent">
      <a
        v-for="item in dateList"
        :key="item.key"
        class="mr20"
        href="#"
        @click="() => handleDateClick(item.key)"
      >
        {{ item.value }}
      </a>
      <a-range-picker v-model="dateRange" :format="dateFormat" />
    </div>
  </a-card>
</template>

<script>
import SalesData from "./SalesData.vue";
import moment from "moment";

export default {
  name: "SalesDataCard",
  components: {
    SalesData,
  },
  data() {
    return {
      tabList: [
        {
          key: "sales",
          tab: "销售",
        },
        {
          key: "visits",
          tab: "访问",
        },
      ],
      tab: "sales",
      dateList: [
        {
          key: "前6月",
          value: "前6月",
        },
        {
          key: "前3月",
          value: "前3月",
        },
        {
          key: "前30天",
          value: "前30天",
        },
        {
          key: "前7天",
          value: "前7天",
        },
      ],
      dateRange: [],
      dateFormat: "YYYY-MM-DD",
    };
  },
  mounted() {
    this.onTabChange(this.tab);
  },
  methods: {
    onTabChange(key) {
      this.tab = key;

      setTimeout(() => {
        this.$refs.refSalesData.renderChart();
      });
    },
    onDateChange() {},
    handleDateClick(key) {
      this.dateRange[1] = moment().format(this.dateFormat);

      switch (key) {
        case "前6月":
          this.dateRange[0] = moment()
            .subtract(6, "months")
            .format(this.dateFormat);
          break;
        case "前3月":
          this.dateRange[0] = moment()
            .subtract(3, "months")
            .format(this.dateFormat);
          break;
        case "前30天":
          this.dateRange[0] = moment()
            .subtract(30, "days")
            .format(this.dateFormat);
          break;
        case "前7天":
          this.dateRange[0] = moment()
            .subtract(7, "days")
            .format(this.dateFormat);
          break;
        default:
          break;
      }

      this.dateRange = [...this.dateRange];
    },
  },
};
</script>

<style lang="less" scoped>
.mr20 {
  margin-right: 20px;
}
</style>
