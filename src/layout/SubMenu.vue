<template functional>
  <a-sub-menu :key="props.menuInfo.path">
    <span slot="title">
      <a-icon
        v-if="props.menuInfo?.meta?.icon"
        :type="props.menuInfo.meta.icon"
      />
      <span v-if="!props.collapsed">
        {{
          props.menuInfo.meta?.i18n
            ? parent.$t(props.menuInfo.meta.i18n)
            : props.menuInfo.meta?.title
        }}
      </span>
    </span>
    <template v-for="item in props.menuInfo.children">
      <template v-if="!item.hideInMenu">
        <a-menu-item v-if="!item.children" :key="item.path">
          <a-icon v-if="item.meta?.icon" :type="item.meta.icon" />
          <span v-if="!props.collapsed">
            {{ item.meta?.i18n ? parent.$t(item.meta.i18n) : item.meta?.title }}
          </span>
        </a-menu-item>
        <SubMenu v-else :key="item.path" :menu-info="item" />
      </template>
    </template>
  </a-sub-menu>
</template>
