<template>
    <canvas ref="snowCanvas" class="canvas"></canvas>
</template>

<script lang="ts">
class Snowflake {
    constructor(canvas) {
        this.canvas = canvas;  
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.size = Math.random() * 0.5 + 5;
        this.yspeed = Math.random() * 1 + 0.5;
        this.xspeed = Math.random() * 0.5 - 0.25;
    }

    update() {
        this.y += this.yspeed;
        this.x += this.xspeed;
        if (this.y >= this.canvas.height + 5 || this.x > this.canvas.width + 5 || this.x < -5) {
            this.x = Math.random() * this.canvas.width;
            this.y = 0;
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.fill();
    }
}

export default {
    data() {
        return {
            snowflakes: [],
        };
    },

    mounted() {
        this.canvas = this.$refs.snowCanvas;
        this.ctx = this.canvas.getContext('2d');
        this.init();
    },

    methods: {
        init(numberOfSnowflakes) {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            window.addEventListener('resize', () => {
                this.canvas.width = window.innerWidth;
                this.canvas.height = window.innerHeight;
            });
            for (let i = 0; i < 125; i++) {
                this.snowflakes.push(new Snowflake(this.canvas));
            }
            this.animate();
        },

        animate() {
            this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            this.snowflakes.forEach((snowflake) => {
                snowflake.update();
                snowflake.draw(this.ctx);
            });
            requestAnimationFrame(this.animate);
        },
    },
};
</script>

<style>
.canvas {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    background-color: rgba(0, 0, 0, 0);
    z-index: 1;
}
</style>