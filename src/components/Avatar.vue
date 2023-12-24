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
    width: 128px;
    height: 128px;
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

  /* 自适应 */
  @media all and (max-width: 1100px) {
    .avatar {
      width: 100px;
      height: 100px;
    }
  }
</style>