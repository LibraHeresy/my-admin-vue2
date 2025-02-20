<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      v-model="collapsed"
      :trigger="null"
      collapsible
      :width="240"
    >
      <div class="logo-wrapper">
        <img
          class="logo"
          src="https://preview.pro.antdv.com/assets/logo.b617e17f.svg"
          alt="logo"
        />
        <template v-if="!collapsed">
          <div class="title">My-Admin-Vue2</div>
        </template>
      </div>
      <a-menu
        theme="dark"
        mode="inline"
        :selectedKeys="[$route.path]"
        :openKeys.sync="openKeys"
        @select="handleMenuClick"
      >
        <template v-for="item in menus">
          <template v-if="!item.hideInMenu">
            <a-menu-item v-if="!item.children" :key="item.path">
              <a-icon v-if="item.meta?.icon" :type="item.meta.icon" />
              <span v-if="!collapsed">{{ item.meta?.title }}</span>
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
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content>
        <div class="content-header">
          <a-breadcrumb>
            <a-breadcrumb-item>首页</a-breadcrumb-item>
            <a-breadcrumb-item v-for="title in breadcrumbs" :key="title">
              <a href="">{{ title }}</a>
            </a-breadcrumb-item>
          </a-breadcrumb>
          {{ breadcrumbs[breadcrumbs.length - 1] || "" }}
        </div>
        <div
          :style="{
            margin: '24px',
          }"
        >
          <router-view />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
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
      breadcrumb.push(ob?.meta?.title || "");
      if (ob?.parentPath) {
        const arr = this.getBreadcrumbTitle(ob.parentPath);
        breadcrumb.push(...arr);
      }
      return breadcrumb;
    },
  },
};
</script>
<style lang="less" scoped>
#components-layout-demo-custom-trigger {
  height: 100vh;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo-wrapper {
  height: 32px;
  margin: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

#components-layout-demo-custom-trigger .logo {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

#components-layout-demo-custom-trigger .title {
  margin-left: 8px;
  white-space: nowrap;
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
}

#components-layout-demo-custom-trigger .content-header {
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
</style>
