<template>
    <transition appear @enter="action">
        <svg
            width="100%"
            height="300"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg"
            viewBox="100 -20 300 500"
        >
            <g class="layer items-start">
                <!-- <title>DeoPe</title>
            <g id="svg_18" /> -->
                <path
                    d="m353.863514,403.301509c13.669418,-13.294972 23.66507,-30.130896 32.040523,-47.189815c5.116376,-6.803885 0.272435,-12.756254 -6.696368,-6.986672c-17.90973,12.052024 -42.288993,16.185008 -61.679986,5.189651c-21.920783,-11.424372 -31.805878,-38.590303 -26.832254,-62.261069c3.14974,-23.988251 20.472675,-42.791236 39.281269,-56.297912c21.605805,-15.577411 44.937389,-28.949921 64.683842,-46.98785c8.245012,0.166585 14.450115,13.20663 23.323535,16.657313c23.561334,17.687335 51.483662,30.706651 70.037519,54.357886c9.373738,13.476716 14.716227,30.071644 15.312663,46.475958c-2.855986,22.245466 -16.016985,45.706155 -38.713272,52.041221c-19.620245,5.983206 -39.806492,-1.604727 -56.90417,-11.25823c-2.088418,-0.451726 -9.748458,-6.534054 -6.712577,-1.807164c10.221534,21.141175 21.420904,42.133887 37.640457,59.299329c0.953339,2.168884 8.430077,7.314555 4.450944,7.232804c-33.303454,0 -66.606804,0 -99.91028,0c3.559296,-2.821794 7.118726,-5.643664 10.678156,-8.465458l0,0.000007z"
                    fill="#aeb4b8"
                    stroke=" #b19c5d"
                    id="svg_19"
                    opacity="0.5"
                    stroke-width="5"
                    transform="rotate(-7.03746 396.384 600.268)"
                />
                <text
                    fill="#5684a4"
                    font-family="'Caveat', cursive"
                    font-size="150"
                    font-weight="bold"
                    id="svg_2"
                    stroke="#000000"
                    transform="rotate(8 150 150) "
                    stroke-dasharray="null"
                    stroke-linecap="null"
                    stroke-linejoin="null"
                    stroke-width="0"
                    text-anchor="middle"
                    x="200"
                    xml:space="preserve"
                    y="300"
                >
                    P.Dm.O.
                </text>
            </g>
        </svg>
    </transition>
</template>

<script setup>
import gsap from "gsap";
import { defineEmits } from "vue";

const emits = defineEmits(["btnAnimation"]);
function action(el) {
    const tl = gsap.timeline();
    tl.from(el.querySelector("#svg_19"), {
        duration: 0.7,
        ease: "back.out(1.7)",
        opacity: 0,
        delay: 0.5,
        scale: 0.2,
        transformOrigin: "center",
    })
        .from(el.querySelector("#svg_2"), {
            duration: 0.7,
            ease: "back.out(2)",
            scale: 5,
            opacity: 0,
            transformOrigin: "center",
        })
        .add(() => {
            const tl = gsap.timeline({});
            tl.to(el.querySelector("#svg_19"), {
                y: 10,
                repeat: -1,
                yoyo: true,
                duration: 1.5,
            }).to(el.querySelector("#svg_2"), {
                rotation: 7,
                x: 8,
                // x: "rotate(0.5turn);",
                repeat: -1,
                yoyo: true,
                duration: 1.5,
            });
        });
}
emits("btnAnimation", true);
</script>


<style scoped>
#svg_19 {
    animation-name: active-path;
    animation-fill-mode: forwards;
    animation-duration: 5s;
    animation-delay: 1.2s;
    animation-timing-function: ease;
    /* animation-iteration-count: infinite; */
    stroke-dasharray: 900;
    stroke-dashoffset: 900;
}
@keyframes active-path {
    to {
        stroke-dashoffset: 0;
    }
}
</style>