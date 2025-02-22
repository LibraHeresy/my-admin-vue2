<template>
  <a-form-model
    ref="ruleForm"
    :model="ruleForm"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-model-item label="付款账户" prop="paymentAccount">
      <span>{{ transferInfo.paymentAccount }}</span>
    </a-form-model-item>
    <a-form-model-item label="收款账户" prop="receiverAccount">
      <span>{{ transferInfo.receiverAccount }}</span>
    </a-form-model-item>
    <a-form-model-item label="收款人姓名" prop="receiver">
      <span>{{ transferInfo.receiver }}</span>
    </a-form-model-item>
    <a-form-model-item label="转账金额" prop="transferAmount">
      <span>{{ transferInfo.transferAmount }}</span>
    </a-form-model-item>
    <a-form-model-item label="支付密码" prop="paySecret">
      <a-input v-model="ruleForm.paySecret" type="password" :maxLength="20" />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 6 }">
      <a-button type="default" @click="prevStep"> 上一步 </a-button>
      <a-button style="margin-left: 10px" type="primary" @click="onSubmit">
        下一步
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
import { mapState, mapMutations } from "vuex";

class CreateRuleForm {
  constructor() {
    // 付款账户
    this.paySecret = "123456";
  }
}
export default {
  data() {
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
      info: {},
      ruleForm: new CreateRuleForm(),
      rules: {
        paySecret: [
          {
            required: true,
            message: "请输入支付密码",
            trigger: "change",
          },
        ],
      },
    };
  },
  computed: {
    ...mapState("step", ["step", "transferInfo"]),
  },
  methods: {
    ...mapMutations("step", ["setStep"]),
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
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
    prevStep() {
      this.setStep(this.step - 1);
    },
  },
};
</script>
