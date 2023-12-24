<template>
  <div class="Up">
    <Avatar />
    <Desc />

    <!-- 分割线 -->
    <hr class="hr">

    <!-- 一言组件 -->
    <Hitokoto />
  </div>
</template>

<script setup lang="ts">
  import Avatar from '@/components/Avatar.vue';
  import Desc from '@/components/Desc.vue';
  import Hitokoto from '@/components/Hitokoto.vue';
</script>

<style scoped lang="scss">
  .Up {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  /* 分割线样式 */
  .hr {
    width: 50%;
    margin: 20px auto;
    text-align: center;
    border-top: 1px solid rgba(255,255,255,0.50);
    transition: all 1.00s ease;
  }
  
  /* 自适应 */
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