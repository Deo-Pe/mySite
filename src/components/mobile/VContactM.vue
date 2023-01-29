<template>
    <transition name="emergence">
        <div
            class="
                flex flex-col
                h-screen
                overflow-hidden
                fixed
                z-40
                bg-gray-200
                w-screen
                pt-32
            "
        >
            <div class="close" @click="closeForm"></div>
            <form @submit.prevent="sendForm" class="space-y-5 px-5">
                <input
                    placeholder="Ваши контакты"
                    class="w-full h-12 inline-block"
                    type="text"
                    v-model="email"
                    name="contact"
                    required
                    minlength="5"
                />
                <textarea
                    required
                    placeholder="Текст"
                    class="w-full resize-none"
                    name="text"
                    rows="6"
                    v-model="text"
                ></textarea>
                <button
                    class="text-4xl text-center w-86 text-Laptev"
                    :class="btnClass"
                >
                    Отправить
                </button>
            </form>
        </div>
    </transition>
</template>

<script setup>
import { defineEmits, ref, computed } from "vue";
import axios from "axios";
import delayAdapterEnhancer from "axios-delay";

let text = ref("");
let email = ref("");

let btnClass = computed(() => {
    return email.value.length >= 5 && text.value.length > 0
        ? "text-mycolor cursor-pointer"
        : "text-gray-300 cursor-not-allowed";
});

const emits = defineEmits(["closeForm"]);
const closeForm = () => {
    emits("closeForm", false);
};

async function sendForm() {
    try {
        const message = ` <b>Email</b>: <i> ${email.value}</i> \n <b>Text</b>: <i>${text.value}</i>`;
        const api = axios.create({
            adapter: delayAdapterEnhancer(axios.defaults.adapter),
            delay: 1200,
        });
        await api.post(
            `https://api.telegram.org/bot${process.env.VUE_APP_TOKEN}/sendMessage`,
            {
                chat_id: process.env.VUE_APP_CHAT_ID,
                parse_mode: "html",
                text: message,
            }
        );
        email.value = "";
        text.value = "";
    } catch (error) {
        throw new Error(error);
    }

    closeForm();
}
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
.close {
    position: relative;
    margin: 0 auto;
    top: -10%;
    cursor: pointer;
    width: 3.5em;
    height: 3.5em;
    background-color: #b19c5d;
    clip-path: polygon(
        20% 0%,
        0% 20%,
        30% 50%,
        0% 80%,
        20% 100%,
        50% 70%,
        80% 100%,
        100% 80%,
        70% 50%,
        100% 20%,
        80% 0%,
        50% 30%
    );
}
</style>