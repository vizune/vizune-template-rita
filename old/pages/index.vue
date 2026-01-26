<script setup>
useHead({
  title: 'Vizune.com - Blog'
})

const config = useRuntimeConfig()

const posts = await fetch(config.public.blog).then((r) => r.json());

const sortedPostsByDate = posts.items.sort((a,b) => a.fields.publishDate < b.fields.publishDate ? 1 : -1);
</script>

<template>
    <Content>
        <HeadingTitle small="Welcome to" large="Vizune" />
        <blockquote class="font-forum mb-8">
            <p class="font-bold">Welcome to Vizune — my creative sanctuary where anime, gaming, design, and web development collide.</p>
            <p>Here, I explore visual storytelling through graphics and web templates — sharing resources and tutorials to inspire your own digital creations.</p>
            <span>- Sasha</span>
        </blockquote>
        <Pagination
            :items="sortedPostsByDate"
            :itemsPerPage="4"
            gridClass="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-9"
            :assets="posts.includes.Asset"
            category="blog"
        >
      </Pagination>
    </Content>
</template>
