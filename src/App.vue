<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view />
    </div>
  </a-config-provider>
</template>

<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import enUS from "ant-design-vue/lib/locale-provider/en_US";
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("theme", ["localLanguage"]),
    locale() {
      const ob = {
        zhCN: zhCN,
        enUS: enUS,
      };

      return ob[this.localLanguage];
    },
  },
  mounted() {
    this.$i18n.locale = this.localLanguage;
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
