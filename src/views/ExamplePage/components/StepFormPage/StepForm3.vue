<template>
  <div class="">
    <a-result title="转账成功">
      <template #extra>
        <a-descriptions :column="1" bordered size="small">
          <a-descriptions-item label="付款账户">
            {{ transferInfo.paymentAccount }}
          </a-descriptions-item>
          <a-descriptions-item label="收款账户">
            {{ transferInfo.receiverAccount }}
          </a-descriptions-item>
          <a-descriptions-item label="收款人姓名">
            {{ transferInfo.receiver }}
          </a-descriptions-item>
          <a-descriptions-item label="转账金额">
            {{ transferInfo.transferAmount }}
          </a-descriptions-item>
        </a-descriptions>
        <a-button
          style="margin-top: 24px"
          key="console"
          type="primary"
          @click="() => $router.push({ path: '/' })"
        >
          确定
        </a-button>
      </template>
    </a-result>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "StepForm3",
  data() {
    return {};
  },
  computed: {
    ...mapState("step", ["transferInfo"]),
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
