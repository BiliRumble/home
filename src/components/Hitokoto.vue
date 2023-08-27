<template>
    <div>
        <p id="hitokoto" class="hitokoto">
            {{ hitokoto }}<br>
             -「<strong>{{ from }}</strong>」
        </p>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const hitokoto = ref('');
const from = ref('');

onMounted(async () => {
  try {
    const response = await axios.get('https://v1.hitokoto.cn');
    hitokoto.value = response.data.hitokoto,
    from.value = response.data.from;
    console.debug("[debug] Get hitokoto response data: " + response.data);
  } catch (error) {
    hitokoto.value = "获取一言出现错误，详细信息请查看控制台。",
    from.value = "error";
    console.error("[error] Failed to get hitokoto: " + error);
  }
});
</script>

<style>
/* 一言样式 */
.hitokoto {
    text-align: center;
    color: var(--main-text-color);
    transition: all 1.00s ease;
}

/* 自适应 */
@media all and (max-width: 1100px) {
    .hitokoto {
        display: block;
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
    }
}

@media all and (max-width: 960px) {
    .hitokoto {
        display: block;
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
    }
}
</style>