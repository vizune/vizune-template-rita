<script setup>
const props = defineProps({
    small: String,
    large: String
})
</script>
<template>
    <h1 class="tracking-wider mb-5">
        <span class="font-monsterrat text-sm sm:text-md font-bold mt-[-2.5rem] sm:mt-[-4rem] text-center max-w-[140px] sm:max-w-[170px]" v-if="small">{{ small }}</span>
        <span class="font-forum text-xl sm:text-3xl text-purple uppercase" v-if="large">{{ large }}</span>
    </h1>
</template>

<style lang="scss" scoped>
h1 {
    background: url('/title.webp') center top no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 415px;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 450px) {
        width: 300px;
        height: 320px;
    }
}
</style>