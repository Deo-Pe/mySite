<template>
    <transition name="poligon" appear>
        <div class="poligon"></div>
    </transition>
</template>

<script>
export default {};
</script>

<style>
.poligon {
    background: #e6eaed;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    /* clip-path: polygon(0 38%, 0% 100%, 80% 100%); */
    animation: 8s polygon ease infinite;
    /* animation-fill-mode: both; */
}
.poligon-enter-active {
    animation: 4s polygonStart ease 0.5s alternate;
    animation-fill-mode: both;
}

@keyframes polygonStart {
    0% {
        clip-path: polygon(0 100%, 0% 100%, 100% 100%);
    }
    100% {
        clip-path: polygon(0 38%, 0% 100%, 80% 100%);
    }
}
@keyframes polygon {
    0% {
        clip-path: polygon(0 38%, 0% 100%, 80% 100%);
    }
    25% {
        clip-path: polygon(0 39%, 0% 100%, 81% 100%);
    }
    50% {
        clip-path: polygon(0 35%, 0% 100%, 79% 100%);
    }
    75% {
        clip-path: polygon(0 40%, 0% 100%, 81% 100%);
    }
    100% {
        clip-path: polygon(0 38%, 0% 100%, 80% 100%);
    }
}
</style>