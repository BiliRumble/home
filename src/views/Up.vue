<template>
  <div class="Up">
    <Header/>
    <hr class="hr">
    <Hitokoto/>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import Hitokoto from '@/components/Hitokoto.vue';
</script>

<style scoped lang="scss">
.hr {
  width: 50%;
  margin: 20px auto;
  text-align: center;
  border-top: 1px solid rgba(255,255,255,0.50);
  transition: all 1.00s ease;
}

@media all and (max-width: 1100px) {
  .hr {
    width: 55%;
  }
}

@media all and (max-width: 960px) {
  .hr {
    width: 100%;
  }
}
</style>