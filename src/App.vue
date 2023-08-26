<template>
  <loading />

  <cover />

  <div class="main">
    <Up />
    <Down />
  </div>

  <footerbar />
</template>

<script setup lang="ts">
import footerbar from '@/components/Footer.vue';
import cover from '@/components/Cover.vue';
import loading from './components/Loading.vue';

import Up from '@/views/Up.vue';
import Down from '@/views/Down.vue';

document.oncontextmenu = () => {
    console.debug("[debug] disable contextmenu.");
    return false;
};
</script>

<style scoped lang="scss">
.main {
  position: absolute;
  width: 50%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>