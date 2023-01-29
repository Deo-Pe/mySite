<template>
    <main class="flex scrollBox">
        <v-main class="h-screen w-screen mainBlock"> </v-main>
        <VServices class="services w-screen" />
        <VExamples class="examples w-screen" />
    </main>
</template>

<script>
import VMain from "@/components/VMain";
import VServices from "@/components/VServices";
import VExamples from "@/components/VExamples";
export default {
    name: "App",
    components: { VMain, VServices, VExamples },
    mounted() {
        this.$gsap.set(".examples", {
            xPercent: -300,
        });
        this.$gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".scrollBox",
                    start: "top top",
                    scrub: 0.8,
                    pin: true,
                    snap: 0.1,
                    end: document.querySelector(".scrollBox").offsetWidth / 0.5,
                },
            })
            .to(".services", { xPercent: -100 })
            .to(".examples", { xPercent: -200 });
    },
    methods: {},
};
</script>

<style>
body {
    background-color: #eef3f6;
    overflow-x: hidden;
    user-select: none;
    box-sizing: border-box;
}
.animationText span {
    display: inline-block;
}
.scrollBox {
    width: 300vw;
}
</style>
