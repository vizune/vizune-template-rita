<script setup>
const props = defineProps({
    fields: {
        type: Object,
        required: true
    },
    asset: {
        type: String
    }
})
</script>

<template>
    <div class="wrapper-item text-left flex flex-col items-center h-full">
        <img :src="asset" />
        <div class="wrapper-info bg-charcoal text-white gap-1 p-2 grow w-full">
            <span class="text-xs text-center break-words block w-full">{{ fields.category }}</span>
        </div>
    </div>
</template>