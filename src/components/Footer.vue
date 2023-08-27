<template>
    <footer class="footer">
        Copyright © 2019 - {{ currentYear }} {{ name }}
        <span v-if="siteIcp">
          &nbsp;&amp;&nbsp;
          <a href="https://beian.miit.gov.cn" target="_blank">
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
</script>

<style lang="scss" scoped>
.footer {
    position: absolute;
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


@media (max-height: 450px) and all {
  .footer {
    display: none;
  }
}
</style>
