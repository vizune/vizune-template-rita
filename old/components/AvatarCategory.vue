<script setup>
import { ref, watch } from 'vue';
import { tagReference } from '~/constants';

const props = defineProps({
    category: Number,
    title: String,
    posts: Array,
    assets: Array,
    itemsPerPage: Number
})

const getTags = () => {
  let tags = [];

  props.posts.map(post => {
    post.metadata.tags.map(m => {
      if(m.sys.id !== 'avatars' &&
      m.sys.id !== 'avatarsHundred' &&
      m.sys.id !== 'xavatars' &&
      m.sys.id !== 'avatarsFourHundred') {
        tags.push(m.sys.id)
      }
    })
  })

  return [...new Set(tags)].sort();
}

const tagSelected = ref('');
let selectedPosts = props.posts;

watch(tagSelected, (newTagSelected) => {
  if (newTagSelected.length === 0) {
    selectedPosts = props.posts;
  }
  else {
    selectedPosts = props.posts;
    let sortedPosts = [];
    props.posts.map(post => {
      if (post.metadata.tags.find(tag => tag.sys.id === newTagSelected)) sortedPosts.push(post)
    })
    selectedPosts = sortedPosts;
  }
})

const getTagCount = (tagOption) => {
  let count = 0;

  props.posts.map(post => {
    if (post.metadata.tags.find(tag => tag.sys.id === tagOption)) count++;
  })

  return count;
}
</script>

<template>
    <div>
      <h2 class="text-center text-dark my-8">{{ title }}</h2>
      <FilterDropdown v-model="tagSelected" :values="getTags()">
        <option value="">Filter avatars</option>
        <option v-for="tag in getTags()" :key="tag" :value="tag">{{ tagReference[tag] }} {{ `(${getTagCount(tag)})` }}</option>
      </FilterDropdown>
      <Pagination
        :items="selectedPosts"
        :itemsPerPage="itemsPerPage"
        :gridClass="`grid gap-4 wrapper${category} justify-center mt-8`"
        :assets="props.assets"
        category="avatars"
      />
    </div>
</template>

<style>
.wrapper100 {
  grid-template-columns: repeat(auto-fit, 250px);
}
.wrapper100 .wrapper-info {
    display: flex;
    margin-top: .5rem;
}
.wrapper200 {
  grid-template-columns: repeat(auto-fit, 200px);
}
.wrapper200 .wrapper-item {
    width: 200px;
}
.wrapper400 {
  grid-template-columns: repeat(auto-fit, 400px);
  grid-gap: .75rem;
}
.wrapper400 .wrapper-item {
    width: 400px;
}
</style>