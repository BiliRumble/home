<template>
  <div id="loader-wrapper" :class="{ 'fade-out': !show }">
    <div id="loader"></div>
    <div class="loader-section section-left"></div>
    <div class="loader-section section-right"></div>
    <div class="loader-text">
      <span class="name">{{ title }}</span>
      <p class="tip">加载中</p>
    </div>
  </div>
</template>

<script lang="ts">
  import { onMounted, ref } from 'vue';
  
  export default {
    setup() {
      const show = ref(true);
  
      onMounted(() => {
        window.onload = () => {
          show.value = false;
          setTimeout(() => {
            // 删除元素
            const loaderWrapper = document.getElementById('loader-wrapper');
            loaderWrapper?.parentNode?.removeChild(loaderWrapper);
          }, 500);
        };
      });
  
      const title = ref(import.meta.env.VITE_SITE_TITLE);
  
      return {
        show,
        title,
      };
    },
  };
</script>

<style scoped lang="scss">
  /* 加载页样式 */
  #loader-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999999;
  }
  
  #loader {
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #fff;
    animation: spin 2s linear infinite;
    z-index: 1001;
  }
  
  #loader:before,
  #loader:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #fff;
  }
  
  #loader:before {
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    animation: spin 3s linear infinite;
  }
  
  #loader:after {
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    animation: spin 1.5s linear infinite;
  }
  
  #loader-wrapper .loader-section {
    position: fixed;
    top: 0;
    width: 51%;
    height: 100%;
    background: var(--body-background-color);
    z-index: 1000;
    transform: translateX(0);
  }
  
  #loader-wrapper .loader-section.section-left {
    left: 0;
  }
  
  #loader-wrapper .loader-section.section-right {
    right: 0;
  }
  
  /* 标题 */
  #loader-wrapper .loader-text {
    width: 100%;
    text-align: center;
    z-index: 9999999999999;
    position: absolute;
    top: 60%;
    opacity: 1;
    margin-top: 40px;
    line-height: 30px;
  }
  
  #loader-wrapper .loader-text .name {
    color: var(--main-text-color);
    z-index: 2;
    font-size: 24px;
  }
  
  #loader-wrapper .loader-text .tip {
    font-weight: normal;
    font-size: 18px;
    color: var(--main-text-color);
    opacity: 0.6;
  }
  
  /* 动画 */
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  /* 渐隐效果 */
  .fade-out {
    opacity: 0;
    transition: opacity 0.5s;
  }
</style>