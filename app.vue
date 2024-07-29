<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
const { t } = useI18n()

definePageMeta({
    title: t("vinoteqa.title"),
})

useHead({
    titleTemplate: '%s',
    title: t("vinoteqa.title"),
})

useSeoMeta({
  title: t("vinoteqa.title"),
  ogTitle: t("vinoteqa.title"),
  description: t("vinoteqa.description"),
  ogDescription: t("vinoteqa.description"),
  ogImage: 'https://www.vinoteqa.com/imgs/hero-img.png',
  twitterCard: 'summary_large_image',
})
</script>
