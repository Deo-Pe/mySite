<template>
    <section class="opacity-0">
        <transition @enter="enter" @leave="leave" mode="out-in">
            <h2 class="cursor-pointer" @click="visiblMenu" v-if="isActive">
                <icon icon="menu_open" :size="80" class="text-main" />
            </h2>
            <div v-else class="">
                <span
                    class="
                        closeListIcon
                        text-1xl
                        cursor-pointer
                        text-mycolor
                        font-ProstoOne
                    "
                    @click="visiblMenu"
                >
                    Закрыть
                </span>
                <ul class="text-2xl text-main">
                    <li
                        class="hover:text-main2 w-max font-ProstoOne"
                        v-for="(text, i) in listText"
                        :key="i"
                        :style="{ marginLeft: 30 * i + 'px' }"
                        @click="goLink"
                        :data-list-index="i"
                    >
                        {{ text }}
                    </li>
                </ul>
            </div>
        </transition>
    </section>
</template>

<script>
import Icon from "@/components/iconfonts/icon.vue";
export default {
    components: {
        Icon,
    },
    data() {
        return {
            isActive: true,
            listText: ["Связь", "Услуги", "Примеры работ"],
        };
    },
    methods: {
        visiblMenu() {
            this.isActive = !this.isActive;
        },
        enter(el, done) {
            let listActive = this.$gsap.utils.toArray(
                el.querySelectorAll("li")
            );
            if (listActive.length) {
                this.$gsap
                    .timeline()
                    .from(".closeListIcon", {
                        duration: 0.7,
                        scale: 5,
                        opacity: 0,
                    })
                    .from(
                        listActive,
                        {
                            opacity: 0,
                            stagger: 0.1,
                            duration: 0.7,
                            scale: 3,
                            x: "random(50%, -50%)",
                            onComplete: done,
                        },
                        "-=0.4"
                    );
            } else {
                this.$gsap.from(el, {
                    duration: 0.7,
                    y: "20%",
                    opacity: 0,
                    onComplete: done,
                });
            }
        },
        leave(el, done) {
            let listActive = this.$gsap.utils.toArray(
                el.querySelectorAll("li")
            );
            if (listActive.length) {
                this.$gsap
                    .timeline()
                    .to(".closeListIcon", {
                        duration: 0.7,
                        scale: 3,
                        opacity: 0,
                    })
                    .to(
                        listActive,
                        {
                            opacity: 0,
                            stagger: 0.2,
                            duration: 0.7,
                            scale: 2,
                            y: "random(50%, -50%)",
                            onComplete: done,
                        },
                        "-=0.5"
                    );
            } else {
                this.$gsap.to(el, {
                    duration: 0.3,
                    y: "20%",
                    opacity: 0,
                    onComplete: done,
                });
            }
        },
        goLink(e) {
            // console.log(document.querySelector(".mainBlock").offsetWidth);
            const listIndex = e.target.dataset.listIndex;
            if (listIndex === "0") {
                this.$emit("goForm", true);
                return;
            } else {
                window.scrollTo(0, window.innerWidth * listIndex);
                return;
            }
            // console.log(window.innerWidth);
        },
    },
};
</script>

<style scoped>
li {
    cursor: pointer;
    margin: 0.3rem;
}
li:hover {
    transition-property: color;
    transition-duration: 0.6s;
}
</style>