<template>
  <div class="personal-info">
    <a-form-model
      ref="refRuleForm"
      layout="vertical"
      :model="ruleForm"
      :rules="isEdit ? rules : {}"
      :label-col="layout.labelCol"
      :wrapper-col="layout.wrapperCol"
    >
      <template v-if="isEdit">
        <a-form-model-item label="昵称" prop="nickname">
          <a-input
            v-model="ruleForm.nickname"
            placeholder="请输入昵称"
            :maxLength="20"
          />
        </a-form-model-item>
        <a-form-model-item label="简介" prop="profile">
          <a-textarea
            v-model="ruleForm.profile"
            style="height: 100px"
            placeholder="请输入简介"
            :maxLength="500"
          />
        </a-form-model-item>
        <a-form-model-item label="邮箱" prop="email">
          <a-input
            v-model="ruleForm.email"
            placeholder="请输入邮箱"
            :maxLength="20"
          />
        </a-form-model-item>
      </template>

      <template v-else>
        <a-form-model-item label="昵称" prop="nickname">
          {{ info.nickname }}
        </a-form-model-item>
        <a-form-model-item label="简介" prop="profile">
          {{ info.profile }}
        </a-form-model-item>
        <a-form-model-item label="邮箱" prop="email">
          {{ info.email }}
        </a-form-model-item>
      </template>

      <a-form-model-item :wrapper-col="{ span: 14, offset: 0 }">
        <template v-if="isEdit">
          <a-button type="primary" @click="onSubmit"> 提交 </a-button>
          <a-button style="margin-left: 10px" @click="onCancel">
            取消
          </a-button>
        </template>

        <template v-else>
          <a-button type="primary" @click="toEdit"> 修改 </a-button>
        </template>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
class CreateInfo {
  constructor() {
    this.nickname = "战斗机"; // 昵称
    this.profile = "飞一般的感觉"; // 个人简介
    this.email = "zhandouji12138@qq.com"; // 邮箱
  }
}

class CreateRuleForm {
  constructor() {
    this.nickname = ""; // 昵称
    this.profile = ""; // 个人简介
    this.email = ""; // 邮箱
  }
}

export default {
  name: "PersonInfo",
  data() {
    return {
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 24 },
      },
      info: new CreateInfo(),
      ruleForm: new CreateRuleForm(),
      rules: {
        nickname: [
          {
            required: true,
            message: "请输入昵称",
            trigger: "change",
          },
        ],
        profile: [
          {
            required: true,
            message: "请输入简介",
            trigger: "change",
          },
        ],
        email: [
          {
            required: true,
            message: "请输入邮箱",
            trigger: "change",
          },
        ],
      },
      isEdit: false,
    };
  },
  methods: {
    toEdit() {
      this.isEdit = true;
      this.ruleForm = { ...this.info };
    },
    onSubmit() {
      this.$refs.refRuleForm.validate((valid) => {
        if (valid) {
          this.isEdit = false;
          this.info = { ...this.ruleForm };
        }
      });
    },
    onCancel() {
      this.$refs.refRuleForm.resetFields();
      this.isEdit = false;
      this.ruleForm = { ...this.info };
    },
  },
};
</script>

<style lang="less" scoped>
.personal-info {
  width: 700px;
}
</style>
