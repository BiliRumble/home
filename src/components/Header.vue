<template>
    <div class="div">
        <img
        :class="[
            'avatar',
        ]"
        src="https://q2.qlogo.cn/headimg_dl?dst_uin=2951327332&spec=100"
        />

        <h1 class="name">rumble</h1>
        <p class="description">兴趣使然</p>

        <hr class="hr">

        <hitokoto />

        <navigation />
    </div>
</template>

<script setup lang="ts">
import navigation from './Navigation.vue';
import hitokoto from './Hitokoto.vue'
</script>

<style lang="scss" scoped>
.avatar {
  text-align: center;
  display: block;
  border-radius: 300px;
  width: 128px;
  height: 128px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background: rgb(136, 172, 219);
  -webkit-transition: all .2s ease-in;
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  text-align: center;

  -webkit-box-shadow: 5px 5px 5px 10px rgba(255, 255, 255, 0),0px 2px 20px 3px rgba(0,0,0,0.25);
  box-shadow: 5px 5px 10px rgba(255, 255, 255, 0),0px 2px 20px 3px rgba(0, 0, 0, 0.25);
}

.name {
  font-size: 2.5em;
  text-align: center;
  color: rgb(255, 255, 255);
}

.description {
  font-size: 1em;
  text-align: center;
  color: rgb(255, 255, 255);
}

.hr {
  width: 50%;
  margin: 20px auto;
  text-align: center;
  border-top: 1px solid rgba(255,255,255,0.50)
}

@media all and (max-width: 1100px) {
    .avatar {
        width: 100px;
        height: 100px;
    }

    .name {
        font-size: 2em
    }

    .description {
        font-size: 1em
    }
}

@media all and (max-width: 340px) {
    .name {
        margin-bottom: .1em;
        font-size: 1.5em
    }

    .description {
        font-size: .9em
    }

    .hr {
        width: 100%;
        margin: 20px auto;
        text-align: center;
        border-top: 1px solid rgba(255,255,255,0.50)
    }
}
</style>