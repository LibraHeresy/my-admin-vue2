<template>
  <a-card style="border-radius: 10px" :bordered="false">
    <a-result
      class="my-body"
      status="500"
      title="500"
      sub-title="Sorry, the server is wrong."
    >
      <template #extra>
        <a-button type="primary" @click="$router.push({ path: '/' })">
          Back Home
        </a-button>
      </template>
    </a-result>
  </a-card>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped></style>
