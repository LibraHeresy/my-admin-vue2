<template>
  <a-card style="border-radius: 10px" :bordered="false">
    <a-result
      status="success"
      title="恭喜你成功订购本商品！"
      sub-title="订单号: 20200808-1111 虚拟商品 5 分钟后到账"
    >
      <div>
        <div class="step-title">订单进度</div>
        <a-steps :current="0">
          <a-step title="待入库" description="商品待入库" />
          <a-step title="待发货" description="商品待发货" />
          <a-step title="已发货" description="商品已发货" />
          <a-step title="已签收" description="商品已签收" />
        </a-steps>
      </div>
      <template #extra>
        <a-button
          key="list"
          type="primary"
          @click="() => $router.push({ name: 'ListPage' })"
        >
          返回列表
        </a-button>
        <a-button
          key="home"
          @click="() => $router.push({ path: '/workbenches' })"
        >
          返回工作台
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
