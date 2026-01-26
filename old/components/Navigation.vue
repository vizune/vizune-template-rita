<script setup>
const nav = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'About',
        url: '/about'
    },
    {
        name: 'Templates',
        url: '/templates'
    },
    {
        name: 'PSDs',
        url: '/psd'
    },
    {
        name: 'Avatars',
        url: '/avatars'
    },
    {
        name: 'Renders',
        url: '/renders'
    },
    {
        name: 'Tutorials',
        url: '/tutorials'
    }
]
</script>

<template>
    <div class="lg:container mx-auto py-8 xl:py-[3.5rem] overflow-hidden">
        <div class="md:mx-4">
        <ul class="flex flex-wrap xl:justify-between px-0 md:px-6">
            <li v-for="link in nav" class="flex items-center justify-center p-4 w-2/4 sm:w-1/3 md:w-1/4 lg:w-1/5 lg:w-auto">
                <NuxtLink 
                    :to="link.url" 
                    class="NavLink w-full h-full flex items-center text-ice text-xl uppercase tracking-wider pl-8 xl:pl-0">
                    <span v-html="link.name" />
                </NuxtLink>
            </li>
        </ul> 
    </div>
    </div>
</template>

<style lang="scss" scoped>
$link-glow: #90c2f5;

.NavLink {
    position: relative;

    &[aria-current="page"] {
        color: white;
        text-shadow: 0 0 10px #fff, 0 0 10px #fff, 0 0 10px $link-glow, 0 0 20px $link-glow, 0 0 20px $link-glow, 0 0 20px $link-glow, 0 0 70px $link-glow;
    }

    & {
        position: relative;

        &:before {
            content: '';
            background: url('/orb.webp') center left no-repeat;
            width: 100%;
            height: 100%;
            position: absolute;
            background-size: 20px;
            transform: translateX(-1.8rem);
            transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) .5s, opacity ease-in-out .25s;
        }
    }

    &:not([aria-current="page"]):hover:before {
        transform: translateX(-1.4rem);
    }
}

li:last-child .NavLink:after {
    display: none;
}
</style>