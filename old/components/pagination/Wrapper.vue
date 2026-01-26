<script setup>
import { computed } from 'vue';
const emit = defineEmits(['changePage'])

const props = defineProps({
    itemCount: {
        type: Number,
        required: true
    },
    itemsPerPage: {
        type: Number,
        default: 10
    },
    currentPage: {
        type: Number,
        required: true
    }
})

const pageCount = computed(() =>
    Math.ceil(props.itemCount / props.itemsPerPage)
);

const pages = computed(() => {
    const total = pageCount.value;
    const current = props.currentPage;
    let result = [];

    // Always add the first page
    if (total > 0) result.push(1);

    if (current === 1 || current === 2) {
        // Add the next two pages if the current page is 1 or 2
        result.push(2);
        if (total > 2) result.push(3);
    } else if (current === total || current === total - 1) {
        // Add the previous two pages if the current page is the last or second to last
        if (total > 2) result.push(total - 2);
        result.push(total - 1);
    } else {
        // Add the previous, current, and next pages
        result.push(current - 1);
        result.push(current);
        result.push(current + 1);
    }

    // Always add the last page if not already included
    if (total > 1 && !result.includes(total)) result.push(total);

    // Remove duplicates and sort the pages
    result = [...new Set(result)].sort((a, b) => a - b);

    return result;
});
</script>

<template>
    <div>
        <slot></slot>
        <div class="flex justify-center gap-5 w-full my-8" v-if="pages.length > 1">
            <button
                type="button"
                v-for="page in pages"
                :key="page"
                @click="$emit('changePage', page)"
                :class="{ active: page === currentPage }"
                :disabled="page === currentPage"
            >
                {{ page }}
            </button>
        </div>
    </div>
</template>