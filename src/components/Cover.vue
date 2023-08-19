<template>
  <div class="cover">
    <img class="background" alt="background" :src="url"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 随机壁纸
const bgRandom = Math.floor(Math.random() * 3 + 1);
const url = ref(null);

if (bgRandom==1) {
  url.value="https://api.dujin.org/bing/1920.php"
}
if (bgRandom==2) {
  url.value="https://api.btstu.cn/sjbz/api.php?lx=fengjing&format=images";
}
if (bgRandom==3) {
  url.value="https://api.btstu.cn/sjbz/api.php?lx=dongman&format=images";
}
if (url.value==null) {
  url.value="https://api.dujin.org/bing/1920.php";
}
</script>

<style lang="scss" scoped>
.cover {
width: 100%;
height: 100%;
position: relative;
background-color: var(--body-background-color);
.background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  backface-visibility: hidden;
  transition: filter 0.3s, transform 0.3s;
  animation: fade-blur-in 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.gray {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0.5) 100%
    ),
    radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.3) 166%);
}
}
</style>