<template>
    <section class="wrap">
        <MainHeader></MainHeader>
        <VContactM v-show="isContact" @closeForm="closeForm" />
        <VImageM @btnAnimation="btnAnimation"></VImageM>
        <transition
            @enter="btnAnimation"
            class="my-12 mx-auto opacity-0 2xl:h-14"
            appear
        >
            <main-btn ref="btnM" @click="addForm">Заказать</main-btn>
        </transition>
        <VMainMobile class="mb-24" />
        <VExamplesM />
    </section>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import VExamplesM from "@/components/mobile/VExamplesM";
import VMainMobile from "@/components/mobile/VMainMobile";
import VContactM from "./components/mobile/VContactM.vue";
import VImageM from "./components/mobile/VImageM.vue";
export default {
    components: {
        MainHeader,
        VMainMobile,
        VExamplesM,
        VContactM,
        VImageM,
    },
    data() {
        return {
            isContact: false,
        };
    },
    methods: {
        addForm() {
            this.isContact = !this.isContact;
            document.querySelector("body").style.overflowY = "hidden";
        },
        closeForm(e) {
            this.isContact = e;
            document.querySelector("body").style.overflowY = "auto";
        },
        btnAnimation(el) {
            this.$gsap.to(el, {
                // y: -100,
                duration: 3,
                delay: 2,
                opacity: "1",
                ease: "back.out(1.7)",
            });
        },
    },
};
</script>

<style scoped>
/* .wrap {
    padding: auto;
} */
</style>