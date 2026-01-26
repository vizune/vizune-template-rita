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
    <div class="text-left mb-8 flex flex-col h-full">
        <h2 class="font-bold no-underline mt-6 mb-2">{{ fields.title }}</h2>
        <img :src="asset" class="border-t-8 border-black mb-1 pt-1" v-if="asset" />
        <div class="flex flex-col xl:flex-row gap-1">
            <div class="bg-charcoal text-white grow flex flex-col gap-1 p-5 justify-center">
                <p class="mb-0"><strong>Publish Date:</strong> {{ convertDate(fields.publishDate) }}</p>
                <p v-if="fields.techStack" class="mb-0"><strong>Tech Stack:</strong> {{ fields.techStack }}</p>
                <p v-if="fields.category" class="mb-0"><strong>Category:</strong> {{ fields.category }}</p>
                <p v-if="fields.series" class="mb-0">
                    <strong>{{ fields.category && fields.category === "Mangaka/Artist" ? "Artist:" : "Series:" }}</strong> {{ fields.series }}
                </p>
                <p v-if="fields.character" class="mb-0"><strong>Character:</strong> {{ fields.character }}</p>
            </div>
            <div class="flex flex-col lg:flex-row xl:flex-col justify-between gap-1">
                <a :href="fields.demoUrl" target="_blank" class="button w-full xl:w-[400px] grow">
                    <div class="flex h-full justify-between items-center">
                        <span>Demo</span>
                        <div class="flex ml-8">
                            <svg class="icon mr-3">
                                <use xlink:href="#display"></use>
                            </svg>
                            <svg class="icon">
                                <use xlink:href="#new-tab"></use>
                            </svg>
                        </div>
                    </div>
                </a>
                <a :href="fields.repoUrl" target="_blank" class="button w-full xl:w-[400px] grow">
                    <div class="flex h-full justify-between items-center">
                        <span>Source code</span>
                        <div class="flex ml-8">
                            <svg class="icon mr-3">
                                <use xlink:href="#code"></use>
                            </svg>
                            <svg class="icon">
                                <use xlink:href="#new-tab"></use>
                            </svg>
                        </div>
                    </div>
                </a>
                <a :href="fields.downloadUrl" target="_blank" class="button w-full xl:w-[400px] grow">
                    <div class="flex h-full justify-between items-center">
                        <span>Download .zip</span>
                        <div class="flex ml-8">
                            <svg class="icon mr-3">
                                <use xlink:href="#file-zip"></use>
                            </svg>
                            <svg class="icon">
                                <use xlink:href="#new-tab"></use>
                            </svg>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>