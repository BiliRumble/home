<template>
    <div>
      <h1 class="name">{{ name }}</h1>
      <p class="description">{{ des }}</p>
    </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  
  const name = ref(import.meta.env.VITE_DESC_NAME);
  const des = ref(import.meta.env.VITE_DESC_DES);
</script>

<style scoped lang="scss">
  /* Desc样式 */
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