<template>
  <MyCard title="完成进度">
    <template slot="number">
      <span>{{ info.totalProgress }}%</span>
    </template>
    <a-progress
      style="margin-bottom: 10px"
      :percent="info.totalProgress"
      :show-info="false"
      strokeColor="#748EDE"
    />
    <template slot="desc">
      <span>今日进度 {{ info.todayProcess }}%</span>
    </template>
  </MyCard>
</template>

<script>
import MyCard from "./MyCard.vue";

export default {
  name: "TotalProgress",
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
  methods: {},
};
</script>

<style lang="less" scoped></style>
