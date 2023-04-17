<script setup>
const props = defineProps({
    page: String,
    link: String
})
</script>

<template>
    <div class="z-20">
        <a :href="link" class="p-3 hover:text-white text-lg uppercase font-medium tracking-widest">{{ page }}</a>
    </div>
</template>

<style scoped>
a {
    transition: color .4s ease, background-color .3s ease;
}
a:hover {
    background-color: rgba(36, 4, 112, 0.6);
}
</style>