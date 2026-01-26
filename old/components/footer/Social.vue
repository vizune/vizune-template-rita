<script setup lang="ts">
const social = [
    {
        url: "https://github.com/vizune",
        icon: "github",
        name: "Github"
    },
    {
        url: "https://www.deviantart.com/vizune",
        icon: "deviantart",
        name: "Deviant Art"
    },
    {
        url: "https://www.instagram.com/vizune_/",
        icon: "instagram",
        name: "Instagram"
    },
    {
        url: "https://www.linkedin.com/in/sasha-r-547a2b57",
        icon: "linkedin",
        name: "LinkedIn"
    },
    {
        url: "https://discordapp.com/users/vizune.",
        icon: "discord",
        name: "Discord"
    },
    {
        url: "https://www.pinterest.co.uk/vizune/",
        icon: "pinterest",
        name: "Pinterest"
    },
    {
        url: "https://open.spotify.com/user/1149827575",
        icon: "spotify",
        name: "Spotify"
    },
    {
        url: "https://steamcommunity.com/id/vizune",
        icon: "steam",
        name: "Steam"
    },
    {
        url: "https://twitter.com/Vizune_",
        icon: "twitter",
        name: "Twitter"
    }
]
</script>

<template>
    <div class="text-white border-t-4 border-white flex justify-center bg-[url(/footer-bg.jpg)] bg-center">
        <div class="grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-4 md:gap-2 max-w-lg w-full py-4 px-8">
            <div v-for="item in social" class="flex justify-center">
                <a :href="item.url" target="_blank" :title="item.name" class="text-ice hover:text-carmine">
                    <svg class="h-8 w-8">
                        <use :xlink:href="`#${item.icon}`"></use>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>