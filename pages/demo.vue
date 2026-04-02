<template>
  <div class="mx-auto max-w-3xl px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {{ $t('demo.title') }}
      </h1>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        {{ $t('demo.subtitle') }}
      </p>
      <div class="mt-10">
        <a :href="demoLink" target="_blank" rel="noopener"
          class="rounded-md bg-vinoteqa px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-vinoteqa-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vinoteqa">
          {{ $t('demo.bookButton') }}
        </a>
      </div>
      <div class="mt-16 text-left">
        <h2 class="text-xl font-semibold text-gray-900">{{ $t('demo.whatToExpect') }}</h2>
        <ul class="mt-4 space-y-3 text-gray-600">
          <li class="flex gap-x-3">
            <CheckIcon class="h-6 w-5 flex-none text-vinoteqa" aria-hidden="true" />
            {{ $t('demo.benefit1') }}
          </li>
          <li class="flex gap-x-3">
            <CheckIcon class="h-6 w-5 flex-none text-vinoteqa" aria-hidden="true" />
            {{ $t('demo.benefit2') }}
          </li>
          <li class="flex gap-x-3">
            <CheckIcon class="h-6 w-5 flex-none text-vinoteqa" aria-hidden="true" />
            {{ $t('demo.benefit3') }}
          </li>
          <li class="flex gap-x-3">
            <CheckIcon class="h-6 w-5 flex-none text-vinoteqa" aria-hidden="true" />
            {{ $t('demo.benefit4') }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid'

const { t, locale } = useI18n()
const config = useRuntimeConfig()

const demoLinks = config.public.demoBookingPageLink
const demoLink = computed(() => demoLinks[locale.value] || demoLinks.en)

useSeoMeta({
  title: t('demo.title'),
  description: t('demo.subtitle'),
  ogTitle: t('demo.title') + ' | Vinoteqa',
  ogDescription: t('demo.subtitle'),
})
</script>
