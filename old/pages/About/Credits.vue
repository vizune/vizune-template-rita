<script setup>
useHead({
  title: 'Vizune.com - Link exchange'
})

const imageSources = [
  {
    name: 'MiniTokyo',
    url: 'http://www.minitokyo.net/'
  },
  {
    name: 'Creative Uncut',
    url: 'https://www.creativeuncut.com/'
  },
  {
    name: 'Shuushuu Image Board',
    url: 'https://e-shuushuu.net/'
  }
]

const designSources = [
  {
    name: '99 Mockingbirds @ DeviantArt',
    url: 'https://www.deviantart.com/99mockingbirds'
  },
  {
    name: 'adriano09 @ DeviantArt',
    url: 'http://adriano09.deviantart.com/'
  },
  {
    name: 'AF Studios @ DeviantArt',
    url: 'http://af-studios.deviantart.com/'
  },
  {
    name: 'Arabesco Resources @ DeviantArt',
    url: 'http://arabesco-resources.deviantart.com/'
  },
  {
    name: 'Bloomotion',
    url: 'http://bloomotion.com/'
  },
  {
    name: 'Brush King',
    url: 'http://www.brushking.eu/'
  },
  {
    name: 'BTTRFLYKISS @ DeviantArt',
    url: 'https://www.deviantart.com/bttrflykiss'
  },
  {
    name: 'Carllton @ DeviantArt',
    url: 'http://carllton.deviantart.com/'
  },
  {
    name: 'Car0usel (Closed)',
    url: 'http://car0usel.net/'
  },
  {
    name: 'Chambertin @ DeviantArt',
    url: 'http://chambertin.deviantart.com/'
  },
  {
    name: 'Chazzief @ DeviantArt',
    url: 'https://www.deviantart.com/chazzief'
  },
  {
    name: 'Cilou @ MiniTokyo',
    url: 'http://cilou.minitokyo.net'
  },
  {
    name: 'Colordipped (Closed)',
    url: 'http://colordipped.com/'
  },
  {
    name: 'Coy Dreamer @ Brusheezy',
    url: 'https://www.brusheezy.com/members/coydreamer'
  },
  {
    name: 'Crazy Kira Resources @ DeviantArt',
    url: 'http://crazykira-resources.deviantart.com/'
  },
  {
    name: 'Darciana @ LiveJournel',
    url: 'http://darciana.livejournal.com/'
  },
  {
    name: 'Dastardly Icons @ DeviantArt',
    url: 'http://www.dastardly-icons.deviantart.com/'
  },
  {
    name: 'Estriella @ DeviantArt',
    url: 'http://estriella.deviantart.com/'
  },
  {
    name: 'Gerry Ray @ DeviantArt',
    url: 'http://gerryray.deviantart.com/'
  },
  {
    name: 'iAmFreeman @ DeviantArt',
    url: 'http://iamfreeman.deviantart.com/'
  },
  {
    name: 'Ihea @ DeviantArt',
    url: 'http://ihea.deviantart.com/'
  },
  {
    name: 'JavierZHX @ DeviantArt',
    url: 'http://javierzhx.deviantart.com/'
  },
  {
    name: 'Jessiesquash @ DeviantArt',
    url: 'http://jessiesquash.deviantart.com/'
  },
  {
    name: 'Master Jinn @ DeviantArt',
    url: 'http://masterjinn.deviantart.com/'
  },
  {
    name: 'mayrarose @ DeviantArt',
    url: 'https://www.deviantart.com/mayrarose'
  },
  {
    name: 'Moonchilde Stock @ DeviantArt',
    url: 'http://moonchilde-stock.deviantart.com/'
  },
  {
    name: 'Narcoticplease @ DeviantArt',
    url: 'http://narcoticplease.deviantart.com/'
  },
  {
    name: 'Obsidian Dawn',
    url: 'http://www.obsidiandawn.com/'
  },
  {
    name: 'Ryoko30 @ DeviantArt',
    url: 'http://ryoko30.deviantart.com/'
  },
  {
    name: 'Sanami276 @ DeviantArt',
    url: 'http://sanami276.deviantart.com/'
  },
  {
    name: 'Shinwa (Closed)',
    url: 'http://shinwa.webs.com/'
  },
  {
    name: 'ShiftyJ @ DeviantArt',
    url: 'http://shiftyj.deviantart.com/'
  },
  {
    name: 'Shizoo Design @ DeviantArt',
    url: 'https://www.deviantart.com/shizoo-design'
  },
  {
    name: 'Sirius-sdz @ DeviantArt',
    url: 'http://sirius-sdz.deviantart.com/'
  },
  {
    name: 'Snow Drops',
    url: 'https://snow-drops.org/'
  },
  {
    name: 'So-ghislaine @ DeviantArt',
    url: 'https://www.deviantart.com/so-ghislaine'
  },
  {
    name: 'Spiritcoda @ DeviantArt',
    url: 'https://www.deviantart.com/spiritcoda'
  },
  {
    name: 'Station (Closed)',
    url: 'http://station.chanlu.org/'
  },
  {
    name: 'Struckdumb @ DeviantArt',
    url: 'http://struckdumb.deviantart.com/'
  },
  {
    name: 'SunnyGirl333 @ DeviantArt',
    url: 'http://sunnygirl33.deviantart.com/'
  },
  {
    name: 'Subtle Patterns',
    url: 'http://subtlepatterns.com/'
  },
  {
    name: 'Swimchick (Closed)',
    url: 'http://swimchick.net/'
  },
  {
    name: 'sxc.hu (Closed)',
    url: 'http://sxc.hu/'
  },
  {
    name: 'xnienke @ DeviantArt',
    url: 'http://xnienke.deviantart.com/'
  },
  {
    name: 'Yunyunsarang @ DeviantArt',
    url: 'http://www.yunyunsarang.deviantart.com/'
  },
  {
    name: 'Silverqe @ LiveJournal',
    url: 'http://silverqe.livejournal.com/'
  },
  {
    name: 'Yamaro-ks @ DeviantArt',
    url: 'https://www.deviantart.com/yamaro-ks'
  },
  {
    name: 'Zy0rg @ DeviantArt',
    url: 'http://zy0rg.deviantart.com/'
  }
]

</script>

<template>
  <Content>
    <HeadingTitle small="Credits &" large="Resources" />
    <p class="mb-8">These are resources that I have personally used in my designs / graphics and I have also included more sites that I admire for good quality resources that deserve recognition. If there any broken links below and you have the new URL to find the creator's resources please let me know in the 'Live Chat' below.</p>
    <h3 class="text-center mb-1">Image sources</h3>
    <ul class="mb-8 text-center list-none">
        <li v-for="link in imageSources">
        <a :href="link.url" target="_blank">{{ link.name }}</a>
        </li>
    </ul>

    <h3 class="text-center mb-1">Design resources</h3>
    <ul class="mb-4 text-center list-none">
        <li v-for="link in designSources">
        <a :href="link.url" target="_blank">{{ link.name }}</a>
        </li>
    </ul>
  </Content>
</template>