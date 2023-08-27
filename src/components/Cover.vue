<template>
  <div class="cover">
    <img class="background" alt="Background" src="https://api.dujin.org/bing/1920.php"/>
  </div>
</template>

<style lang="scss" scoped>
/* 背景样式 */
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