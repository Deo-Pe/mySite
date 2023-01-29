<template>
    <icomoon :iconSet="iconSet" v-bind="props" />
</template>

<script>
import { Icomoon } from "vue-icomoon";
import iconSet from "@/iconfonts/fonts/selection.json";
export default {
    name: "icon",
    components: {
        Icomoon,
    },
    props: {
        icon: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        return {
            props,
            iconSet,
        };
    },
};
</script>