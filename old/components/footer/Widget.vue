<script setup>
const props = defineProps({
    heading: String,
})
</script>

<template>
    <div class="w-full">
        <h2 class="font-forum text-3xl text-center text-ocean uppercase tracking-wider border-2 px-4 py-2">{{ heading }}</h2>
        <div class="pt-6">
            <slot />
        </div>
    </div>
</template>