<script setup>
useHead({
  title: 'Vizune.com - Link Exchange'
})

const linkExchangeList = [
  {
    name: 'Dreamscape',
    url: 'http://dreamscape.ezyro.com'
  },
  {
    name: 'Mishipaper Graphics',
    url: 'https://mishipaper.tumblr.com/'
  },
  {
    name: 'Neotokio3TV',
    url: 'https://www.youtube.com/@Neotokio3TV/'
  },
  {
    name: 'Resplendent Reverie',
    url: 'http://reverie.dragonebula.net/',
  }
]

const linkExchangeButtons = [
  {
    name: 'Dark Passion GFX',
    url: 'http://www.dp-gfx.de',
    image: '/buttons/dark-passion-gfx.jpg'
  },
  {
    name: 'Eccentricity',
    url: 'http://eccentricity.sammiirose.com/',
    image: '/buttons/eccentricity.png'
  },
  {
    name: 'Faded Morning',
    url: 'https://faded-morning.carrd.co/',
    image: '/buttons/faded-morning.gif'
  },
  {
    name: 'Kingdra',
    url: 'https://kingdra.net/',
    image: '/buttons/kingdra.png'
  },
  {
    name: 'Numbers of the Sky',
    url: 'https://numbersofthesky.tumblr.com/',
    image: '/buttons/numbers-of-the-sky.jpg'
  },
  {
    name: 'Question Point',
    url: 'https://thequestpoint.wordpress.com/',
    image: '/buttons/question-point.webp'
  },
  {
    name: 'Red Velvet',
    url: 'https://redvelvet.cc/',
    image: '/buttons/red-velvet.gif'
  },
  {
    name: 'Twilight Pentagram',
    url: 'https://twilightpentagram.neocities.org/',
    image: '/buttons/twilight-pentagram.png'
  }
]

</script>

<template>
  <Content>
    <HeadingTitle small="Link" large="Exchange" />
    <h2 class="mb-2">Vizune Link Buttons</h2>
    <div class="flex gap-4 mb-8">
        <img src="/buttons/vizune-button-01.png" alt="Vizune Link button" />
        <img src="/buttons/vizune-button-03.png" alt="Vizune Link button" />
    </div>

    <h2 class="mb-2">Link exchanges</h2>
    <p>If you would like your website link / button down below, drop me a message in the "Live chat" below. Sorry Affiliates are invite only.</p>
    <ul class="my-4 list-none flex flex-wrap gap-4">
        <li v-for="button in linkExchangeButtons">
        <a :href="button.url" :title="button.name" target="_blank">
            <img :src="button.image" width="88px" height="31px">
        </a>
        </li>
    </ul>

    <ul class="my-4">
        <li v-for="link in linkExchangeList">
          <a :href="link.url" target="_blank">{{ link.name }}</a>
        </li>
    </ul>
  </Content>
</template>