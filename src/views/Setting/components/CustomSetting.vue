<template>
  <div class="custom-setting">
    <a-list item-layout="horizontal">
      <a-list-item>
        <a-list-item-meta title="风格配色" description="整体风格配色设置">
        </a-list-item-meta>
        <template slot="extra">
          <a-switch
            checked-children="暗色"
            un-checked-children="浅色"
            default-checked
          />
        </template>
      </a-list-item>
      <a-list-item>
        <a-list-item-meta title="主题色" description="页面风格配色设置">
        </a-list-item-meta>
        <template slot="extra">
          <ColorPicker />
        </template>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import ColorPicker from "@/components/ColorPicker";

export default {
  name: "CustomSetting",
  components: {
    ColorPicker,
  },
  data() {
    return {
      themeColor: "#ffffff",
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
