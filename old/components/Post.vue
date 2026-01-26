<script setup>

import * as contentful from 'contentful';
import { MARKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { convertDate } from '../utilities/convertDate';
import { cSpace, cAccessToken }  from '../../constants';

const client = contentful.createClient({
  space: cSpace,
  environment: 'master',
  accessToken: cAccessToken,
});

const options = {
  renderMark: {
    [MARKS.UL_LIST]: (children) => `<ul>${children}<ul>`,
    [MARKS.LIST_ITEM]: (children) => `<li>${children}<li>`,
    [MARKS.ITALIC]: (text) => `<em>${text}</em>`
  },
};

client.getEntry('v9VSZDcP1Xi67fowhL44G')
.then((entry) => {
  const rawRichTextField = entry.fields.content;
  document.getElementById('publish-date').innerHTML = convertDate(entry.fields.publishDate);
  document.getElementById('title').innerHTML = entry.fields.title;
  return documentToHtmlString(rawRichTextField, options);
})
.then((renderedHtml) => {
  document.getElementById('rich-text-body').innerHTML = renderedHtml;
})
.catch((error) => console.log(error));

/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
/*
var disqus_config = function () {
this.page.url = 'posts/im-back';  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = 'v9VSZDcP1Xi67fowhL44G' // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://vizune.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
*/
</script>

<template>
    <div>
        <hr />
        <span id="publish-date" class="block text-sm font-bold mt-4"></span>
        <span id="title" class="block text-xl font-bold mb-4"></span>
        <hr />
        <div id="rich-text-body" class="my-4"></div>
        <hr />
<!--    <div id="disqus_thread"></div>
        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript> -->
    </div>
</template>

<style scoped>
</style>