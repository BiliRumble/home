<template>
    <footer class="footer">
        Copyright © 2019 - {{ currentYear }} rumble
    </footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const currentYear = ref<number>(new Date().getFullYear());
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
</style>