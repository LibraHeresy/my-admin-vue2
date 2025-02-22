<template>
  <a-modal width="800px" v-model="visible" title="新增订单">
    <div>
      <a-form-model
        ref="refRuleForm"
        layout="vertical"
        :model="ruleForm"
        :rules="rules"
        :label-col="layout.labelCol"
        :wrapper-col="layout.wrapperCol"
      >
        <a-form-model-item label="订单金额" prop="orderAmount">
          <a-input
            v-model="ruleForm.orderAmount"
            placeholder="请输入订单金额"
            type="number"
          />
        </a-form-model-item>
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
        <a-form-model-item label="工作人员" prop="worker">
          <a-input v-model="ruleForm.worker" placeholder="请输入工作人员姓名" />
        </a-form-model-item>
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
        <a-form-model-item label="备注" prop="desc">
          <MyEditor v-model="ruleForm.desc" />
        </a-form-model-item>
      </a-form-model>
    </div>
    <template slot="footer">
      <a-button key="back" @click="handleCancel"> 关闭 </a-button>
      <a-button
        key="submit"
        type="primary"
        :loading="loading"
        @click="handleSubmit"
      >
        提交
      </a-button>
    </template>
  </a-modal>
</template>

<script>
import { OrderTypeDict, OrderPayMentDict } from "../../configs/dict";
import MyEditor from "@/components/MyEditor.vue";
import moment from "moment";

class CreateRuleForm {
  constructor() {
    // 订单金额
    this.orderAmount = undefined;
    // 订单类型
    this.orderType = undefined;
    // 工作人员
    this.worker = "";
    // 支付渠道
    this.orderPayment = undefined;
    // 备注
    this.desc = "";
  }
}

export default {
  name: "AddOrderModal",
  components: {
    MyEditor,
  },
  data() {
    return {
      OrderTypeDict,
      OrderPayMentDict,

      visible: false,
      loading: false,
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 24 },
      },
      ruleForm: new CreateRuleForm(),
      rules: {
        orderAmount: [
          {
            required: true,
            message: "请输入订单金额",
            trigger: "change",
          },
        ],
        orderType: [
          {
            required: true,
            message: "请选择订单类型",
            trigger: "change",
          },
        ],
        worker: [
          {
            required: true,
            message: "请输入工作人员姓名",
            trigger: "change",
          },
        ],
        orderPayment: [
          {
            required: true,
            message: "请选择支付渠道",
            trigger: "change",
          },
        ],
        desc: [
          {
            required: true,
            message: "请输入备注",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleSubmit() {
      this.$refs.refRuleForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.visible = false;
            this.ruleForm.orderStatus = "待支付";
            this.ruleForm.orderAmount = Number(
              this.ruleForm.orderAmount
            ).toFixed(2);
            this.ruleForm.orderDate = moment().format("YYYY-MM-DD");
            this.ruleForm.orderNo = `${moment().format(
              "YYYYMMDD"
            )}-${Math.floor(Math.random() * 7000 + 1000)}`;
            this.$emit("submit", { ...this.ruleForm });
            this.ruleForm = new CreateRuleForm();
          }, 1000);
        } else {
          return false;
        }
      });
    },
    handleCancel() {
      this.visible = false;
    },
  },
};
</script>
