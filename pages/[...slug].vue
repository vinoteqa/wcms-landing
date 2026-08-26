<template>
    <div class="px-8 mx-auto max-w-7xl">
        <Content v-if="doc" :doc="doc" />
        <NotFoundError v-else />
    </div>
</template>

<script setup>
const route = useRoute()

const { data: doc } = await useAsyncData(
    `page-${route.path}`,
    () => queryCollection('pages').path(route.path).first(),
)

useHead({
    titleTemplate: '%s | Vinoteqa',
})
</script>

<style>
h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
}
</style>
