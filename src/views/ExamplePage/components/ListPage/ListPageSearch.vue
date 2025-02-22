<template>
  <a-form-model
    ref="refRuleForm"
    :model="ruleForm"
    :label-col="layout.labelCol"
    :wrapper-col="layout.wrapperCol"
  >
    <a-row>
      <a-col :span="8">
        <a-form-model-item label="订单号" prop="orderNo">
          <a-input v-model="ruleForm.orderNo" placeholder="请输入订单号" />
        </a-form-model-item>
      </a-col>
      <a-col :span="8">
        <a-form-model-item label="订单状态" prop="orderStatus">
          <a-select v-model="ruleForm.orderStatus" placeholder="请选择订单状态">
            <a-select-option
              v-for="item in OrderStatusDict"
              :key="item.key"
              :value="item.value"
            >
              {{ item.value }}
            </a-select-option>
          </a-select>
        </a-form-model-item>
      </a-col>
      <template v-if="advanced">
        <a-col :span="8">
          <a-form-model-item label="订单类型" prop="orderType">
            <a-select v-model="ruleForm.orderType" placeholder="请选择订单类型">
              <a-select-option
                v-for="item in OrderTypeDict"
                :key="item.key"
                :value="item.value"
              >
                {{ item.value }}
              </a-select-option>
            </a-select>
          </a-form-model-item>
        </a-col>
        <a-col :span="8">
          <a-form-model-item label="工作人员" prop="worker">
            <a-input
              v-model="ruleForm.worker"
              placeholder="请输入工作人员姓名"
            />
          </a-form-model-item>
        </a-col>
        <a-col :span="8">
          <a-form-model-item label="支付渠道" prop="orderPayment">
            <a-select
              v-model="ruleForm.orderPayment"
              placeholder="请选择支付渠道"
            >
              <a-select-option
                v-for="item in OrderPayMentDict"
                :key="item.key"
                :value="item.value"
              >
                {{ item.value }}
              </a-select-option>
            </a-select>
          </a-form-model-item>
        </a-col>
      </template>

      <a-col :span="(!advanced && 8) || 24">
        <span
          :style="(advanced && { float: 'right', overflow: 'hidden' }) || {}"
        >
          <a-button type="primary" @click="handleSearch"> 查询 </a-button>
          <a-button style="margin-left: 8px" @click="handleReset">
            重置
          </a-button>
          <a @click="toggleAdvanced" style="margin-left: 8px">
            {{ advanced ? "收起" : "展开" }}
            <a-icon :type="advanced ? 'up' : 'down'" />
          </a>
        </span>
      </a-col>
    </a-row>
  </a-form-model>
</template>
<script>
import {
  OrderStatusDict,
  OrderTypeDict,
  OrderPayMentDict,
} from "../../configs/dict";

class CreateRuleForm {
  constructor() {
    // 订单号
    this.orderNo = "";
    // 订单状态
    this.orderStatus = undefined;
    // 订单类型
    this.orderType = undefined;
    // 工作人员
    this.worker = "";
    // 支付渠道
    this.orderPayment = undefined;
  }
}

export default {
  data() {
    return {
      OrderStatusDict,
      OrderTypeDict,
      OrderPayMentDict,

      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 17 },
      },
      ruleForm: new CreateRuleForm(),
      advanced: false,
    };
  },
  methods: {
    toggleAdvanced() {
      this.advanced = !this.advanced;
    },
    handleReset() {
      this.ruleForm = new CreateRuleForm();
      this.$emit("reset");
    },
    handleSearch() {
      this.$emit("search", { ...this.ruleForm });
    },
  },
};
</script>
<style lang="less" scoped>
.ant-form-item {
  width: 100%;
}
</style>
