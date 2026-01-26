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
    <div class="text-left flex flex-col justify-between mb-3 h-full bg-[#fff]">
        <h2 class="text-center font-bold py-4 text-xl text-ocean bg-midnight mb-0">{{ fields.title }}</h2>
        <img :src="asset" class="mx-auto max-h-[150px]" v-if="asset" />
        <div class="flex justify-center">
          <a :href="fields.url" target="_blank" class="button w-full">
                <div class="flex justify-between items-center">
                    <span>{{ `Download (${fields.fileSize})` }}</span>
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