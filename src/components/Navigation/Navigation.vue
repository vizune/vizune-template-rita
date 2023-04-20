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
    <div class="z-0 w-full bg-[#020007] mt-[-5rem] mb-10 md:border-[#24047099] md:border-b-2 flex flex-col md:flex-row items-center justify-center text-center">
        <NavigationLink v-for="item in nav" :page="item.page" :link="item.link" />
    </div>
</template>
