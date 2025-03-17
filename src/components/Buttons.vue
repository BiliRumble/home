<template>
  <div>
    <nav>
      <ul class="list">
        <li class="item" v-for="item in SocialLinks" :key="item.id">
          <button :title="item.title" @click="openUrl(item.url, '_blank')">
            <i :class="item.icon" />
            <span class="label">{{ item.title }}</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>
  
<script setup lang="ts">
  import SocialLinks from "@/assets/ButtonLinks.json";

  function openUrl(url: string) {
    let element = document.createElement("a");
    element.setAttribute("href", url);
    element.setAttribute("target", "_blank");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
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
        border: none;
        border-radius: 5px;
        background-color: rgba(50, 50, 50, 0.3);
        color: var(--main-text-color);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3px;
        cursor: pointer;
        transition: 0.3s ease-in-out;

        &:hover {
          background-color: rgba(50, 50, 50, 0.5);
        }

        i {
          font-weight: normal;
          font-style: normal;
          font-size: 18px;
          margin-right: 5px;
        }
      }
    }
  }
</style>