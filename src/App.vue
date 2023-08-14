<template>
  <cover />
  
  <div class="main">
    <headertab />
  </div>

  <footerbar />
</template>

<script setup lang="ts">
import footerbar from './components/Footer.vue';
import cover from './components/Cover.vue';
import headertab from './components/Header.vue';

document.oncontextmenu = () => {
    console.debug("[debug] disable contextmenu.");
    return false;
};

const styleTitle1 =
  "font-size: 20px;font-weight: 600;color: rgb(244,167,89);";
const styleTitle2 = "font-size:12px;color: rgb(244,167,89);";
const styleContent = "color: rgb(30,152,255);";
const title1 = "rumble Home";
const title2 = ``;
const content = `\n\n版本: 1.0.0 beta1\n主页: \nGithub: rumble/home`;
console.info(
  `%c${title1} %c${title2} %c${content}`,
  styleTitle1,
  styleTitle2,
  styleContent
);

</script>

<style scoped>
.main {
  position: absolute;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
