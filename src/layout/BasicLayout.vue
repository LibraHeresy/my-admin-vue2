<template>
  <a-layout class="basic-layout">
    <a-layout-sider
      v-model="collapsed"
      :trigger="null"
      collapsible
      :width="240"
      :theme="theme"
    >
      <div class="logo-wrapper">
        <img class="logo" src="@/assets/logo.png" alt="logo" />
        <template v-if="!collapsed">
          <div
            class="title"
            :style="{
              color: theme === 'dark' ? '#fff' : '#000',
            }"
          >
            My-Admin-Vue2
          </div>
        </template>
      </div>
      <a-menu
        :theme="theme"
        mode="inline"
        :selectedKeys="[$route.path]"
        :openKeys.sync="openKeys"
        @select="handleMenuClick"
      >
        <template v-for="item in menus">
          <template v-if="!item.hideInMenu">
            <a-menu-item v-if="!item.children" :key="item.path">
              <a-icon v-if="item.meta?.icon" :type="item.meta.icon" />
              <span v-if="!collapsed">{{ getTitle(item) }}</span>
            </a-menu-item>
            <SubMenu
              v-else
              :key="item.path"
              :menu-info="item"
              :collapsed="collapsed"
            />
          </template>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header
        style="
          background: #fff;
          padding: 0;
          display: flex;
          justify-content: space-between;
        "
      >
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <div style="margin-right: 48px">
          <a-dropdown>
            <a-icon class="dropdown-icon" type="user" />
            <a-menu slot="overlay">
              <a-menu-item>
                <a
                  href="javascript:;"
                  @click="() => $router.push({ path: '/setting' })"
                >
                  个人设置
                </a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;" @click="() => logout()">退出登录</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
          <a-dropdown>
            <a-icon class="dropdown-icon" type="global" />
            <a-menu slot="overlay">
              <a-menu-item>
                <a
                  href="javascript:;"
                  @click="() => handleChangeLanguage('zhCN')"
                >
                  中文
                </a>
              </a-menu-item>
              <a-menu-item>
                <a
                  href="javascript:;"
                  @click="() => handleChangeLanguage('enUS')"
                >
                  English
                </a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </a-layout-header>
      <a-layout-content>
        <div class="content-header">
          <a-breadcrumb>
            <a-breadcrumb-item>{{ $t("home") }}</a-breadcrumb-item>
            <a-breadcrumb-item v-for="title in breadcrumbs" :key="title">
              <a href="">{{ title }}</a>
            </a-breadcrumb-item>
          </a-breadcrumb>
          {{ breadcrumbs[breadcrumbs.length - 1] || "" }}
        </div>
        <div
          :style="{
            padding: '24px',
          }"
        >
          <router-view />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import SubMenu from "./SubMenu.vue";

export default {
  name: "BasicLayout",
  components: {
    SubMenu,
  },
  data() {
    return {
      collapsed: false,
      menus: [],
      menusMap: {},
      openKeys: [],
      tempOpenKeys: [],
      breadcrumbs: [],
    };
  },
  computed: {
    ...mapState("theme", ["theme", "localLanguage"]),
  },
  watch: {
    collapsed(val) {
      if (val) {
        this.tempOpenKeys = [...this.openKeys];
        this.openKeys = [];
      } else {
        this.openKeys = [...this.tempOpenKeys];
        this.tempOpenKeys = [];
      }
    },
    "$route.path": {
      handler() {
        this.getBreadcrumb();
      },
      immediate: true,
    },
    localLanguage() {
      this.getBreadcrumb();
    },
  },
  created() {
    const menuRoute =
      this.$router.options.routes.find((item) => item.name === "menu") || {};
    this.menus = menuRoute?.children || [];
    this.setMenusMap(this.menus);
    this.openKeys = [this.menusMap[this.$route.path]?.parentPath || ""];
  },
  mounted() {
    this.getBreadcrumb();
  },
  methods: {
    ...mapMutations("theme", ["setLocalLanguage"]),
    setMenusMap(routes, parentPath = "") {
      routes.map((route) => {
        this.menusMap[route.path] = {
          ...route,
          parentPath,
        };
        if (route.children) {
          this.setMenusMap(route.children, route.path);
        }
      });
    },
    handleMenuClick(e) {
      if (e.key === this.$router.currentRoute.path) return;
      this.$router.push({
        path: e.key,
      });
    },
    getBreadcrumb() {
      const arr = this.getBreadcrumbTitle(this.$route.path);
      this.breadcrumbs = [...arr.reverse()];
    },
    getBreadcrumbTitle(path) {
      let breadcrumb = [];
      const ob = this.menusMap[path];
      breadcrumb.push(this.getTitle(ob) || "");
      if (ob?.parentPath) {
        const arr = this.getBreadcrumbTitle(ob.parentPath);
        breadcrumb.push(...arr);
      }
      return breadcrumb;
    },
    handleChangeLanguage(value) {
      this.setLocalLanguage(value);
    },
    logout() {
      localStorage.removeItem("token");
      this.$router.push({
        path: "/login",
      });
    },
    getTitle(item) {
      return item?.meta?.i18n
        ? this.$t(item.meta.i18n)
        : item?.meta?.title || "";
    },
  },
};
</script>
<style lang="less" scoped>
.basic-layout {
  height: 100vh;
}
.basic-layout .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.basic-layout .trigger:hover {
  color: #1890ff;
}

.basic-layout .logo-wrapper {
  height: 32px;
  margin: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.basic-layout .logo {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.basic-layout .title {
  margin-left: 8px;
  white-space: nowrap;
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
}

.basic-layout .content-header {
  background-color: #ffffff;
  margin-top: 2px;
  height: 80px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
}

.dropdown-icon {
  font-size: 18px;
  line-height: 64px;
  padding-left: 28px;
  cursor: pointer;
  transition: color 0.3s;
}
</style>
