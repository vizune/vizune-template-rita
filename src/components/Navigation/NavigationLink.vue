<script setup>
const props = defineProps({
    page: String,
    link: String
})
</script>

<template>
    <div class="z-20">
        <a :href="link" class="text-lg uppercase tracking-widest">{{ page }}</a>
    </div>
</template>

<style scoped>

</style>