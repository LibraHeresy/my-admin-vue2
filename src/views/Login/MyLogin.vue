<template>
  <div class="my-login">
    <div class="login-form">
      <div class="title">My-Admin-Vue2</div>
      <a-tabs
        default-active-key="1"
        size="large"
        :tabBarStyle="{
          textAlign: 'center',
          borderBottom: 'unset',
        }"
      >
        <a-tab-pane key="1" tab="账号登录">
          <a-form-model
            ref="refRuleForm"
            :model="ruleForm"
            :rules="rules"
            :label-col="layout.labelCol"
            :wrapper-col="layout.wrapperCol"
          >
            <a-form-model-item has-feedback prop="account">
              <a-input
                v-model="ruleForm.account"
                size="large"
                type="text"
                autocomplete="off"
                :maxLength="20"
              >
                <a-icon slot="prefix" type="user" />
              </a-input>
            </a-form-model-item>
            <a-form-model-item has-feedback prop="password">
              <a-input
                v-model="ruleForm.password"
                size="large"
                type="password"
                autocomplete="off"
                :maxLength="20"
              >
                <a-icon slot="prefix" type="lock" />
              </a-input>
            </a-form-model-item>
          </a-form-model>
        </a-tab-pane>
      </a-tabs>
      <a-button
        class="login-button"
        type="primary"
        size="large"
        @click="submitForm()"
      >
        登录
      </a-button>
    </div>
  </div>
</template>

<script>
class CreateRuleForm {
  constructor() {
    this.account = "";
    this.password = "";
  }
}

export default {
  name: "MyLogin",
  data() {
    return {
      ruleForm: new CreateRuleForm(),
      layout: {
        labelCol: { span: 0 },
        wrapperCol: { span: 24 },
      },
      rules: {
        account: [
          {
            max: 20,
            required: true,
            message: "请输入账号",
            trigger: "change",
          },
        ],
        password: [
          {
            max: 20,
            required: true,
            message: "请输入密码",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.refRuleForm.validate((valid) => {
        if (valid) {
          localStorage.setItem("token", "123");
          this.$router.push({
            path: "/",
          });
        } else {
          this.$notification.error({
            message: "登录失败",
            description: "账号/密码错误",
          });
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.my-login {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 200px;
  background: url("../../assets/background.svg");

  .title {
    font-size: 33px;
    color: rgba(0, 0, 0, 0.85);
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    font-weight: 600;
    position: relative;
    top: 2px;
    text-align: center;
  }
  .login-form {
    height: max-content;
    width: 450px;
    background-color: #ffffff;
    padding: 40px 40px 60px 40px;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    .login-button {
      width: 100%;
    }
  }
}
</style>
