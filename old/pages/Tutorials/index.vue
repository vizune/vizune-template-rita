<script setup>
useHead({
  title: 'Vizune.com - Tutorials'
})

const config = useRuntimeConfig()

const posts = await fetch(config.public.tutorials).then((r) => r.json());

const sortedPostsByDate = posts.items.sort((a,b) => a.fields.publishDate < b.fields.publishDate ? 1 : -1);
</script>

<template>
  <Content>
    <HeadingTitle small="Vizune" large="Tutorials" />
    <Pagination
      :items="sortedPostsByDate"
      :itemsPerPage="6"
      gridClass="grid grid-cols-1 md:grid-cols-2 gap-9"
      :assets="posts.includes.Asset"
      category="tutorials"
    >
    </Pagination>
  </Content>
</template>

<style scoped>
h2 {
  margin-bottom: 0.25rem;
}
</style>