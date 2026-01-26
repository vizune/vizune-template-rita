<script setup>
import { convertDate } from '../../utilities/convertDate';

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
    <div class="text-left flex flex-col mb-6 h-full bg-[#f2f2f2]">
        <h2 class="mb-0 mt-6 flex flex-col gap-1 pl-4 pt-4 leading-tight font-bold grow text-base border-t-4 border-midnight"><span v-for="text in fields.title.split(/: (.*)/s)">{{ text }}</span></h2>
        <img :src="asset" class="mb-1" v-if="asset" />
        <div class="bg-charcoal text-white gap-1 p-5">
            <p class="mb-0"><strong>Publish Date:</strong> {{ convertDate(fields.date) }}</p>
            <p class="m-0"><strong>Dimensions:</strong> {{ fields.imageDimensions }}</p>
            <p class="m-0"><strong>File Size:</strong> {{ fields.fileSize }}</p>
        </div>
        <div class="flex justify-center mt-1">
          <a :href="fields.downloadUrl" target="_blank" class="button w-full">
                <div class="flex justify-between items-center">
                    <span>Download</span>
                    <div class="flex items-center">
                        <svg class="icon mr-3">
                            <use xlink:href="#download"></use>
                        </svg>
                        <svg class="icon">
                            <use xlink:href="#new-tab"></use>
                        </svg>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>