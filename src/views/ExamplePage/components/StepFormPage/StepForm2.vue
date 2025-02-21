<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-model-item ref="name" label="Activity name" prop="name">
      123
    </a-form-model-item>
    <a-form-model-item label="Activity zone" prop="region">
      123
    </a-form-model-item>
    <a-form-model-item label="Activity time" prop="date1">
      123
    </a-form-model-item>
    <a-form-model-item label="Instant delivery" prop="delivery">
      123
    </a-form-model-item>
    <a-form-model-item label="Activity type" prop="type">
      123
    </a-form-model-item>
    <a-form-model-item label="Resources" prop="resource">
      123
    </a-form-model-item>
    <a-form-model-item label="Activity form" prop="desc">
      123
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 6 }">
      <a-button type="primary" @click="onSubmit"> Create </a-button>
      <a-button style="margin-left: 10px" @click="resetForm"> Reset </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
export default {
  data() {
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
      other: "",
      form: {
        name: "",
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {},
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          alert("submit!");
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
