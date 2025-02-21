<template>
  <div>
    <WarehouseManage style="margin-bottom: 24px" />
    <TaskManage style="margin-bottom: 24px" />
    <PersonList />
  </div>
</template>

<script>
import WarehouseManage from "./components/AdvancedFormPage/WarehouseManage.vue";
import TaskManage from "./components/AdvancedFormPage/TaskManage.vue";
import PersonList from "./components/AdvancedFormPage/PersonList.vue";

export default {
  name: "AdvancedFormPage",
  components: {
    WarehouseManage,
    TaskManage,
    PersonList,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
