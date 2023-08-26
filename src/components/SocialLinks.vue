<template>
    <div>
        <nav class="cover-item item--social">
            <ul class="list">
                <li class="item">
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
    </div>
</template>

<script setup>
import SocialLinks from "@/assets/SocialLinks.json";

const label = SocialLinks.title;
</script>

<style scoped lang="scss">
nav {
    display: inline-block;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
}

.list {
    display: flex;
    margin-top: 45px;
    text-align: center;
}

.item {
    display: inline-block;
    /*float: left;*/
    position: relative;
    list-style-type: none;
    flex-wrap: wrap;
    margin: 0;
    color: var(--main-text-color);
}


.item--social a {
    border: 0;
    padding: 6px 8px 6px 9px;
}

.item--social a .label {
    display: none;
}

.item--social a .icon {
    display: block;
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
    display: block;
    position: relative;
}

@media all and (max-width: 1100px) {
    .item--social {
        margin-top: 5px;
        margin-left: 0
    }
}

@media all and (max-width: 960px) {
    .cover-item .item li {
        width: 80%;
        margin-bottom: .4em;
    }

    .cover-item.item--social {
        padding-top: 5px;
    }

    
    .cover-item.item--social .item li {
        display: inline-block;
        width: 20%;
    }
}
</style>