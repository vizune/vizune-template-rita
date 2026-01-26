<script setup>
import { useSlots, ref , provide} from 'vue'

const slots = useSlots()
const tabTitles = ref(slots.default().map(tab => tab.props.title))
const selectedTitle = ref(tabTitles.value[0])

provide('selectedTitle', selectedTitle)
</script>

<template>
    <div class="tabs">
        <ul class="flex justify-center items-center gap-4 mb-[3rem] list-none flex-col lg:flex-row p-0 md:border-b-4 md:border-carmine lg:px-4">
            <li
                v-for="title in tabTitles"
                :key="title"
                @click="selectedTitle = title"
                class="grow w-full lg:w-auto"
            >
                <button :class="{ active: selectedTitle === title }" class="bg-carmine hover:bg-white border-4 border-carmine w-full relative z-10 p-3 text-left hover:text-carmine">
                    <span>{{ title }}</span>
                </button>
            </li>
        </ul>
        <slot />
    </div>
</template>

<style scoped>
button {
    transform: translateY(4px);
}
button:hover {
    text-decoration: underline;
}

@media (min-width: 1024px) {
    button {
        transform: translateY(4px);
    }
    button.active {
        border-bottom: 4px solid #f2f2f2;
    }
}
</style>