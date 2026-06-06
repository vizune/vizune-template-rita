import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { MARKS, BLOCKS, type Document } from '@contentful/rich-text-types';

export type RichTextDocument = Record<string, unknown>;

export type ContentfulEntry<TFields = Record<string, unknown>> = {
  sys: { id: string };
  fields: TFields;
};

export type ContentfulAsset = {
  sys: { id: string };
  fields?: {
    title?: string;
    description?: string;
    file?: {
      url?: string;
      details?: {
        image?: {
          width?: number;
          height?: number;
        };
      };
    };
  };
};

const SPACE_ID = import.meta.env.PUBLIC_cSPACE;
const ACCESS_TOKEN = import.meta.env.PUBLIC_cACCESS_TOKEN;

function assertEnv() {
  if (!SPACE_ID) {
    throw new Error('Missing PUBLIC_CONTENTFUL_SPACE_ID');
  }

  if (!ACCESS_TOKEN) {
    throw new Error('Missing PUBLIC_CONTENTFUL_ACCESS_TOKEN');
  }
}

function buildEntriesUrl(contentType: string, limit = 200) {
  assertEnv();

  return `https://cdn.contentful.com/spaces/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}&content_type=${contentType}&limit=${limit}&include=10`;
}

export async function fetchContentfulEntries<TFields = Record<string, unknown>>(
  contentType: string,
  limit = 200
): Promise<{ items: ContentfulEntry<TFields>[]; assets: ContentfulAsset[] }> {
  const url = buildEntriesUrl(contentType, limit);
  const res = await fetch(url);

  if (!res.ok) {
    const body = await res.text();
    throw new Error(
      `Failed to fetch Contentful entries: ${res.status} ${res.statusText}\nURL: ${url}\nResponse: ${body}`
    );
  }

  const data = await res.json();

  return {
    items: (data?.items ?? []) as ContentfulEntry<TFields>[],
    assets: (data?.includes?.Asset ?? []) as ContentfulAsset[],
  };
}

export function formatUkDate(iso?: string) {
  if (!iso) return '';
  const t = Date.parse(iso);
  if (!Number.isFinite(t)) return '';
  return new Date(t).toLocaleDateString('en-GB');
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function normaliseAssetUrl(url?: string) {
  if (!url) return '';
  return url.startsWith('//') ? `https:${url}` : url;
}

export function richTextToHtml(
  body?: RichTextDocument,
  assetsById?: Map<string, ContentfulAsset>
) {
  if (!body) return '<p>No content available.</p>';

  return documentToHtmlString(body as Document, {
    renderMark: {
      [MARKS.CODE]: (text) => {
        const looksLikeBlock =
          text.includes('\n') ||
          text.includes('{') ||
          text.includes('}') ||
          text.includes('<div') ||
          text.includes('.');

        return looksLikeBlock
          ? `<pre><code>${text}</code></pre>`
          : `<code>${text}</code>`;
      },
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, next) => {
        const inner = next(_node.content);

        if (!inner.trim()) return '';

        const onlyCodeBlock =
          inner.startsWith('<pre><code>') && inner.endsWith('</code></pre>');

        return onlyCodeBlock ? inner : `<p>${inner}</p>`;
      },

      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const assetId = node.data?.target?.sys?.id;
        const asset = assetId ? assetsById?.get(assetId) : undefined;

        const file = asset?.fields?.file;
        const src = normaliseAssetUrl(file?.url);

        if (!src) return '';

        const title = asset?.fields?.title ?? '';
        const alt = asset?.fields?.description || title || 'Embedded image';

        const width = file?.details?.image?.width;
        const height = file?.details?.image?.height;

        const dimensionAttrs =
          width && height ? ` width="${width}" height="${height}"` : '';

        return `
          <figure class="content-image">
            <img
              src="${escapeHtml(src)}"
              alt="${escapeHtml(alt)}"
              loading="lazy"
              decoding="async"
              ${dimensionAttrs}
            />
            ${
              title
                ? `<figcaption>${escapeHtml(title)}</figcaption>`
                : ''
            }
          </figure>
        `;
      },
    },
  });
}