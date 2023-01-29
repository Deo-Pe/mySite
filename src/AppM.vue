<template>
    <section class="overflow-x-hidden">
        <VContactM v-show="isContact" @closeForm="closeForm" />
        <MainHeader></MainHeader>
        <VImageM @btnAnimation="btnAnimation"></VImageM>
        <transition @enter="btnAnimation" appear>
            <main-btn
                ref="btnM"
                @click="addForm"
                class="my-12 md:mx-72 mx-10 opacity-0"
                >Заказать</main-btn
            >
        </transition>
        <VMainMobile class="mb-24 md:mx-auto" />
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
</style>