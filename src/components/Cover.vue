<template>
  <div class="cover">
     <SnowCanvas v-if="siteSnow" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import SnowCanvas from './snowCanvas.vue';
const siteSnow = ref(import.meta.env.VITE_SETTING_WINTERSNOW);
</script>

<style scoped lang="scss">
  /* 背景样式 */
  .cover {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: var(--body-background-color);
    background-image: url(https://api.dujin.org/bing/1920.php);
    background-size: cover;
  }

  /* 遮罩，防止部分雪地背景太亮 */
  .cover::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
  }
</style>