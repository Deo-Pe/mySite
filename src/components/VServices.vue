<template>
    <section
        class="flex bg-opacity-95 bg-mainCol"
        @click.stop="curentTab = null"
    >
        <Contact @close="closeForm" v-show="isContact" />
        <span @click="toHome" class="absolute m-5 cursor-pointer">
            <iconArrow icon="arrow-left-outline" :size="70" class="text-main" />
        </span>
        <div class="flex flex-col justify-around p-11">
            <ul class="text-2xl text-main">
                <li
                    v-for="(tab, key) in tabServices"
                    :key="tab.id"
                    class="cursor-pointer hover:text-main2 w-max font-ProstoOne"
                    :class="{ active: curentTab === key }"
                    @click.stop="curentTab = key"
                >
                    {{ tab.title }}
                </li>
            </ul>
            <div class="w-full">
                <h4 class="text-center mb-5 text-2xl">Заказать</h4>
                <main-btn @click="addForm" class="px-5">{{
                    btnServices
                }}</main-btn>
            </div>
        </div>
        <transition mode="out-in" @enter="enter" @leave="leave">
            <div
                v-if="!curentTab"
                class="w-2/3 py-60 font-Laptev colorTextBlue"
            >
                <p>
                    <span>Сайт</span> — не панацея. Он не сделает убыточный
                    бизнес прибыльным, не привлечет вдруг огромное количество
                    клиентов. Сайт — функциональный инструмент для бизнеса, и
                    чтобы быть эффективным, он требует внимания и больших
                    вложений. При должной заботе он будет работать, помогать в
                    продвижении и упрощать работу с клиентами.
                </p>
                <p>
                    Наиболее успешные предприятия в сегодняшнюю быстро
                    развивающуюся, динамичную и конкурентную цифровую эпоху
                    являются свидетельством того, что клиентоориентированность -
                    единственный устойчивый способ развития бизнеса. А
                    стремительно сокращающийся объем внимания пользователей
                    подталкивает компании к поиску новых и лучших способов
                    обеспечения бесперебойной работы клиентов.
                </p>
                <br />
                <p>
                    <span>Одностраничное приложение (SPA)</span> - идеальный
                    выбор для вашего бизнеса, если вы планируете создать
                    привлекательный, уникальный и удобный интерфейс для своих
                    пользователей.
                </p>
                <p>
                    Это причина, по которой многие организации начали создавать
                    части своих веб-приложений, используя новый веб-дизайн,
                    называемый одностраничным приложением.
                </p>
            </div>
            <component
                v-else
                :is="currentTabComponent"
                class="self-start my-10 mr-16 p-3 border-l-2"
            ></component>
        </transition>
    </section>
</template>

<script>
import servicescorpSite from "@/components/servicesTabsComponent/servicescorpSite";
import servicesshop from "@/components/servicesTabsComponent/servicesshop";
import servicesbusinessCard from "@/components/servicesTabsComponent/servicesbusinessCard";
import servicesnews from "@/components/servicesTabsComponent/servicesnews";
import servicespromo from "@/components/servicesTabsComponent/servicespromo";
import serviceslandingPage from "@/components/servicesTabsComponent/serviceslandingPage";
import servicesSSR from "@/components/servicesTabsComponent/servicesSSR";
import iconArrow from "@/components/iconfonts/iconArrow.vue";

export default {
    components: {
        servicesSSR,
        servicescorpSite,
        servicesshop,
        servicesbusinessCard,
        servicesnews,
        servicespromo,
        serviceslandingPage,
        iconArrow,
    },
    data() {
        return {
            isContact: false,
            tabServices: {
                corpSite: {
                    title: "Корпоративный сайт",
                    id: 1,
                },
                shop: {
                    title: "Интернет-магазин",
                    id: 2,
                },
                businessCard: {
                    title: "Сайт-визитка",
                    id: 3,
                },
                news: {
                    title: "Новостной портал",
                    id: 4,
                },
                promo: {
                    title: "Промо сайт",
                    id: 5,
                },
                landingPage: {
                    title: "Целевая страница",
                    id: 6,
                },
                SSR: {
                    title: "SSR",
                    id: 7,
                },
            },
            curentTab: null,
        };
    },
    computed: {
        currentTabComponent() {
            return `services${this.curentTab}`;
        },
        btnServices() {
            return this.curentTab
                ? this.tabServices[this.curentTab].title
                : `....`;
        },
    },
    methods: {
        enter(el, done) {
            this.$gsap.from(el, 0.6, {
                opacity: 0,
                x: 200,
                onComplete: done,
            });
        },
        leave(el, done) {
            this.$gsap.to(el, 0.4, {
                opacity: 0,
                x: -200,
                onComplete: done,
            });
        },
        toHome() {
            window.scrollTo(0, window.pageXOffset);
        },
        addForm() {
            if (this.curentTab) {
                this.isContact = !this.isContact;
            }
            document.querySelector("body").style.overflowY = "hidden";
            return 0;
        },
        closeForm() {
            this.isContact = !this.isContact;
            document.querySelector("body").style.overflowY = "auto";
        },
    },
};
</script>

<style scoped>
.active {
    color: #aeb4b8;
}
li {
    cursor: pointer;
    margin: 0.3rem;
}
li:hover {
    transition-property: color;
    transition-duration: 0.3s;
}
</style>