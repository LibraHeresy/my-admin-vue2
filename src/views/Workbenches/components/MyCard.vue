<template>
  <div class="my-card">
    <div class="my-card_header">
      <div class="my-card_header-title">{{ title }}</div>
      <a-tooltip>
        <template slot="title"> {{ introduce }} </template>
        <a-icon class="my-card_header-icon" type="info-circle" />
      </a-tooltip>
    </div>
    <div class="my-card_content">
      <div class="my-card_content-number">
        <slot name="number">{{ number }}</slot>
      </div>
      <div class="my-card_content-info">
        <slot></slot>
      </div>
    </div>
    <div class="my-card_footer">
      <slot name="desc">{{ desc }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCard",
  props: {
    title: {
      type: String,
      default: "这是标题",
    },
    number: {
      type: Number,
      default: 0,
    },
    desc: {
      type: String,
      default: "这是描述",
    },
    introduce: {
      type: String,
      default: "这是介绍",
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.my-card {
  padding: 20px 24px 8px;
  background-color: #ffffff;
  border-radius: 10px;
  min-height: 180px;
  display: flex;
  flex-direction: column;

  .my-card_header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .my-card_header-title {
      color: rgba(0, 0, 0, 0.45);
      font-size: 14px;
      line-height: 22px;
    }
    .my-card_header-icon {
      font-size: 14px;
    }
  }
  .my-card_content {
    flex: 1;
    display: flex;
    flex-direction: column;

    .my-card_content-number {
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      white-space: nowrap;
      color: #000;
      margin-top: 4px;
      margin-bottom: 0;
      font-size: 30px;
      line-height: 38px;
      height: 38px;
    }
    .my-card_content-info {
      height: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
  }
  .my-card_footer {
    border-top: 1px solid #e8e8e8;
    padding-top: 9px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5;
  }
}
</style>
