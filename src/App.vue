<template>
  <!-- 加载组件 -->
  <loading />

  <!-- 覆盖组件 -->
  <cover />

  <div class="main">
    <!-- 上部视图组件 -->
    <Up />

    <!-- 下部视图组件 -->
    <Down />
  </div>

  <!-- 底部栏组件 -->
  <footerbar />
</template>

<script setup lang="ts">
import footerbar from '@/components/Footer.vue';
import cover from '@/components/Cover.vue';
import loading from '@/components/Loading.vue';

import Up from '@/views/Up.vue';
import Down from '@/views/Down.vue';

document.oncontextmenu = () => {
  // 禁用右键菜单
  console.debug("[debug] disable contextmenu.");
  return false;
};
</script>

<style scoped lang="scss">
/* main样式 */
.main {
  position: absolute;
  width: 50%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>