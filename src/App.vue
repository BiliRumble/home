<template>
  <!-- 加载组件 -->
  <loading />
  <!-- 覆盖组件 -->
  <cover />
  <div class="main">
    <!-- 上部视图组件 -->
    <up />
    <!-- 下部视图组件 -->
    <down />
  </div>
  <!-- 底部栏组件 -->
  <footerbar />
</template>

<script setup lang="ts">
import Footerbar from '@/components/Footer.vue';
import Cover from '@/components/Cover.vue';
import Loading from '@/components/Loading.vue';
import Up from '@/views/Up.vue';
import Down from '@/views/Down.vue';
import { checkDays } from "@/tools/timeTools.ts";

// 禁用右键菜单
document.addEventListener('contextmenu', e => {
  console.debug('[debug] disable contextmenu.');
  e.preventDefault();
});

checkDays();
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