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
  .name {
    font-size: clamp(2.25rem, 2.5dvw + 1rem, 3rem);
    color: var(--main-text-color);
    transition: all 1.00s ease;
  }
  
  .description {
    font-size: clamp(.75em, 1dvw + 0.5em, 1.25em);
    color: var(--main-text-color);
    transition: all 1.00s ease;
  }
</style>
