<template>
    <div
        class="
            flex
            justify-end
            pt-16
            sm:pt-4 sm:text-4xl
            text-5xl text-main
            pr-16
            sm:mr-0
        "
    >
        <h1 class="xl:w-4/5 w-2/3 sm:w-full px-4" id="textAnim">
            <span ref="helloText" class="animationText">Привет! </span>
            <span ref="meNameText" class="animationText">Меня зовут </span>
            <span ref="nameText" class="animationText text-mycolor"
                >Дмитрий</span
            >
            <span ref="myText" class="animationText">, я </span>
            <span ref="frontText" class="animationText p-1 text-mycolor"
                >вэб</span
            >
            <span ref="devText" class="animationText"> разработчик.</span>
        </h1>
    </div>
    <p
        ref="textVuejs"
        class="
            text-2xl
            sm:text-base
            font-Caveat
            text-right
            sm:text-center
            text-mycolor
            mr-40
            sm:mr-0
            mt-3
            animationText
        "
    >
        React, Vue.js, GreenSock, Tailwind, Node, Express.
    </p>
</template>

<script>
export default {
    data() {
        return {};
    },
    emits: ["endAnimationHeader"],
    mounted() {
        this.wrapLetеer(this.$refs.helloText);
        this.wrapLetеer(this.$refs.meNameText);
        this.wrapLetеer(this.$refs.myText);
        this.wrapLetеer(this.$refs.devText);
        this.wrapWord(this.$refs.nameText);
        this.wrapWord(this.$refs.frontText);
        this.wrapWord(this.$refs.textVuejs);
        this.startAnim();
    },
    methods: {
        startAnim() {
            const helloText = this.$refs.helloText;
            const meNameText = this.$refs.meNameText;
            const nameText = this.$refs.nameText;
            const myText = this.$refs.myText;
            const frontText = this.$refs.frontText;
            const devText = this.$refs.devText;
            const textVuejs = this.$refs.textVuejs;

            const tl = this.$gsap.timeline({ delay: 0.6 });

            tl.from(helloText.querySelectorAll(".leter"), 0.6, {
                opacity: 0,
                scale: 0.1,
                x: "random(-600, 600)",
                y: "random(-200, 200)",
                z: "random(-300, 300)",
                stagger: 0.05,
                delay: 0.02,
                repeat: 0,
                ease: "expo.out",
            })
                .from(
                    meNameText.querySelectorAll(".leter"),
                    0.6,
                    {
                        opacity: 0,
                        delay: 0.2,
                        stagger: 0.1,
                        scale: 1,
                    },
                    "-=0.7"
                )
                .from(
                    nameText.querySelectorAll(".dropWord"),
                    0.7,
                    {
                        scale: 3,
                        opacity: 0,
                        ease: "back.out(1.7)",
                        stagger: 0.6,
                    },
                    "-=1"
                )
                .from(
                    myText.querySelectorAll(".leter"),
                    0.6,
                    {
                        opacity: 0,
                        delay: 0.2,
                        stagger: 0.1,
                        scale: 1,
                    },
                    "-=0.7"
                )
                .from(
                    frontText.querySelectorAll(".dropWord"),
                    0.7,
                    {
                        scale: 3,
                        opacity: 0,
                        ease: "back.out(1.7)",
                        stagger: 0.6,
                    },
                    "-=0.3"
                )
                .from(
                    devText.querySelectorAll(".leter"),
                    0.6,
                    {
                        opacity: 0,
                        scale: 0.1,
                        x: "random(-600, 600)",
                        y: "random(-200, 200)",
                        z: "random(-300, 300)",
                        stagger: 0.05,
                        delay: 0.02,
                        repeat: 0,
                        ease: "expo.out",
                    },
                    "-=0.5"
                )
                .from(
                    textVuejs.querySelectorAll(".dropWord"),
                    0.8,
                    {
                        opacity: 0,
                        y: "random(-50, 50)",
                        stagger: 0.05,
                        ease: "back.out(3)",
                    },
                    "-=0.2"
                )
                .then(() => {
                    this.$emit("endAnimationHeader");
                });
        },
        wrapLetеer(el) {
            el.innerHTML = el.textContent.replace(/(\S*)/g, (m) => {
                return (
                    `<span class="word">` +
                    m.replace(
                        /(-|#|@)?\S(-|#|@)?/g,
                        "<span class='leter'>$&</span>"
                    ) +
                    `</span>`
                );
            });
            return el;
        },
        wrapWord(el) {
            el.innerHTML = el.textContent.replace(
                /(^|<\/?[^>]+>|\s+)([^\s<]+)/g,
                '$1<span class="dropWord">$2</span>'
            );
        },
    },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Prosto+One&display=swap");
h1 {
    font-family: "Prosto One", cursive;
}
.animationText {
    position: relative;
}
</style>