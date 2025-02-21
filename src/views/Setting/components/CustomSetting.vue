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
            :checked="theme === 'dark'"
            @change="handleSwitchChange"
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
import { mapState, mapMutations } from "vuex";

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
  computed: {
    ...mapState("theme", ["theme"]),
  },
  methods: {
    ...mapMutations("theme", ["setTheme"]),
    handleSwitchChange(checked) {
      if (checked) {
        this.setTheme("dark");
      } else {
        this.setTheme("light");
      }
    },
  },
};
</script>

<style lang="less" scoped></style>
