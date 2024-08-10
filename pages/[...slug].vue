<template>
    <ContentDoc>
        <template v-slot="{ doc }">
            <Content :doc="doc" />
        </template>

        <template #not-found>
            <NotFoundError />
        </template>
    </ContentDoc>
</template>

<script>
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