<script setup>

import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { convertDate } from '../utilities/convertDate';

const props = defineProps({
    category: String
})

const config = useRuntimeConfig()
const url = useRequestURL()

const getLastPath = () => {
  const pathname = window.location.href; 
  const paths = pathname.split("/"); 
  return paths.pop() || paths.pop();
}

const options = {
  renderMark: {
    [MARKS.CODE]: (code) => `<pre><code>${code}</code></pre>`
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (asset) => {
      return getAsset(asset.data.target.sys.id)
    },
    [INLINES.HYPERLINK]: (link) => `<a href="${link.data.uri}" target="_blank">${link.content[0].value}</a>`,
  }
};

let entryID = null;
let title = null;
let date = null;
let content = null;
let assets = null;

function getAsset(id) {
    const asset = assets.find(post => post.sys.id === id);
    return `<a href="${asset.fields.file.url}" target="_blank"><img class="mx-4 mb-4 max-h-96 float-left w-full md:w-auto" alt="${asset.fields.title || ''}" src="${asset.fields.file.url}" /></a>`
}

await fetch(`https://cdn.contentful.com/spaces/${config.public.cSpace}/environments/master/entries?content_type=tutorials&fields.slug=${getLastPath()}&limit=1&access_token=${config.public.cAccessToken}`)
.then((r) => r.json())
.then((entry) => {
  const rawRichTextField = entry.items[0].fields.content;
  entryID = entry.items[0].sys.id;
  date = convertDate(entry.items[0].fields.publishDate);
  title = entry.items[0].fields.title;
  assets = entry.includes.Asset;
  return documentToHtmlString(rawRichTextField, options);
})
.then((renderedHtml) => {
  content = renderedHtml;
})
.catch((error) => console.log(error));

/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */

var disqus_config = function () {
this.page.url = url;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = entryID; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://vizune.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();

</script>

<template>
  <div>
    <h1 id="title">{{ title }}</h1>
    <hr />
    <span id="publish-date" class="block text-sm font-bold mt-4">{{ date }}</span>
    <div id="rich-text-body" class="my-4 flex flex-wrap justify-center" v-html="content"></div>
    <hr />
    <div id="disqus_thread" class="mt-8"></div>
    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
    </div>
</template>

<style lang="scss">
ol > li {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

ol {
  counter-reset: point;
}

ol li:before {
  counter-increment: point;
  content: counter(point)".) ";
  font-weight: bold;
  color: var(--toadstool);
  font-size: 1.5rem;
}


p {
  width: 100%;
}

pre {
  line-height: 24px;
  background-image: linear-gradient(180deg, #eee 50%, #fff 50%);
  background-size: 100% 48px;
  padding-left: 10px;
  padding-right: 10px;
  border: 2px solid #ccc;
  border-radius: 10px;
  overflow-x: auto;
}
</style>