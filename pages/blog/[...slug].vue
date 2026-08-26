<template>
    <div class="blog-content pt-10 px-8 mx-auto max-w-7xl">
        <template v-if="doc">
            <BlogHead :doc="doc" />
            <NuxtLink :to="$localePath('/blog')"
                class="text-sm font-semibold leading-6 text-black/95 hover:text-black">←
                {{ $t('blog.goToBlog') }}</NuxtLink>
            <Article :doc="doc" />
        </template>
        <NotFoundError v-else :backToLink="$localePath('/blog')" />
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'blog'
})

const route = useRoute()

const { data: doc } = await useAsyncData(
    `blog-${route.path}`,
    () => queryCollection('blog').path(route.path).first(),
)
</script>

<style>
h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
}
</style>
