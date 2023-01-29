<template>
    <button class="knopka01 font-ProstoOne"><slot></slot></button>
</template>
<script>
export default {};
</script>

<style scoped>
.knopka01 {
    /* font-family: "Prosto One", cursive; */
    display: inline-block;
    width: 16rem;
    padding: 10px;
    font-size: 1.2rem;
    text-align: center;
    text-decoration: none;
    text-shadow: 0 1px rgba(255, 255, 255, 0.2), 0 -1px rgba(0, 0, 0, 0.8);
    outline: none;
    border: none;
    border-radius: 55px;
    background: rgb(86, 132, 164)
        radial-gradient(
            150% 100% at 50% 5px,
            rgba(255, 255, 255, 0.2),
            rgba(0, 0, 0, 0)
        );
    box-shadow: inset rgba(0, 0, 0, 0.6) 0 -2px 5px,
        inset rgba(252, 255, 255, 0.7) 0 2px 5px,
        rgba(0, 0, 0, 0.8) 0 2px 5px -1px;
    color: rgb(0, 79, 86);
}
.knopka01:hover {
    color: rgb(0, 59, 66);
    cursor: pointer;
}
.knopka01:active {
    padding-bottom: 10px;
    box-shadow: inset rgba(0, 0, 0, 1) 0 1px 3px,
        inset rgba(0, 0, 0, 0.6) 0 -2px 5px,
        inset rgba(252, 255, 255, 0.7) 0 2px 5px,
        0 1px rgba(255, 255, 255, 0.08);
    color: rgb(128, 207, 214);
}
</style>