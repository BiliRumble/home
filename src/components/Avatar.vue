<template>
  <img class="avatar" :src=avatar alt="avatar" />
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const avatar = ref(import.meta.env.VITE_DESC_AVATAR);
</script>

<style scoped lang="scss">
  /* Header样式 */
  .avatar {
    border-radius: 50%;
    width: clamp(128px, 30dvw, 200px);
    aspect-ratio: 1/1;
    margin: 0 auto;
    overflow: hidden;
    background: rgb(136, 172, 219);
    box-shadow: 5px 5px 5px 10px rgba(255, 255, 255, 0),
      0px 2px 20px 3px rgba(0, 0, 0, 0.25);
    transition: all 1.00s ease;
  }
  
  .avatar:hover {
    transform: rotate(360deg);
  }
</style>