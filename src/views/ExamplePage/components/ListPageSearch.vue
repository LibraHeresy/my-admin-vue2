<template>
  <a-form-model
    ref="refRuleForm"
    :model="ruleForm"
    :label-col="layout.labelCol"
    :wrapper-col="layout.wrapperCol"
  >
    <a-row>
      <a-col :span="8">
        <a-form-model-item label="Field A" prop="fieldA">
          <a-input v-model="ruleForm.fieldA" placeholder="input placeholder" />
        </a-form-model-item>
      </a-col>
      <a-col :span="8">
        <a-form-model-item label="Field B" prop="fieldB">
          <a-input v-model="ruleForm.fieldB" placeholder="input placeholder" />
        </a-form-model-item>
      </a-col>
      <template v-if="advanced">
        <a-col :span="8">
          <a-form-model-item label="Field C" prop="fieldC">
            <a-input
              v-model="ruleForm.fieldC"
              placeholder="input placeholder"
            />
          </a-form-model-item>
        </a-col>
        <a-col :span="8">
          <a-form-model-item label="Field D" prop="fieldD">
            <a-input
              v-model="ruleForm.fieldD"
              placeholder="input placeholder"
            />
          </a-form-model-item>
        </a-col>
        <a-col :span="8">
          <a-form-model-item label="Field E" prop="fieldE">
            <a-input
              v-model="ruleForm.fieldE"
              placeholder="input placeholder"
            />
          </a-form-model-item>
        </a-col>
        <a-col :span="8">
          <a-form-model-item label="Field F" prop="fieldF">
            <a-input
              v-model="ruleForm.fieldF"
              placeholder="input placeholder"
            />
          </a-form-model-item>
        </a-col>
      </template>

      <a-col :span="(!advanced && 8) || 24">
        <span
          :style="(advanced && { float: 'right', overflow: 'hidden' }) || {}"
        >
          <a-button type="primary" @click="$refs.table.refresh(true)">
            查询
          </a-button>
          <a-button style="margin-left: 8px" @click="() => (queryParam = {})">
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
class CreateRuleForm {
  constructor() {
    this.fieldA = "";
    this.fieldB = "";
    this.fieldC = "";
    this.fieldD = "";
    this.fieldE = "";
    this.fieldG = "";
  }
}

export default {
  data() {
    return {
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
  },
};
</script>
<style lang="less" scoped>
.ant-form-item {
  width: 100%;
}
</style>
