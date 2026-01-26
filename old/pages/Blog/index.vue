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
        <HeadingTitle small="Vizune" large="Blog" />
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