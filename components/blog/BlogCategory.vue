<template>
    <div class="h-full page bg-white">
        <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <section class="mb-10">
                <div class="flex items-center my-6">
                    <h2 class="text-3xl md:text-4xl font-bold mr-auto">{{ categoryTitle }}</h2>
                </div>

                <template v-if="posts && posts.length">
                    <BlogList :data="posts.slice(0, POST_LIMIT)" />

                    <div class="flex items-center mt-8">
                        <div class="mr-auto">
                            <NuxtLink v-if="currentPage > 1"
                                :to="$localePath(`/blog/${categoryKey}?page=${parseInt(currentPage) - 1}`)"
                                class="border border-black/40 rounded-full py-2 px-4 mr-4 md:px-6 hover:bg-vinoteqa/5">
                                {{ $t('blog.previousPage') }}</NuxtLink>
                        </div>
                        <NuxtLink v-if="hasNextPage"
                            :to="$localePath(`/blog/${categoryKey}?page=${parseInt(currentPage) + 1}`)"
                            class="border border-black/40 rounded-full py-2 px-4 md:px-6 hover:bg-vinoteqa/5">
                            {{ $t('blog.nextPage') }}</NuxtLink>
                    </div>
                </template>
                <div v-else class="text-center">
                    <p class="text-lg">{{ $t('blog.noPosts') }}</p>
                </div>
            </section>

        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    categoryKey: {
        type: String,
        required: true
    },
    categoryTitle: {
        type: String,
        required: true
    },
})

const POST_LIMIT = 12
const route = useRoute()
const { locale } = useI18n()

const currentPage = computed(() => parseInt(route.query.page) || 1)

const { data: posts } = await useAsyncData(
    () => `blog-category-${props.categoryKey}-${locale.value}-${currentPage.value}`,
    () => queryCollection('blog')
        .where('path', 'LIKE', `/${locale.value}/blog/${props.categoryKey}/%`)
        .order('date', 'DESC')
        .skip((currentPage.value - 1) * POST_LIMIT)
        .limit(POST_LIMIT + 1)
        .all(),
    {
        watch: [currentPage, locale],
        default: () => [],
    },
)

const hasNextPage = computed(() => (posts.value?.length || 0) > POST_LIMIT)
</script>
