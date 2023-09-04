<template>
  <div>
    <nav class="">
      <ul class="list">
        <!-- 使用v-for循环渲染按钮链接 -->
        <li class="item" v-for="item in SocialLinks" :key="item.id">
          <button>
            <a :href="item.url" :title="item.title" target="_blank">
              <i :class="item.icon" />
              <span class="label">{{ item.title }}</span>
            </a>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>
  
<script setup>
  import SocialLinks from "@/assets/ButtonLinks.json";
</script>
  
<style scoped lang="scss">
  .list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .item {
      list-style-type: none;
      margin: 5px;

      button {
        width: 65px;
        height: 30px;
        //border: 1.5px solid rgba(255, 255, 255, 0.5);
        border: none;
        border-radius: 5px;
        background-color: rgba(50, 50, 50, 0.3);
        color: rgba(255, 255, 255, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;

        a {
          margin-top: 3px;
          margin-bottom: 3px;
          margin-left: 3px;
          margin-right: 3px;
          color: var(--main-text-color);
          text-decoration: none;

          i {
            font-weight: normal;
            font-style: normal;
            font-size: 18px;
            margin-right: 5px;
          }
        }
      }
    }
  }
</style>