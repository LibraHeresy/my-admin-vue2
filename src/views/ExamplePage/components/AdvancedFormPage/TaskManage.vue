<template>
  <a-card title="任务管理" style="border-radius: 10px" :bordered="false">
    <a-form-model
      ref="ruleForm"
      layout="vertical"
      :model="form"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-row>
        <a-col :span="8">
          <a-form-model-item label="Activity form" prop="desc">
            <a-input v-model="form.desc" />
          </a-form-model-item>
        </a-col>
        <a-col :span="8">
          <a-form-model-item label="Activity form" prop="desc">
            <a-input v-model="form.desc" />
          </a-form-model-item>
        </a-col>
        <a-col :span="8">
          <a-form-model-item label="Activity form" prop="desc">
            <a-input v-model="form.desc" />
          </a-form-model-item>
        </a-col>
        <a-col :span="8">
          <a-form-model-item label="Activity form" prop="desc">
            <a-input v-model="form.desc" />
          </a-form-model-item>
        </a-col>
        <a-col :span="8">
          <a-form-model-item label="Activity form" prop="desc">
            <a-input v-model="form.desc" />
          </a-form-model-item>
        </a-col>
        <a-col :span="8">
          <a-form-model-item label="Activity form" prop="desc">
            <a-input v-model="form.desc" />
          </a-form-model-item>
        </a-col>
      </a-row>
    </a-form-model>
  </a-card>
</template>
<script>
export default {
  data() {
    return {
      labelCol: { span: 20 },
      wrapperCol: { span: 20 },
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
      rules: {
        name: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
        ],
        region: [
          {
            required: true,
            message: "Please select Activity zone",
            trigger: "change",
          },
        ],
        date1: [
          { required: true, message: "Please pick a date", trigger: "change" },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "Please select at least one activity type",
            trigger: "change",
          },
        ],
        resource: [
          {
            required: true,
            message: "Please select activity resource",
            trigger: "change",
          },
        ],
        desc: [
          {
            required: true,
            message: "Please input activity form",
            trigger: "blur",
          },
        ],
      },
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
