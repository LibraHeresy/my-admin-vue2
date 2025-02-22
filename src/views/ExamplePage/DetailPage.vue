<template>
  <a-card style="border-radius: 10px" :bordered="false">
    <a-list item-layout="horizontal">
      <a-list-item>
        <a-list-item-meta>
          <template slot="description">
            <a-descriptions title="订单信息">
              <a-descriptions-item label="订单号">
                {{ order.orderNo }}
              </a-descriptions-item>
              <a-descriptions-item label="订单金额">
                {{ order.orderAmount }}
              </a-descriptions-item>
              <a-descriptions-item label="订单状态">
                {{ order.orderStatus }}
              </a-descriptions-item>
              <a-descriptions-item label="下单日期">
                {{ order.orderDate }}
              </a-descriptions-item>
              <a-descriptions-item label="订单类型">
                {{ order.orderType }}
              </a-descriptions-item>
            </a-descriptions>
          </template>
        </a-list-item-meta>
      </a-list-item>
      <a-list-item>
        <a-list-item-meta>
          <template slot="description">
            <a-descriptions title="其他信息">
              <a-descriptions-item label="工作人员">
                {{ order.worker }}
              </a-descriptions-item>
              <a-descriptions-item label="支付渠道">
                {{ order.orderPayment }}
              </a-descriptions-item>
              <a-descriptions-item label="备注">
                {{ order.desc }}
              </a-descriptions-item>
            </a-descriptions>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </a-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DetailPage",
  data() {
    return {};
  },
  computed: {
    ...mapState("order", ["order"]),
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
