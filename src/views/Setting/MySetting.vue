<template>
  <div class="my-setting">
    <a-menu
      class="menus"
      :default-selected-keys="[menus[0]?.key]"
      :mode="mode"
      :theme="theme"
      :selectedKeys="[activeKey]"
      @click="handleMenuSelect"
    >
      <a-menu-item v-for="item in menus" :key="item.key">
        <a-icon :type="item.icon" />
        {{ item.title }}
      </a-menu-item>
    </a-menu>
    <div class="content">
      <h2>{{ menu.title || "" }}</h2>
      <Component :is="menu.components" />
    </div>
  </div>
</template>

<script>
import PersonInfo from "./components/PersonInfo.vue";
import CustomSetting from "./components/CustomSetting.vue";

export default {
  name: "MySetting",
  components: {
    PersonInfo,
    CustomSetting,
  },
  data() {
    return {
      mode: "inline",
      theme: "light",
      activeKey: "1",
      menus: [
        {
          key: "1",
          icon: "user",
          title: "个人信息",
          components: "PersonInfo",
        },
        {
          key: "2",
          icon: "setting",
          title: "自定义设置",
          components: "CustomSetting",
        },
      ],
    };
  },
  computed: {
    menu() {
      return this.menus.find((item) => item.key === this.activeKey) || {};
    },
  },
  methods: {
    handleMenuSelect(e) {
      this.activeKey = e.key;
    },
  },
};
</script>

<style lang="less" scoped>
.my-setting {
  background-color: #ffffff;
  padding: 24px 0px;
  border-radius: 10px;
  min-height: 500px;
  display: flex;

  .menus {
    width: 256px;
    flex-shrink: 0;
  }
  .content {
    flex: 1;
    padding: 0px 36px;
  }
}
</style>
