<template>
  <footer class="footer">
    Copyright ©
    <span v-if="year">&nbsp;{{ year }}&nbsp;-&nbsp;</span>
    {{ currentYear }} {{ name }}
    <span v-if="siteIcp">
      &nbsp;&amp;&nbsp;
      <a :href="icpURL" target="_blank">
        {{ siteIcp }}
      </a>
    </span>
  </footer>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  
  const currentYear = ref<number>(new Date().getFullYear());
  const siteIcp = ref(import.meta.env.VITE_SITE_ICP);
  const name = ref(import.meta.env.VITE_DESC_NAME);
  const year = ref(import.meta.env.VITE_FT_STARTYEAR);
  const icpURL = ref(import.meta.env.VITE_SITE_ICP_URL);
</script>

<style scoped lang="scss">
  /* Footer样式 */
  .footer {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    height: 60px;
    width: 100%;
    font-size: 14px;
    color: var(--main-text-color);
    z-index: 1;
  }
  
  a {
    text-decoration: none;
    color: var(--main-text-color);
  }
  
  /* 自适应 */
  @media all and (max-height: 490px) {
    .footer {
      display: none; /* 当页面高度小于 490px 时隐藏 footer */
    }
  }
</style>