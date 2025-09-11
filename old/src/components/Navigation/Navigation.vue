<script setup>
import NavigationLink from './NavigationLink.vue'

const nav = [
    {
        page: "Blog",
        link: "/blog"
    },
    {
        page: "About",
        link: "/about"
    },
    {
        page: "Avatars",
        link: "/avatars"
    },
    {
        page: "Renders",
        link: "/renders"
    },
    {
        page: "PSD downloads",
        link: "/renders"
    },
    {
        page: "Templates",
        link: "/templates"
    },
    {
        page: "Tutorials",
        link: "/tutorials"
    },
]
</script>

<template>
    <div class="z-0 w-full bg-[#020007] mt-[-5rem] md:border-[#24047099] md:border-b-2 flex flex-col md:flex-row items-center justify-center text-center">
        <NavigationLink v-for="item in nav" :page="item.page" :link="item.link" />
    </div>
</template>
