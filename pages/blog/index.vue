<template>
    <div class="h-full page bg-white">
        <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <!--Latest article as Featured -->
            <NuxtLink v-if="latest" :to="latest.path"
                class="block md:flex relative group p-6 lg:p-10 space-y-6 md:space-x-6 my-14 bg-vinoteqa/5 rounded-3xl hover:bg-vinoteqa/10">
                <figure class="basis-1/2 w-full aspect-video overflow-hidden rounded-2xl">
                    <img class="object-cover group-hover:scale-105 transition duration-500 cursor-pointer"
                        :src="getArticleImageSrc(latest)" :alt="latest.title"
                        style="width: 100%; height: 100%; object-fit: cover;">
                </figure>
                <div class="basis-1/2 self-center">
                    <h2 class="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
                        <span
                            class="before:content-[''] before:z-10 before:top-0 before:right-0 before:left-0 before:bottom-0 before:absolute before:pointer-events-auto">{{
                latest.subtitle }}</span>
                    </h2>
                    <div class="font-bold">{{ printDate(latest.date) }}</div>
                </div>
            </NuxtLink>

            <!-- Show last 3 Featured Articles for each Category -->
            <div v-for="category, idx in categories" :key="category.key">
                <section class="mb-16">
                    <div class="flex items-center mb-6">
                        <h2 class="text-3xl md:text-4xl font-bold mr-auto">{{ category.label }}</h2>
                        <NuxtLink
                            class="border border-black/40 rounded-full py-2 px-4 md:px-6 hover:bg-vinoteqa/5 invisible lg:visible"
                            :to="$localePath(`/blog/${category.key}`)">{{ $t('blog.viewAll') }}</NuxtLink>
                    </div>

                    <BlogList :data="featuredByCategory?.[category.key] || []" />

                    <div class="flex text-center my-6 visible lg:invisible">
                        <NuxtLink class="border border-black/40 rounded-full py-2 px-4 md:px-6 hover:bg-vinoteqa/5 "
                            :to="$localePath(`/blog/${category.key}`)">{{ $t('blog.viewAll') }}</NuxtLink>
                    </div>

                </section>

                <hr v-if="idx < categories.length - 1" class="my-8 text-black/10">

            </div>

        </div>
    </div>
</template>

<script setup>
import { getArticleImageSrc } from '~/mixins/utils'

const { t, locale } = useI18n()
const route = useRoute()

definePageMeta({
    layout: 'blog',
})

useHead({
    title: t('blog.title')
}, {
    tagPriority: 'critical'
})

useSeoMeta({
    title: t('blog.title'),
    description: t('blog.description')
}, {
    tagPriority: 'critical'
})

const categoryKeys = ['wines', 'winecellar', 'winelist']

const categories = [
    {
        key: 'wines',
        label: t('blog.categories.wineEducation'),
    },
    {
        key: 'winecellar',
        label: t('blog.categories.cellarManagement'),
    },
    {
        key: 'winelist',
        label: t('blog.categories.wineLists'),
    },
]

const emptyFeatured = () => Object.fromEntries(categoryKeys.map(key => [key, []]))

// Prefer i18n locale; fall back to first path segment for SSR edge cases
const contentLocale = computed(() => {
    const fromI18n = locale.value
    if (fromI18n) return fromI18n
    const segment = route.path.split('/').filter(Boolean)[0]
    return categoryKeys.includes(segment) ? 'en' : (segment || 'en')
})

const { data: latest } = await useAsyncData(
    () => `blog-latest-${contentLocale.value}`,
    () => queryCollection('blog')
        .where('path', 'LIKE', `/${contentLocale.value}/blog/%`)
        .order('date', 'DESC')
        .first(),
    { watch: [contentLocale] },
)

const { data: featuredByCategory } = await useAsyncData(
    () => `blog-featured-${contentLocale.value}`,
    async () => {
        const loc = contentLocale.value
        // Use 1 not true — SQLite stores booleans as integers
        const featured = await queryCollection('blog')
            .where('path', 'LIKE', `/${loc}/blog/%`)
            .where('featured', '=', 1)
            .order('date', 'DESC')
            .all()

        const result = emptyFeatured()
        for (const article of featured) {
            for (const key of categoryKeys) {
                if (article.path?.includes(`/blog/${key}/`) && result[key].length < 3) {
                    result[key].push(article)
                }
            }
        }
        return result
    },
    {
        default: emptyFeatured,
        watch: [contentLocale],
    },
)

function printDate(date) {
    const dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    return new Date(date).toLocaleDateString(contentLocale.value, dateOptions)
}
</script>
