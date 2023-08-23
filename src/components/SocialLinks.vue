<template>
    <nav class="cover-navigation navigation--social">
        <ul class="list">
            <li class="navigation">
                <a
                v-for="item in SocialLinks"
                :href="item.url"
                :title="item.title"
                target="_blank"
                >
                    <i
                    :class="item.icon"
                    />
                    <span class="label">{{ label }}</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import SocialLinks from "@/assets/SocialLinks.json";

const label = SocialLinks.title;
</script>

<style scoped lang="scss">
nav {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
}

.list {
    display: flex;
    text-align: center;
}

.navigation {
    list-style-type: none;
    flex-wrap: wrap;
    color: var(--main-text-color);
}

.navigation__item {
    line-height: 1em;
}

.navigation__item a {
    border-color: rgb(255,255,255);
    color: var(--main-text-color);
    opacity: .8;
}

.navigation--social a {
    border: 0;
    padding: 6px 8px 6px 9px;
}

.navigation--social a .label {
    display: none;
}

.navigation--social a .icon {
    font-size: 1.7em;
}

i {
    font-weight: normal;
    font-style: normal;
    font-size: 18px;
    color: rgb(251, 255, 247);
    transition: all 0.3s;
}

i:hover {
    transform: translateY(-2px) scale(1.01,1.01);
    color: rgb(255, 255, 255);
}

.social {
    font-size: 22px;
}

.icon-social {
    font-size: 22px;
    position: relative;
}

@media all and (max-width: 960px) {
    .cover-navigation .navigation li {
        width: 80%;
    }

    .cover-navigation.navigation--social .navigation li {
        width: 20%;
    }

    .navigation__item {
        width: 100%;
    }
}
</style>