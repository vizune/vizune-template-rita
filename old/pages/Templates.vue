<script setup lang="ts">
useHead({
  title: 'Vizune.com - Web Templates'
})

const config = useRuntimeConfig()

const posts = await fetch(config.public.templates).then((r) => r.json());

const sortedPostsByDate = posts.items.sort((a,b) => a.fields.publishDate < b.fields.publishDate ? 1 : -1);

</script>

<template>
  <Content>
    <HeadingTitle small="Web" large="Templates" />
    <Pagination
      :items="sortedPostsByDate"
      :itemsPerPage="4"
      gridClass="grid grid-cols-1 gap-5"
      :assets="posts.includes.Asset"
      category="templates"
    >
    </Pagination>
  </Content>
</template>

<style scoped>
h2 {
  margin-bottom: 0.25rem;
}
</style>