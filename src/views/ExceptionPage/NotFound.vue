<template>
  <a-card style="border-radius: 10px" :bordered="false">
    <a-result
      class="my-body"
      status="404"
      title="404"
      sub-title="Sorry, the page you visited does not exist."
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
