<script setup>
import NavigationLink from './NavigationLink.vue'

const nav = [
    {
        page: "Blog",
        link: "/blog"
    },
    {
        page: "Templates",
        link: "/templates"
    },
    {
        page: "Tutorials",
        link: "/tutorials"
    },
    {
        page: "Renders",
        link: "/renders"
    }
]
</script>

<template>
    <div class="Nav z-0 w-full bg-[#020007] mt-[-5rem] mb-6 py-3 border-black border-b-10 flex items-center justify-center text-center">
        <NavigationLink v-for="item in nav" :page="item.page" :link="item.link" />
    </div>
</template>

<style scoped>
</style>