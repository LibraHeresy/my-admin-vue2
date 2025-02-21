<template>
  <a-card style="border-radius: 10px" :bordered="false">
    <ListPageSearch />
    <ListPageTable />
  </a-card>
</template>

<script>
import ListPageSearch from "./components/ListPage/ListPageSearch.vue";
import ListPageTable from "./components/ListPage/ListPageTable.vue";

export default {
  name: "ListPage",
  components: {
    ListPageSearch,
    ListPageTable,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.list-page {
  border-radius: 10px;
}
</style>
