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

const { data: latest } = await useAsyncData(
    `blog-latest-${locale.value}`,
    () => queryCollection('blog')
        .where('path', 'LIKE', `/${locale.value}/blog/%`)
        .order('date', 'DESC')
        .first(),
)

const { data: featuredByCategory } = await useAsyncData(
    `blog-featured-${locale.value}`,
    async () => {
        const result = {
            wines: [],
            winecellar: [],
            winelist: [],
        }
        try {
            for (const category of categories) {
                result[category.key] = await queryCollection('blog')
                    .where('path', 'LIKE', `/${locale.value}/blog/${category.key}/%`)
                    .where('featured', '=', true)
                    .order('date', 'DESC')
                    .limit(3)
                    .all()
            }
        } catch (error) {
            console.error('Failed to load featured blog posts', error)
        }
        return result
    },
    { default: () => ({ wines: [], winecellar: [], winelist: [] }) },
)

function printDate(date) {
    const dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    return new Date(date).toLocaleDateString(locale.value, dateOptions)
}
</script>
