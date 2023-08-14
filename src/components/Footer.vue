<template>
    <footer class="footer">
        Copyright © rumble
        GIT: {{ CommitSha }}
    </footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const commitSha = ref("");

onMounted(async () => {
  try {
    const response = await axios.get(`https://api.github.com/repos/BiliRumble/home/commits`);

    const fullSha = response.data.sha;
    commitSha.value = fullSha.substring(0, 7);
  } catch (error) {
    commitSha.value = "获取出现错误。"
    console.error("[error] Failed to get GithubAPI: " + error);
  }
});
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