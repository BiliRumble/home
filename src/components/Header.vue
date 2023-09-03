<template>
  <div>
    <img class="avatar" src="/images/avatar.png" alt="avatar" />
    <h1 class="name">{{ name }}</h1>
    <p class="description">{{ des }}</p>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  
  const name = ref(import.meta.env.VITE_DESC_NAME);
  const des = ref(import.meta.env.VITE_DESC_DES);
</script>

<style lang="scss" scoped>
  /* Header样式 */
  .avatar {
    text-align: center;
    display: block;
    border-radius: 50%;
    width: 128px;
    height: 128px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    background: rgb(136, 172, 219);
    box-shadow: 5px 5px 5px 10px rgba(255, 255, 255, 0),
      0px 2px 20px 3px rgba(0, 0, 0, 0.25);
    transition: all 1.00s ease;
  }
  
  .avatar:hover {
    transform: rotate(360deg);
  }
 
  .name {
    font-size: 2.5em;
    text-align: center;
    color: var(--main-text-color);
    transition: all 1.00s ease;
  }
  
  .description {
    font-size: 1em;
    text-align: center;
    color: var(--main-text-color);
    transition: all 1.00s ease;
  }
  
  /* 自适应 */
  @media all and (max-width: 1100px) {
    .avatar {
      width: 100px;
      height: 100px;
    }
  
    .name {
      font-size: 2em;
    }

    .description {
      font-size: 1em;
    }
  }
  
  @media all and (max-width: 340px) {
    .name {
      margin-bottom: 0.1em;
      font-size: 1.5em;
   }

    .description {
      font-size: 0.9em;
    }
  }
</style>