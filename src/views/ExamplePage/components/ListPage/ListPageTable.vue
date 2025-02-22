<template>
  <div>
    <div style="margin-bottom: 16px">
      <a-button
        type="primary"
        icon="plus"
        :disabled="hasSelected"
        @click="handleAdd"
      >
        新建
      </a-button>
      <a-popconfirm
        title="你确定要删除选择的订单吗?"
        ok-text="确定"
        cancel-text="取消"
        :disabled="!hasSelected"
        @confirm="handleDelete"
      >
        <a-button
          style="margin-left: 12px"
          type="danger"
          icon="close"
          :disabled="!hasSelected"
        >
          删除
        </a-button>
      </a-popconfirm>
      <a-button style="margin-left: 12px" @click="handleResetSelected">
        重置选择
      </a-button>
    </div>
    <div style="margin-bottom: 16px">
      <a-alert :message="message" type="info" show-icon />
    </div>
    <a-table
      :row-selection="{
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange,
      }"
      :columns="columns"
      :data-source="data"
      :loading="loading"
      rowKey="orderNo"
    >
      <template slot="index" slot-scope="text, record, index">
        <span> {{ index + 1 }} </span>
      </template>
    </a-table>

    <AddOrderModal
      ref="refAddOrderModal"
      @submit="
        (value) => {
          data.unshift(value);
        }
      "
    />
  </div>
</template>
<script>
import { ListPageColumns } from "../../configs/config";
import { ListPageData } from "../../configs/data";
import AddOrderModal from "./AddOrderModal.vue";

export default {
  name: "ListPageTable",
  components: {
    AddOrderModal,
  },
  data() {
    return {
      data: [...ListPageData],
      columns: [...ListPageColumns],
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
    };
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    },
    message() {
      return `${this.selectedRowKeys.length || 0} 条数据已选择`;
    },
  },
  methods: {
    onSelectChange(selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys;
    },
    handleResetSelected() {
      this.selectedRowKeys = [];
    },
    handleAdd() {
      this.$refs.refAddOrderModal.showModal();
    },
    handleDelete() {
      this.data = this.data.filter(
        (item) => !this.selectedRowKeys.includes(item.orderNo)
      );
    },
    handleSearch(value) {
      this.loading = true;
      setTimeout(() => {
        Object.keys(value).map((key) => {
          if (value[key]) {
            if (typeof value[key] === "string") {
              this.data = this.data.filter((item) =>
                item[key].includes(value[key])
              );
            } else if (typeof value[key] === "number") {
              this.data = this.data.filter((item) => item[key] === value[key]);
            }
          }
        });
        this.loading = false;
      }, 1000);
    },
    handleReset() {
      this.data = [...ListPageData];
    },
  },
};
</script>
