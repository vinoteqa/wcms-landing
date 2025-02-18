<template>
    <div class="text-base text-black">Redirecting...</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'white'
})

import { useRoute, useRuntimeConfig } from '#imports'

const route = useRoute()
const config = useRuntimeConfig()

const demoLinks = config.public.demoBookingPageLink as Record<string, string>

// Get language from query parameter
const lang = (route.query.lang as string) || 'en'

// Get corresponding demo link
const demoLink = demoLinks[lang] || demoLinks.en
navigateTo(demoLink, { external: true })
</script>