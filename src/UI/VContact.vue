<template>
    <transition name="emergence">
        <div
            class="h-screen w-screen flex bg-gray-200 z-20 absolute"
            @click.self="inputBlock = false"
        >
            <div class="close" @click="$emit('close', false)"></div>
            <div class="m-auto">
                <section class="flex items-center justify-around">
                    <!-- <a
                        href="https://wa.me/79158868360?text=Hello!%20%F0%9F%91%8B"
                        target="_blank"
                    >
                        <svg
                            class="cursor-pointer w-20 h-20"
                            version="1.1"
                            fill="#B19C5D"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                        >
                            <title>whatsapp</title>
                            <path
                                d="M27.281 4.65c-2.994-3-6.975-4.65-11.219-4.65-8.738 0-15.85 7.112-15.85 15.856 0 2.794 0.731 5.525 2.119 7.925l-2.25 8.219 8.406-2.206c2.319 1.262 4.925 1.931 7.575 1.931h0.006c0 0 0 0 0 0 8.738 0 15.856-7.113 15.856-15.856 0-4.238-1.65-8.219-4.644-11.219zM16.069 29.050v0c-2.369 0-4.688-0.637-6.713-1.837l-0.481-0.288-4.987 1.306 1.331-4.863-0.313-0.5c-1.325-2.094-2.019-4.519-2.019-7.012 0-7.269 5.912-13.181 13.188-13.181 3.519 0 6.831 1.375 9.319 3.862 2.488 2.494 3.856 5.8 3.856 9.325-0.006 7.275-5.919 13.188-13.181 13.188zM23.294 19.175c-0.394-0.2-2.344-1.156-2.706-1.288s-0.625-0.2-0.894 0.2c-0.262 0.394-1.025 1.288-1.256 1.556-0.231 0.262-0.462 0.3-0.856 0.1s-1.675-0.619-3.188-1.969c-1.175-1.050-1.975-2.35-2.206-2.744s-0.025-0.613 0.175-0.806c0.181-0.175 0.394-0.463 0.594-0.694s0.262-0.394 0.394-0.662c0.131-0.262 0.069-0.494-0.031-0.694s-0.894-2.15-1.219-2.944c-0.319-0.775-0.65-0.669-0.894-0.681-0.231-0.012-0.494-0.012-0.756-0.012s-0.694 0.1-1.056 0.494c-0.363 0.394-1.387 1.356-1.387 3.306s1.419 3.831 1.619 4.1c0.2 0.262 2.794 4.269 6.769 5.981 0.944 0.406 1.681 0.65 2.256 0.837 0.95 0.3 1.813 0.256 2.494 0.156 0.762-0.113 2.344-0.956 2.675-1.881s0.331-1.719 0.231-1.881c-0.094-0.175-0.356-0.275-0.756-0.475z"
                            ></path>
                        </svg>
                    </a> -->

                    <svg
                        @click="inputBlock = true"
                        @mouseenter="inputActivate = true"
                        @mouseleave="inputActivate = false"
                        class="cursor-pointer w-20 h-20"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#B19C5D"
                        viewBox="0 0 34 34"
                    >
                        <title>email</title>
                        <path
                            d="M29.844 24c1.371-2.355 2.156-5.078 2.156-8 0-8.836-7.164-16-16-16s-16 7.164-16 16 7.164 16 16 16c4.418 0 8.418-1.789 11.312-4.688l-2.832-2.832c-2.171 2.176-5.171 3.52-8.48 3.52-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12c0 1.422-0.273 2.781-0.73 4.047l-0.032-0.047h-3.238v-11.957h-8c-4.418 0-8 3.582-8 8s3.582 8 8 8c1.836 0 3.508-0.645 4.859-1.684 0.727 0.969 1.836 1.641 3.141 1.641h5.844zM20 14.008v2.035c0 2.207-1.797 4-4 4s-4-1.793-4-4 1.797-4 4-4h4v1.965z"
                        ></path>
                    </svg>

                    <a href="https://t.me/localhostInTheWorld" target="_blank">
                        <svg
                            class="cursor-pointer w-20 h-20"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#B19C5D"
                            viewBox="0 0 34 34"
                        >
                            <title>telegram</title>
                            <path
                                d="M31.543 0.16c-0.166-0.107-0.355-0.16-0.543-0.16-0.193 0-0.387 0.055-0.555 0.168l-30 20c-0.309 0.205-0.479 0.566-0.439 0.936 0.038 0.369 0.278 0.688 0.623 0.824l7.824 3.131 3.679 6.438c0.176 0.309 0.503 0.5 0.857 0.504 0.004 0 0.007 0 0.011 0 0.351 0 0.677-0.186 0.857-0.486l2.077-3.463 9.695 3.877c0.119 0.048 0.244 0.071 0.371 0.071 0.17 0 0.338-0.043 0.49-0.129 0.264-0.148 0.445-0.408 0.496-0.707l5-30c0.065-0.393-0.109-0.787-0.443-1.004zM3.136 20.777l23.175-15.451-16.85 18.037c-0.089-0.053-0.168-0.123-0.266-0.162l-6.059-2.424zM10.189 24.066c-0.002-0.004-0.005-0.006-0.007-0.010l18.943-20.275-16.149 25.162-2.787-4.877zM25.217 29.609l-8.541-3.416c-0.203-0.080-0.414-0.107-0.623-0.119l13.152-20.388-3.988 23.923z"
                            ></path>
                        </svg>
                    </a>
                </section>
                <section class="form">
                    <transition name="isForm">
                        <form
                            name="form"
                            @submit.prevent="senfForm"
                            class="flex flex-col space-y-5 formData"
                            v-show="inputBlock || inputActivate"
                        >
                            <input
                                type="text"
                                name="email"
                                v-model="email"
                                placeholder="Ваши контакты"
                                @click="inputBlock = true"
                                required
                                maxlength="30"
                                minlength="5"
                            />
                            <textarea
                                @click="inputBlock = true"
                                id="formMes"
                                v-model="text"
                                cols="70"
                                name="text"
                                rows="4"
                                placeholder="Сообщение"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                class="text-4xl w-96 text-Laptev"
                                :class="classBtn"
                            >
                                Отправить
                            </button>
                        </form>
                    </transition>
                </section>
            </div>
        </div>
    </transition>
</template>

<script>
import axios from "axios";
import delayAdapterEnhancer from "axios-delay";
export default {
    data() {
        return {
            inputActivate: false,
            inputBlock: false,
            text: "",
            email: "",
            msg: "",
        };
    },
    methods: {
        async senfForm() {
            const message = ` <b>Email</b>: <i> ${this.email}</i> \n <b>Text</b>: <i>${this.text}</i>`;
            try {
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
                this.email = "";
                this.text = "";
            } catch (error) {
                throw new Error(error);
            }
        },
    },
    computed: {
        classBtn() {
            return this.email.length >= 5 && this.text.length > 0
                ? "text-mycolor cursor-pointer"
                : "text-gray-300 cursor-not-allowed";
        },
    },
};
</script>

<style scoped>
.active {
    cursor: pointer;
    color: #b19c5d;
}
.form {
    height: 270px;
    padding-top: 50px;
    width: 380px;
}

.isForm-enter-active,
.isForm-leave-active {
    transition: opacity 0.5s ease;
}

.isForm-enter-from,
.isForm-leave-to {
    opacity: 0.1;
    transition: opacity 3s ease;
}

.emergence-enter-active,
.emergence-leave-active {
    transition: all 0.6s ease-in;
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
    left: 90%;
    top: 5%;
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