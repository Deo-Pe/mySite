<template>
    <div
        class="flex flex-col justify-around w-screen sm:p-4 h-96 relative"
        @click.stop="curentTab = null"
    >
        <transition name="emergence">
            <ul class="text-2xl text-main mx-auto" v-if="!curentTab">
                <li
                    v-for="(tab, key) in tabServices"
                    :key="tab.id"
                    class="
                        hover:text-main2
                        w-max
                        sm:w-11/12
                        font-ProstoOne
                        relative
                    "
                    :class="{ active: curentTab === key }"
                    @click.stop="curentTab = key"
                >
                    {{ tab.title }}
                </li>
            </ul>
            <component
                v-else
                :is="currentTabComponent"
                class="text-xs overflow-y-scroll"
            />
        </transition>
    </div>
</template>

<script>
import servicescorpSite from "@/components/servicesTabsComponent/servicescorpSite";
import servicesshop from "@/components/servicesTabsComponent/servicesshop";
import servicesbusinessCard from "@/components/servicesTabsComponent/servicesbusinessCard";
import servicesnews from "@/components/servicesTabsComponent/servicesnews";
import servicespromo from "@/components/servicesTabsComponent/servicespromo";
import serviceslandingPage from "@/components/servicesTabsComponent/serviceslandingPage";
import servicesSSR from "@/components/servicesTabsComponent/servicesSSR";
export default {
    components: {
        servicesSSR,
        servicescorpSite,
        servicesshop,
        servicesbusinessCard,
        servicesnews,
        servicespromo,
        serviceslandingPage,
    },
    data() {
        return {
            isShowList: true,
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
    methods: {},
};
</script>

<style scoped>
.emergence-enter-active,
.emergence-leave-active {
    transition: all 0.4s ease-in;
}
.emergence-enter-from,
.emergence-leave-to {
    transform: scale(0);
    opacity: 0.1;
}
.emergence-enter-to,
.emergence-leave-from {
    opacity: 1;
    transform: scale(1);
}
</style>