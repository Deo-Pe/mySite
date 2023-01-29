<template>
    <section class="relative">
        <Contact @close="closeForm" v-show="isContact" />

        <VMenu @go-form="addForm" class="menu opacity-0 absolute" />
        <MainPoligon />
        <MainHeader @endAnimationHeader="enter"></MainHeader>
        <div class="flex items-center justify-between mt-24">
            <MainTagline></MainTagline>
            <MainImage class="mr-28"></MainImage>
        </div>
        <main-btn
            @click="addForm"
            class="btn_main left-43 absolute py-2 px-4 opacity-0"
        >
            Заказать веб-сайт</main-btn
        >
    </section>
</template>

<script>
import MainTagline from "@/components/MainTagline";
import MainImage from "@/components/MainImage";
import MainPoligon from "@/components/MainPoligon";
import MainHeader from "@/components/MainHeader";
export default {
    data() {
        return {
            isContact: false,
        };
    },
    components: {
        MainTagline,
        MainImage,
        MainHeader,
        MainPoligon,
    },
    methods: {
        addForm() {
            this.isContact = !this.isContact;
            document.querySelector("body").style.overflowY = "hidden";
        },
        closeForm() {
            this.isContact = !this.isContact;
            document.querySelector("body").style.overflowY = "auto";
        },
        enter() {
            this.$gsap
                .timeline()
                .to(".menu", {
                    x: 90,
                    y: 40,
                    duration: 1,
                    opacity: 1,
                    ease: "back.out(1.7)",
                })
                .to(
                    ".btn_main",
                    {
                        y: -100,
                        duration: 1,
                        opacity: 1,
                        ease: "back.out(1.7)",
                    },
                    "-=.5"
                );
        },
    },
};
</script>

<style>
</style>