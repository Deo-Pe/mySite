<template>
    <section
        class="bg-opacity-95 bg-mainCol sec1"
        @mousemove.self="handlerMouse"
    >
        <span @click="toHome" class="absolute m-5 z-50 cursor-pointer">
            <iconArrow icon="arrow-left-outline" :size="70" class="text-main" />
        </span>
        <h2 class="text-center font-ProstoOne text-4xl mt-12 mb-12">
            Примеры работ
        </h2>
        <div class="flex flex-row flex-wrap justify-center">
            <a
                target="_blank"
                href="https://deo-pe.github.io/tourizm/"
                class="m-5 w-1/4 h-64 shadow-xl inline-block"
                ><img
                    class="w-full h-full"
                    src="@/assets/tourizm_11zon.webp"
                    alt="tourizm"
            /></a>
            <a
                target="_blank"
                href="https://deo-pe.github.io/Providence/"
                class="m-5 w-1/4 h-64 shadow-xl inline-block"
                ><img
                    class="w-full h-full"
                    src="@/assets/providence.webp"
                    alt="tourizm"
            /></a>
            <a
                target="_blank"
                href="https://github.com/Deo-Pe"
                class="m-5 w-1/4 h-64 shadow-xl inline-block"
                ><img
                    class="w-full h-full"
                    src="@/assets/gitHub.jpg"
                    alt="gitHub"
            /></a>
        </div>
    </section>
</template>

<script>
import gsap from "gsap";
// import { onMounted } from "vue";
import iconArrow from "@/components/iconfonts/iconArrow.vue";
export default {
    components: {
        iconArrow,
    },
    setup() {
        const handlerMouse = (e) => {
            let cx = Math.ceil(window.innerWidth / 2);
            let cy = Math.ceil(window.innerHeight / 2);
            let dx = e.clientX - cx;
            let dy = e.clientY - cy;
            let tiltx = -dx / cx;
            let tilty = dy / cy;
            let radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
            let degree = radius * 8;
            // console.dir(e.target);
            gsap.set(e.target.children, {
                transform:
                    "rotate3d(" +
                    tiltx +
                    ", " +
                    tilty +
                    ", 0, " +
                    degree +
                    "deg)",
            });
        };
        function toHome() {
            window.scrollTo(0, window.pageXOffset);
        }
        return {
            handlerMouse,
            toHome,
        };
    },
};
</script>

<style>
/* .work {
    background-size: cover;
    background-repeat: no-repeat;
} */
</style>