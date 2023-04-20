<script setup>
const props = defineProps({
    page: String,
    link: String
})
</script>

<template>
    <div class="z-20 block w-full md:w-auto">
        <a :href="link" class="w-full block relative p-4 md:p-5 hover:text-white border-[#240470] border-b-2 md:border-b-0">
            <span class="text-lg uppercase font-medium tracking-widest">{{ page }}</span>
        </a>
    </div>
</template>

<style scoped>
a {
    transform: perspective(1px) translateZ(0);
    transition: color .4s ease, background-color .3s ease;
}

a:before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(36, 4, 112, 0.6);
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top center;
    transition: opacity .15s ease, transform .3s ease-out;
}

a:hover:before {
    opacity: 1;
    transform: scaleY(1);
}
</style>