<template>
    <!-- @enter="enter" appear -->
    <transition @enter="enter" appear>
        <div ref="anib" class="w-1/4 ml-20">
            <p ref="slogText" class="text-4xl w-96 text-main text-Laptev">
                {{ slogan.text }}
            </p>
            <p ref="slogAuthor" class="text-mycolor text-2xl">
                {{ slogan.author }}
            </p>
        </div>
    </transition>
</template>

<script>
import slogans from "../assets/slogans";

export default {
    data() {
        return {
            slogans: [...slogans],
            slogan: {},
            interval: null,
        };
    },
    watch: {
        slogan() {
            this.$gsap
                .timeline()
                .to(this.$refs.slogText, {
                    ease: "none",
                    opacity: 1,
                    duration: 0.7,
                })
                .to(
                    this.$refs.slogAuthor,
                    {
                        ease: "none",
                        opacity: 1,
                        duration: 0.5,
                    },
                    "-=0.3"
                )
                .add(() => {
                    this.$gsap
                        .timeline()
                        .to(this.$refs.slogText, {
                            ease: "none",
                            opacity: 0,
                            duration: 0.5,
                        })
                        .to(
                            this.$refs.slogAuthor,
                            {
                                ease: "none",
                                opacity: 0,
                                duration: 0.3,
                            },
                            "+=0.1"
                        );
                }, 8);
        },
    },

    methods: {
        enter() {
            this.$gsap.from(this.$refs.anib, {
                delay: 3,
                ease: "none",
                opacity: 0,
                duration: 0.8,
            });
        },
        randomSlogan() {
            let a = Math.floor(Math.random() * this.slogans.length - 1);
            if (a === -1) {
                a++;
            }

            return this.slogans[a];
        },
    },
    mounted() {
        this.slogan = this.randomSlogan();
        this.interval = setInterval(() => {
            this.slogan = this.randomSlogan();
        }, 10000);
    },
    unmounted() {
        clearInterval(this.interval);
    },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat&display=swap");
h3,
p {
    font-family: "Caveat", cursive;
}
</style>