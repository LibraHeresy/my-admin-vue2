<template>
  <a-card style="border-radius: 10px" :bordered="false">
    <ListPageSearch @search="handleSearch" @reset="handleReset" />
    <ListPageTable ref="refListPageTable" />
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
  methods: {
    handleSearch(value) {
      this.$refs.refListPageTable.handleSearch(value);
    },
    handleReset() {
      this.$refs.refListPageTable.handleReset();
    },
  },
};
</script>

<style lang="less" scoped>
.list-page {
  border-radius: 10px;
}
</style>
