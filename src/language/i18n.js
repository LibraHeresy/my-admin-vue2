import Vue from "vue";
import VueI18n from "vue-i18n";
import enUS from "./enUS";
import zhCN from "./zhCN";

Vue.use(VueI18n);

const messages = {
  enUS,
  zhCN,
};

const i18n = new VueI18n({
  locale: "zhCN", // 默认语言
  fallbackLocale: "zhCN", // 回退语言
  messages,
});

export default i18n;
