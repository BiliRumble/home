<template>
  <cover />
  
  <div class="main">
    <headertab />
  </div>

  <footerbar />
</template>

<script setup lang="ts">
import footerbar from './components/Footer.vue';
import cover from './components/Cover.vue';
import headertab from './components/Header.vue';

document.oncontextmenu = () => {
    console.debug("[debug] disable contextmenu.");
    return false;
};
</script>

<style scoped lang="scss">
.main {
  position: absolute;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>