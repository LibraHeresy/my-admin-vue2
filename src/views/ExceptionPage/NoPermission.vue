<template>
  <a-card style="border-radius: 10px" :bordered="false">
    <a-result
      class="my-body"
      status="403"
      title="403"
      sub-title="Sorry, you are not authorized to access this page."
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
