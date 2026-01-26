<script setup>
useHead({
  title: 'Vizune.com - About'
})

function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    // Adjust the age if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}
</script>

<template>
  <Content>
    <HeadingTitle small="About" large="Vizune" />
    <Tabs>
      <TabsItem title="The site">
        <div class="md:grid md:grid-cols-2 md:grid-row-2 gap-6" style="grid-template-columns: auto auto;">
          <div class="h-40 md:h-80 flex justify-center mb-6 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 691.167" xml:space="preserve" class="h-full" alt="Vizune logo"><path d="m531.236.015-261.28 692.122L7.591-.787h64.825l197.351 519.682C271.466 514.46 465.656.015 465.656.015h65.58z"/><path class="logo-circle" d="M337.625 137.267c0 17.834-14.457 32.292-32.292 32.292s-32.292-14.457-32.292-32.292 14.457-32.292 32.292-32.292 32.292 14.458 32.292 32.292z"/><path d="M404.201 61.348h-203.41l50.482 128.753a29.208 29.208 0 0 0-5.85 17.598c0 16.324 13.257 29.582 29.629 29.582a29.415 29.415 0 0 0 25.477-14.626v35.243h-88.556L110.867.015h316.621l-23.287 61.333zM247.687 180.941l12.063 29.725s-2.875 3.75-3.25 3.75-21.375-8.375-21.25-8.875 1.375-15.125 2.375-16.625 10.062-7.975 10.062-7.975zM330 257.898H223.333v-52.065H349.79L330 257.898z"/></svg>
          </div>
          <div>
            <h2>What is 'Vizune'?</h2>
            <p>Vizune is an amalgamation of the words “visual” and “rune” (a letter from an ancient alphabet). I designed the logo inspired by runes and made it appear like an eye inside a “V” letter and the individual elements can spell out the name. The name is pronounced as “Ve-zoo-ney” similar to how you say Kitsune (means "Fox" in Japanese).</p>
            <div>
              <img src="/about-section/logo-name.jpg" title="Elements of the Vizune logo can spell out the name" alt="Elements of the Vizune logo can spell out the name" class="h-40 mb-4 m-auto" />
            </div>
            <p>This website is my personal sanctuary where I experiment and dabble in graphic design, web design and web development. I use Adobe Photoshop to create graphics such as avatars. I provide resources such as renders to help you create your own graphics. There are web templates available to download that you can use for your own website or learn from the code to build your own.</p>
          </div>
          <div class="flex justify-center mb-6 md:mb-0">
            <img src="/about-section/vizune-avatar.png" role="presentation" style="height: 290px;" />
          </div>
          <div>
            <h2>History of Vizune</h2>
            <p>I have owned the Vizune.com domain since 2009. The website momentarily had the slogan of "Cyberpunk Workshop" because I was really interested in making skeuomorphic tech designs at the time. I used the N-Gage font as the logo which you will still see being used in my older web templates and render watermarks. Websites in the community back then commonly used a PHP CMS called Cutenews.</p>
            <div class="flex flex-col md:grid md:grid-cols-2 gap-4 mb-6">
              <img src="/about-section/vizune-2009.png" alt="Screenshot of Vizune.com in 2009" title="Screenshot of Vizune.com in 2009 featuring Asuka from Tekken" />
              <img src="/about-section/SwordDance.png" alt="Screenshot of web template called Sword Dance featuring Maria from Burst Angel" title="Screenshot of web template called Sword Dance featuring Maria from Burst Angel" />
            </div>
            <p>My design style changed to magical / mystical and I decided to create a new website in 2010 called Project NIXI (N91) hosted on <em>nixi.spiderwalls.net</em> and the Vizune.com domain was used it as a portfolio website when applying for internships as a Junior Front End Developer. Eventually I moved my graphics website back to the domain in 2012 (once I got the job haha). Around this time I transitioned to using the CMS, Wordpress.</p>
            <div class="flex flex-col md:grid md:grid-cols-2 gap-4">
              <a href="https://www.deviantart.com/vizune/art/Vizune-com-V2-285390944" target="blank" title="Screenshot of Old Vizune Portfolio">
                <img src="/about-section/vizune-portfolio.jpg" alt="Screenshot of Old Vizune Portfolio" />
              </a>
              <a href="https://www.deviantart.com/vizune/art/Project-NIXI-Lyric-01-175986723" target="blank" title="Screenshot of Project NIXI website">
                <img src="/about-section/project-nixi.png" alt="Screenshot of Project NIXI website" />
              </a>
            </div>
          </div>
        </div>
      </TabsItem>
      <TabsItem title="The owner">
        <h2 class="text-center">The Owner</h2>
        <div class="md:grid md:grid-cols-2 md:grid-row-2 gap-6" style="grid-template-columns: auto auto;">
          <div class="flex flex-col mb-6 md:mb-0 items-center">
            <img src="/about-section/me-photo.jpg" role="presentation" class="mb-4" style="height: 290px;" />
            <img src="/about-section/me-anime.jpg" role="presentation" style="height: 290px;" />
          </div>
          <div>
            <ul class="mb-4">
              <li><strong>Name:</strong> Sasha</li>
              <li><strong>Age:</strong> {{ calculateAge('1991-03-22') }}</li>
              <li><strong>Birthday:</strong> 22nd March</li>
              <li><strong>Location:</strong> England</li>
              <li><strong>Career:</strong> Software Engineer (10+ years experience specialising in Front End Web Development & dabble in Back End Development along the way)</li>
              <li><strong>Random stuff:</strong> I'm left-handed, I have 5 tattoos, I have a red belt in kickboxing & currently taking Tai Chi classes, I have 2 female black british shorthair cats called Magic & Nelly.</li>
            </ul>

            <h2 class="mb-2">Favourites</h2>
            <p><strong>Favourite anime:</strong> Ghost in the Shell: Innocence, Cowboy Bebop, Nana, Mob Psycho 100, Kakegurui, Dead Leaves, Saint Young Man, Paradise Kiss, Witchblade, Ponyo, Promare, Made in Abyss, Fate/Stay Night series, Chainsaw Man, Paprika, Noragami, Durarara!!, Elfen Lied, Ergo Proxy, Serial Experiments Lain, Simoun, Flip Flappers, Kill la Kill, Space Dandy, Tenchi Muyo, Outlaw Star, The Apothecary Diaries</p>
            <p><strong>Favourite games:</strong> Final Fantasy X, Bayonetta, Nier: Automata, Labyrinth of Refrain: Coven of Dusk, Persona Q, Dark Cloud, Tasomachi, Darkstalkers, X-Men vs. Street Fighter, Puzzle Street Fighter, Divinity: Original Sin, Cyberpunk 2077, Legend of Zelda: Breath of the Wild, Tropico 6, Mario Kart, Zero Escape Trilogy, Dynasty Warriors, Dungeons of Dredmor, Sims, Shrouded Isle, Advance Wars</p>
            <p><strong>Favourite artists/mangakas:</strong> Hyunga Tae Kim, Ugetsu Hakua, Kilian Eng, Carnelian, Range Murata, Miwa Shirow, Nardack, redjuice, LANGE, H2SO4, Ideolo</p>
            <p><strong>Favourite music genres:</strong> Drum and Bass, Hard Techno, Psytrance, Dance/Electronic, House, J-pop, Post Punk, Shoe Gaze, Industrial, Funk / Soul / Jazz</p>
            <p><strong>Favourite music:</strong> The Prodigy, Missy Elliott, Leftfield, Chemical Brothers, Fatboy Slim, Basement Jaxx, KAYTRANADA, Yuksek, Brutalismus 3000, Half Alive, Bambie Thug, Poppy, Djerv, DJ Hybrid, Moderat, Massive Attack, Max Cooper, Bonobo, Bicep, ALEX, Owl Vision, Ashnikko, Kendrick Lamar, GHOST DATA, Nvoke, Jungle, Greentea Peng, Tanerelle, Moonchild, ✧BRAINDAAMAGE✧, N-Vitral, Wombo, Dry Cleaning, Wine Lips, IDLES</p>
          </div>
        </div>
        
      </TabsItem>
      <TabsItem title="Terms of Use">
        <h2 class="text-center">Terms of Use</h2>
        <h3>General (applies to all)</h3>
        <ul class="mb-6">
          <li>No redistributing even if credit is given. If you like my content and want to share with others, it's simple, link to my website or the article.</li>
          <li>Do not take credit for any content or coding found on Vizune.</li>
          <li>Content on Vizune.com is not available for commerical use.</li>
          <li>If there is a watermark, you are not allowed to remove it (excluding Renders).</li>
        </ul>

        <h3>Renders</h3>
        <ul class="mb-6">
          <li>You are allowed to remove the watermark when using, this is just to remind you where the resource is from.</li>
          <li>No, you cannot replace my watermark with your own and/or upload to Deviant Art / renders gallery / your website. That is called redistribution.</li>
          <li>A credit/link back is required when using renders from Vizune.</li>
        </ul>

        <h3>Web templates</h3>
        <p>This section acts as a portfolio section whilst also helping others learn how to make their own templates or download to use.</p>
        <p>If you decide you want to lie and say you wrote the code, you're only cheating yourself whereas me practicing making more templates will improve my quality of code / web design skills within months thus help earn more in the future in my career.</p>
      </TabsItem>
    </Tabs>

  </Content>
</template>