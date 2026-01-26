<script setup>
useHead({
  title: 'Vizune.com - PSD Downloads'
})

const config = useRuntimeConfig()

const posts = await fetch(config.public.psds).then((r) => r.json());

const sortedPostsByDate = posts.items.sort((a,b) => a.fields.publishDate < b.fields.publishDate ? 1 : -1);

</script>

<template>
  <Content>
    <HeadingTitle small="PSD" large="Downloads" />
    <Pagination
      :items="sortedPostsByDate"
      :itemsPerPage="9"
      gridClass="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-9"
      :assets="posts.includes.Asset"
      category="psd"
    >
    </Pagination>
  </Content>
</template>