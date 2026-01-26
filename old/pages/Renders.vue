<script setup>
import { ref, watch } from 'vue';
import { tagReference } from '~/constants';

useHead({
  title: 'Vizune.com - Renders'
})

const config = useRuntimeConfig()

const posts = await fetch(config.public.renders).then((r) => r.json());

const sortedPostsByTitle = posts.items.sort((a,b) => a.fields.title < b.fields.title ? 1 : -1);

const getTags = () => {
  let tags = [];

  sortedPostsByTitle.map(post => {
    post.metadata.tags.map(m => {
      if(m.sys.id !== 'renders') tags.push(m.sys.id)
    })
  })

  return [...new Set(tags)].sort();
}

const tagSelected = ref('');
let selectedPosts = sortedPostsByTitle;

watch(tagSelected, (newTagSelected) => {
  if (newTagSelected.length === 0) {
    selectedPosts = sortedPostsByTitle;
  }
  else {
    selectedPosts = sortedPostsByTitle;

    let sortedPosts = [];
    selectedPosts.map(post => {
      if (post.metadata.tags.find(tag => tag.sys.id === newTagSelected)) sortedPosts.push(post)
    })
    selectedPosts = sortedPosts;
  }
})

const getTagCount = (tagOption) => {
  let count = 0;

  sortedPostsByTitle.map(post => {
    if (post.metadata.tags.find(tag => tag.sys.id === tagOption)) count++;
  })

  return count;
}
</script>

<template>
  <Content>
    <HeadingTitle small="Vizune" large="Renders" />
    <FilterDropdown v-model="tagSelected" :values="getTags()">
      <option value="">Filter renders</option>
      <option v-for="tag in getTags()" :key="tag" :value="tag">{{ tagReference[tag] }} {{ `(${getTagCount(tag)})` }}</option>
    </FilterDropdown>
    <Pagination
      :items="selectedPosts"
      :itemsPerPage="12"
      gridClass="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-8"
      :assets="posts.includes.Asset"
      category="renders"
    />
  </Content>
</template>