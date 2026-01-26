<script setup>
import { onMounted } from 'vue'
import { useRequestURL, useRuntimeConfig } from '#app'
import { useContentfulPost } from '../composables/useContentfulPost'

// Access runtime configuration and URL
const config = useRuntimeConfig()
const url = useRequestURL()
const route = useRoute()

const { entryID, title, date, content, fetchEntry } = useContentfulPost(config.public.cSpace, config.public.cAccessToken, route.params.id, "tutorials");

onMounted(() => {
  fetchEntry();

  if (import.meta.client) {
    var disqus_config = function () {
      this.page.url = url;
      this.page.identifier = entryID;
    };

    (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://vizune.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
  }
});
  
</script>

<template>
  <Content class="ContentfulPost">
    <HeadingTitle :small="title" :large="date" />
    <div v-if="pending">
      <p>Loading content...</p>
    </div>
    <div v-if="error">
      <p>Error loading content. Please try again later.</p>
    </div>
    <div v-else id="rich-text-body" class="my-4 flex flex-wrap justify-center" v-html="content"></div>
    <hr />
    <div id="disqus_thread" class="mt-8"></div>
    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
  </Content>
</template>
