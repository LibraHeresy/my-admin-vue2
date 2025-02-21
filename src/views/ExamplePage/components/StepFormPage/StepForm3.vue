<template>
  <div class="">
    <a-result title="Your operation has been executed">
      <template #extra>
        <a-descriptions :column="1" bordered size="small">
          <a-descriptions-item label="UserName">
            Zhou Maomao
          </a-descriptions-item>
          <a-descriptions-item label="Telephone">
            1810000000
          </a-descriptions-item>
          <a-descriptions-item label="Live">
            Hangzhou, Zhejiang
          </a-descriptions-item>
          <a-descriptions-item label="Remark"> empty </a-descriptions-item>
        </a-descriptions>
        <a-button style="margin-top: 24px" key="console" type="primary">
          确定
        </a-button>
      </template>
    </a-result>
  </div>
</template>

<script>
export default {
  name: "StepForm3",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
