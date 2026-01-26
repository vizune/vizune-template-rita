
import { ref } from 'vue'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import { convertDate } from '../utilities/convertDate'

export function useContentfulPost(cSpace, cAccessToken, slug, category) {
  const entryID = ref(null)
  const title = ref(null)
  const date = ref(null)
  const content = ref(null)
  const assets = ref(null)

  const options = {
    renderMark: {
      [MARKS.CODE]: (code) => `<pre><code>${code}</code></pre>`
    },
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (asset) => {
        return getAsset(asset.data.target.sys.id);
      },
      [INLINES.HYPERLINK]: (link) => `<a href="${link.data.uri}" target="_blank">${link.content[0].value}</a>`,
    }
  };

  function getAsset(id) {
    const asset = assets.value.find(post => post.sys.id === id);
    return asset 
      ? `<a href="${asset.fields.file.url}" target="_blank"><img class="mx-4 mb-4 max-h-96 float-left w-full md:w-auto" alt="${asset.fields.title || ''}" src="${asset.fields.file.url}" /></a>`
      : '';
  }

  async function fetchEntry() {
    try {
      const response = await fetch(`https://cdn.contentful.com/spaces/${cSpace}/environments/master/entries?content_type=${category}&fields.slug=${slug}&limit=1&access_token=${cAccessToken}`);
      const entry = await response.json();

      entryID.value = entry.items[0].sys.id;
      date.value = convertDate(entry.items[0].fields.publishDate);
      title.value = entry.items[0].fields.title;
      assets.value = entry.includes.Asset;
      content.value = documentToHtmlString(entry.items[0].fields.content, options);
    } catch (error) {
      console.log(error);
    }
  }

  return { entryID, title, date, content, fetchEntry };
}