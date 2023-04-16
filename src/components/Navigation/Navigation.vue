<script setup>
import NavigationLink from './NavigationLink.vue'
</script>

<template>
    <div class="Nav w-full bg-black mt-[-5rem] mb-6 py-3 border-black border-b-10 flex items-center justify-center text-center">
        <NavigationLink page="Blog" link="/blog" />
        <NavigationLink page="Templates" link="/templates" />
        <NavigationLink page="Tutorials" link="/tutorials" />
        <NavigationLink page="Archive" link="/archive" />
        <NavigationLink page="Portfolio" link="/portfolio" />
    </div>
</template>

<style scoped>
.Nav > * + * {
    margin-left: 2rem;
}
</style>