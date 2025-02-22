<template>
  <a-form-model
    ref="ruleForm"
    :model="ruleForm"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-model-item label="付款账户" prop="paymentAccount">
      <a-select
        v-model="ruleForm.paymentAccount"
        placeholder="my-admin-vue2@alipay.com"
      >
        <a-select-option value="my-admin-vue2@alipay.com">
          my-admin-vue2@alipay.com
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item label="收款账户" prop="receiverAccount">
      <a-input-group compact>
        <a-select style="width: 20%" default-value="支付宝">
          <a-select-option value="支付宝"> 支付宝 </a-select-option>
          <a-select-option value="微信"> 微信 </a-select-option>
        </a-select>
        <a-input v-model="ruleForm.receiverAccount" style="width: 80%" />
      </a-input-group>
    </a-form-model-item>
    <a-form-model-item label="收款人姓名" prop="receiver">
      <a-input v-model="ruleForm.receiver" :maxLength="20" />
    </a-form-model-item>
    <a-form-model-item label="转账金额" prop="transferAmount">
      <a-input
        v-model="ruleForm.transferAmount"
        type="number"
        :maxLength="20"
      />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 6 }">
      <a-button type="primary" @click="onSubmit"> 下一步 </a-button>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
import { mapState, mapMutations } from "vuex";

class CreateRuleForm {
  constructor() {
    // 付款账户
    this.paymentAccount = undefined;
    // 收款账户
    this.receiverAccount = "test@example.com";
    // 收款人姓名
    this.receiver = "Alex";
    // 转账金额
    this.transferAmount = "100.00";
  }
}

export default {
  data() {
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
      ruleForm: new CreateRuleForm(),
      rules: {
        paymentAccount: [
          {
            required: true,
            message: "请选择付款账户",
            trigger: "change",
          },
        ],
        receiverAccount: [
          {
            required: true,
            message: "请选择收款账户",
            trigger: "change",
          },
        ],
        receiver: [
          {
            required: true,
            message: "请输入收款人姓名",
            trigger: "change",
          },
        ],
        transferAmount: [
          {
            required: true,
            message: "请输入转账金额",
            trigger: "change",
          },
        ],
      },
    };
  },
  computed: {
    ...mapState("step", ["step", "transferInfo"]),
  },
  mounted() {
    if (this.transferInfo) {
      this.ruleForm = this.transferInfo;
    }
  },
  methods: {
    ...mapMutations("step", ["setStep", "setTransferInfo"]),
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.setTransferInfo(this.ruleForm);
          this.setStep(this.step + 1);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
  },
};
</script>
