<script setup>
import { computed, ref, watch } from 'vue';

const props = defineProps({
    items: {
        type: Array,
        required: true
    },
    itemsPerPage: {
        type: Number,
        default: 10
    },
    gridClass: {
        type: String,
        required: true
    },
    assets: {
        type: Array
    },
    category: {
        type: String,
        required: true
    }
})

const wrapper = ref(null);
const currentPage = ref(1);
const itemsPerPage = ref(props.itemsPerPage);

const displayedItems = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;

    return props.items.slice(startIndex, endIndex);
});

//pass this function to pagination component
function changePage(pageNumber) {
    currentPage.value = pageNumber;
}

function smoothScrollToElement(element, duration = 800) {
    const targetY = element.getBoundingClientRect().top + window.pageYOffset;
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // Ease-in-out function
        const ease = 0.5 * (1 - Math.cos(Math.PI * progress));

        window.scrollTo(0, startY + distance * ease);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

watch(currentPage, () => {
    if (wrapper.value) {
        smoothScrollToElement(wrapper.value, 1300); // 1000ms = 1 second
    }
});

watch(() => props.items, () => {
    // Reset page to 1 when filters have been applied
    changePage(1);
});

function getAsset(id) {
    if (!id || !props.assets) return '';
    const asset = props.assets.find(post => post.sys?.id === id);
    if (!asset) {
        console.warn(`Asset with id ${id} not found.`);
        return '';
    }
    return asset.fields?.file?.url || '';
}
</script>

<template>
    <div>
        <PaginationWrapper
            :itemCount="items.length"
            :itemsPerPage="itemsPerPage"
            :currentPage="currentPage"
            @changePage="changePage"
        >
            <div :class="gridClass" ref="wrapper">
                <div
                    v-for="(item, index) in displayedItems"
                    :key="`${item.id}--${index}`"
                >
                    <template v-if="category === 'avatars'">
                        <PostAvatarItem 
                            :fields="item.fields"
                            :asset="getAsset(item.fields.asset.sys.id)"
                        />
                    </template>

                    <template v-if="category === 'renders'">
                        <PostRenderItem 
                            :fields="item.fields"
                            :asset="getAsset(item.fields.thumbnail.sys.id)"
                        />
                    </template>

                    <template v-if="category === 'templates'">
                        <PostTemplateItem 
                            :fields="item.fields"
                            :tags="item.metadata.tags"
                            :asset="getAsset(item.fields.banner.sys.id)"
                        />
                    </template>

                    <template v-if="category === 'tutorials' || category === 'blog'">
                        <PostBlogItem 
                            :title="item.fields.title"
                            :description="item.fields.description"
                            :thumbnail="getAsset(item.fields.thumbnail.sys.id)"
                            :slug="item.fields.slug"
                            :publishDate="item.fields.publishDate"
                            :category="category"
                        />
                    </template>
                    
                    <template v-if="category === 'psd'">
                        <PostPsdItem 
                            :fields="item.fields"
                            :asset="getAsset(item.fields.thumbnail.sys.id)"
                        />
                    </template>
                </div>
            </div>
        </PaginationWrapper>
    </div>
</template>