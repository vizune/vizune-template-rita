<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])

</script>

<template>
    <div class="flex flex-wrap gap-4 justify-center">
        <select class="py-3 pl-3 pr-[2.5rem] h-14 w-full md:w-auto" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
            <slot></slot>
        </select>
        <button class="bg-carmine text-white px-4" @click="$emit('update:modelValue', '')" :disabled="modelValue.length === 0">Clear filter</button>
    </div>
</template>