<template>
    <NuxtLayout name="blog">
        <div class="blog-content py-10 px-8 mx-auto max-w-7xl">
            <NuxtLink :href="localePath('/blog')"
                class="text-sm font-semibold leading-6 text-black/95 hover:text-black">←
                {{ $t('common.goBack') }}</NuxtLink>
            <ContentDoc>
                <template v-slot="{ doc }">
                    <Article :doc="doc" />
                </template>
                <template #not-found>
                    <NotFoundError :backToLink="localePath('/blog')" />
                </template>
            </ContentDoc>
        </div>
    </NuxtLayout>
</template>

<script>
export default {
    layout: 'blog',
}
</script>

<style>
h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
}
</style>