<template>
    <icomoon :iconSet="iconSet" v-bind="props" />
</template>

<script>
import { Icomoon } from "vue-icomoon";
import iconSet from "./selectionArrow.json";

export default {
    name: "iconArrow",
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