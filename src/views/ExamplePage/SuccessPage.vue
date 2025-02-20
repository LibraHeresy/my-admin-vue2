<template>
  <a-card style="border-radius: 10px" :bordered="false">
    <a-result
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      sub-title="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    >
      <div>
        <div class="step-title">User Info</div>
        <a-steps :current="1">
          <a-popover
            slot="progressDot"
            slot-scope="{ index, status, prefixCls }"
          >
            <template slot="content">
              <span>step {{ index }} status: {{ status }}</span>
            </template>
            <span :class="`${prefixCls}-icon-dot`" />
          </a-popover>
          <a-step title="Finished" description="You can hover on the dot." />
          <a-step title="In Progress" description="You can hover on the dot." />
          <a-step title="Waiting" description="You can hover on the dot." />
          <a-step title="Waiting" description="You can hover on the dot." />
        </a-steps>
      </div>
      <template #extra>
        <a-button
          key="list"
          type="primary"
          @click="() => $router.push({ name: 'ListPage' })"
        >
          Back List
        </a-button>
        <a-button
          key="home"
          @click="() => $router.push({ path: '/workbenches' })"
        >
          Back Home
        </a-button>
      </template>
    </a-result>
  </a-card>
</template>

<script>
export default {
  name: "SuccessPage",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.step-title {
  color: rgba(0, 0, 0, 0.85);
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 28px;
}
</style>
