<script setup>
import { convertDate } from '../../utilities/convertDate';

const props = defineProps({
    title: {
        type: Object,
        required: true
    },
    slug: {
        type: Object,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    publishDate: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="flex flex-col xl:flex-row align-center border-4 border-ocean p-2 h-full">
        <img :src="thumbnail" role="presentation" class="w-[15.625rem] h-[15.625rem] mx-auto xl:mx-0" />
        <div class="text-left mt-4 xl:mt-0 xl:ml-4 flex flex-col h-full w-full">
            <h2 class="font-bold mb-1 text-dark normal-case text-xl">{{ title }}</h2>
            <p class="font-bold">{{ convertDate(publishDate) }}</p>
            <p class="grow">{{ description }}</p>
            <router-link :to="`/${category}/${slug}`" class="button">
                <div class="flex justify-between items-center">
                    <span>Read more</span>
                    <svg class="icon">
                        <use xlink:href="#rightArrow"></use>
                    </svg>
                </div>
            </router-link>
        </div>
    </div>
</template>