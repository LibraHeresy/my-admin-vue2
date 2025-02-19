<template functional>
  <a-sub-menu :key="props.menuInfo.path">
    <span slot="title">
      <a-icon :type="props.menuInfo.meta?.icon || 'menu'" />
      <span v-if="!props.collapsed">
        {{ props.menuInfo.meta?.title }}
      </span>
    </span>
    <template v-for="item in props.menuInfo.children">
      <template v-if="!item.hideInMenu">
        <a-menu-item v-if="!item.children" :key="item.path">
          <a-icon :type="item.meta?.icon || 'menu'" />
          <span v-if="!props.collapsed">
            {{ item.meta?.title }}
          </span>
        </a-menu-item>
        <SubMenu v-else :key="item.path" :menu-info="item" />
      </template>
    </template>
  </a-sub-menu>
</template>
