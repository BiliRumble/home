<template>
    <nav class="cover-navigation navigation--social">
        <ul class="list">
            <li class="navigation">
                <a href="https://github.com/bilirumble/" title="github" target="_blank">
                    <i class="fa-brands fa-github"></i>
                    <span class="label">Github</span>
                </a>
            </li>

            <li class="navigation">
                <a href="https://wpa.qq.com/msgrd?v=3&uin=2951327332&site=qq&menu=yes" title="QQ" target="_blank">
                    <i class="fa-brands fa-qq"></i>
                    <span class="label">QQ</span>
                </a>
            </li>

            <li class="navigation">
                <a href="https://space.bilibili.com/475403704/" title="bilibili" target="_blank">
                    <i class="fa-brands fa-bilibili"></i>
                    <span class="label">BiliBili</span>
                </a>
            </li>

            <li class="navigation">
                <a href="javascript:decryptEmail('bilirumble@outlook.com');" title="email">
                    <i class="fa-solid fa-envelope"></i>
                    <span class="label">Email</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
nav {
    display: inline-block;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 10px;
}


.list {
    display: flex;
    margin-top: 15px;
    text-align: center;
}


.navigation {
    display: inline-block;
    /*float: left;*/
    position: relative;
    margin: 0;
    margin-top: 20px;
    list-style-type: none;
    margin-top: 10px;
    flex-wrap: wrap;
}

.navigation__item {
    display: inline-block;
    margin: 5px 1px 0 0;
    line-height: 1em;
}

.navigation__item a {
    display: block;
    position: relative;
    border-color: rgb(255,255,255);
    color: rgb(255,255,255);
    opacity: .8;
}

.navigation__item a:hover {
    color: rgb(255,255,255);
    border-color: rgb(255,255,255);
    opacity: 1;
}

.navigation--social a {
    border: 0;
    padding: 6px 8px 6px 9px;
}

.navigation--social a .label {
    display: none;
}

.navigation--social a .icon {
    display: block;
    font-size: 1.7em;
}

i {
    font-weight: normal;
    font-style: normal;
    font-size: 18px;
    color: rgb(255,255,255);
}

.social {
    font-size: 22px;
}

.icon-social {
    font-size: 22px;
    display: block;
    position: relative;
}

@media all and (max-width: 1100px) {
    .navigation--social {
        margin-top: 5px;
        margin-left: 0
    }
}

@media all and (max-width: 960px) {
    .cover-navigation .navigation li {
        width: 80%;
        margin-bottom: .4em;
    }

    .cover-navigation.navigation--social {
        padding-top: 5px;
    }

    .cover-navigation.navigation--social .navigation li {
        display: inline-block;
        width: 20%;
    }

    .navigation__item {
        width: 100%;
        margin: 0 0 .4em 0;
    }
}
</style>