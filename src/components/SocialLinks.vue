<template>
  <div>
    <nav class="social">
      <ul class="list">
        <!-- 使用v-for循环渲染社交链接 -->
        <li class="item" v-for="item in SocialLinks" :key="item.id">
          <a :href="item.url" :title="item.title" target="_blank">
            <i :class="item.icon" />
            <span class="label">{{ item.label }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import SocialLinks from "@/assets/SocialLinks.json";
</script>

<style scoped lang="scss">
/* Social图标样式 */
.social {
  margin-top: 10px;

  .list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .item {
      list-style-type: none;

      a {
        border: 0;
        padding: 6px 8px 6px 9px;

        i {
          font-weight: normal;
          font-style: normal;
          font-size: 18px;
          color: rgba(255, 255, 255, 0.9);
          transition: all 0.3s;
        }

        i:hover {
          transform: translateY(-2px);
          color: rgb(255, 255, 255);
        }

        .label {
          display: none;
        }
      }
    }
  }
}
</style>