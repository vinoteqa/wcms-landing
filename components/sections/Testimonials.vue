<template>
  <div class="relative isolate bg-white">
    <div class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
      aria-hidden="true">
      <div class="ml-[max(50%,38rem)] aspect-1313/771 w-[82.0625rem] bg-linear-to-tr from-[#922952] to-[#732041]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div
      class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
      aria-hidden="true">
      <div
        class="ml-[-22rem] aspect-1313/771 w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-linear-to-tr from-[#922952] to-[#732041] xl:mr-[calc(50%-12rem)] xl:ml-0"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-base/7 font-semibold text-vinoteqa">{{ $t('sections.testimonial.title') }}</h2>
        <p class="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          {{ $t('sections.testimonial.subtitle') }}
        </p>
      </div>

      <div
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">

        <!-- Featured -->
        <figure class="rounded-2xl bg-white ring-1 shadow-lg ring-vinoteqa sm:col-span-2 xl:col-start-2 xl:row-end-1">
          <blockquote class="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
            <p>{{ `“${featuredTestimonial.body[locale]}”` }}</p>
          </blockquote>
          <figcaption
            class="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
            <img class="size-10 flex-none rounded-full bg-gray-50" :src="featuredTestimonial.author.profileUrl"
              :alt="`${featuredTestimonial.author.name} ${$t('sections.testimonial.aboutVinoteqa')}`" />
            <div class="flex-auto">
              <div class="font-semibold">{{ featuredTestimonial.author.name }}</div>
              <a :href="featuredTestimonial.author.link" target="_blank" class="text-gray-400">
                {{ `${featuredTestimonial.author.company}` }}
              </a>
            </div>
            <img class="h-10 w-auto flex-none" :src="featuredTestimonial.author.logoUrl"
              :alt="featuredTestimonial.author.company" />
          </figcaption>
        </figure>

        <!-- Columns -->
        <div v-for="(columnGroup, columnGroupIdx) in testimonials" :key="columnGroupIdx"
          class="space-y-8 xl:contents xl:space-y-0">
          <div v-for="(column, columnIdx) in columnGroup" :key="columnIdx"
            :class="[(columnGroupIdx === 0 && columnIdx === 0) || (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1) ? 'xl:row-span-2' : 'xl:row-start-1', 'space-y-8']">
            <figure v-for="testimonial in column" :key="testimonial.key"
              class="rounded-2xl bg-white p-6 ring-1 shadow-lg ring-vinoteqa/60">
              <blockquote class="text-gray-900">
                <p>{{ `“${testimonial.body[locale]}”` }}</p>
              </blockquote>
              <figcaption v-if="testimonial.author" class="mt-6 flex items-center gap-x-4">
                <img class="size-10 rounded-full bg-white" :src="testimonial.author.profileUrl"
                  :alt="`${testimonial.author.name} ${$t('sections.testimonial.aboutVinoteqa')}`" />
                <div>
                  <div class="font-semibold">{{ testimonial.author.name }}</div>
                  <a :href="testimonial.author.link" target="_blank" class="text-gray-400">
                    {{ `${testimonial.author.company}` }}
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()

const featuredTestimonial = {
  body: {
    de: "Vinoteqa hat die Verwaltung unseres Inventars und unserer Weinkarte revolutioniert. Mit den bereits verfügbaren Weindaten und Echtzeit-Updates sind unsere Abläufe effizienter geworden und die Weinkarte bleibt automatisch auf dem neuesten Stand. Vinoteqa hilft uns maßgeblich, unseren Weinkeller im Griff zu halten und ermöglicht es, dass wir uns auf ein außergewöhnliches kulinarisches Erlebnis für unsere Gäste konzentrieren können.",
    en: "Vinoteqa has revolutionized the management of our inventory and wine list. With wine data already available and real-time updates, our operations are efficient and the list is always up-to-date. Vinoteqa truly keeps our wine cellar at our fingertips, allowing us to focus on delivering an exceptional dining experience.",
    it: "Vinoteqa ha rivoluzionato la gestione del nostro inventario e della lista dei vini. Con i dati dei vini già a disposizione e aggiornamenti in tempo reale, le nostre operazioni sono efficienti e la carta è sempre aggiornata. Inoltre grazie ai dati statistici sappiamo sempre come migliorare la ricerca dei prodotti che risultano più apprezzati dalla nostra clientela. Vinoteqa mantiene davvero la nostra cantina a portata di mano, permettendoci di concentrarci sull'offrire un'esperienza culinaria eccezionale."
  },
  author: {
    name: 'Stefano Kratter',
    company: 'Ristorante Mondschein',
    link: 'https://www.ristorantemondschein.it',
    profileUrl: '/imgs/testimonials/mondschein-profile.png',
    logoUrl: '/imgs/testimonials/mondschein-logo.png',
  },
}
const testimonials = [
  [
    [
      // Terra - The Magic Place
      {
        key: 'terra-the-magic-place',
        body: {
          de: "Ich benutze nur mehr Vinoteqa für meinen Weinkeller – auch für die Weinkarte. Die Plattform ist sehr benutzerfreundlich, ich spare viel Zeit und kann meinen Gästen einen hervorragenden Service bieten.",
          en: "Now, I use exclusively Vinoteqa for managing my wine cellar – including the wine list. The platform is very user-friendly, saves me a lot of time, and allows me to offer excellent service to my guests. ",
          it: "Utilizzo esclusivamente Vinoteqa per la mia cantina, anche per la carta dei vini. La piattaforma è molto intuitiva, risparmio tanto tempo e posso offrire un servizio eccellente ai miei ospiti."
        },
        author: {
          name: 'Gisela Schneider',
          company: 'Terra - The Magic Place',
          link: 'https://terra.place',
          profileUrl: '/imgs/testimonials/terra-profile.png',
        },
      },
      {
        key: 'anonymous-1',
        body: {
          de: "Ich dachte, so ein System sei kompliziert, aber Vinoteqa hat mich sehr positiv überrascht. Ich finde mich auf der Plattform sehr gut zurecht und bin wirklich begeistert.",
          en: "Pensavo che un sistema del genere fosse complicato, ma Vinoteqa mi ha positivamente sorpreso. Mi trovo molto bene con la piattaforma e ne sono entusiasta.",
          it: "I initially expected a system like this to be complex, but Vinoteqa exceeded my expectations in the best way. The platform is intuitive, easy to navigate, and has truly impressed me with its performance and reliability."
        }
      }
      // More testimonials...
    ],
    [
      // More testimonials...
    ],
  ],
  [
    [
      // More testimonials...
    ],
    [
      {
        key: 'anonymous-2',
        body: {
          de: "Vinoteqa ist genau das, wonach wir gesucht haben. Endlich ein einfaches System, mit dem wir einen klaren Überblick über unseren Weinkeller haben.",
          en: "Vinoteqa is exactly what we were looking for. Finally, a simple system that gives us a clear overview of our wine cellar.",
          it: "Vinoteqa è esattamente ciò che stavamo cercando. Finalmente un sistema semplice che ci permette di avere una panoramica chiara della nostra cantina."
        },
      },
      {
        key: 'naturhotel-pfoesl',
        body: {
          de: "Vinoteqa schenkt mir mehr Zeit, die ich im Service mit den Gästen verbringen kann. Zeit ist heutzutage das Wertvollste – als Sommelier sollte man sie nicht im Büro verschwenden.",
          en: "Vinoteqa gives me more time to spend with guests during service. Time is the most valuable thing these days – sommeliers shouldn’t be wasting it in the office.",
          it: "Vinoteqa mi regala più tempo da passare con i clienti durante il servizio. Oggi il tempo è la cosa più preziosa – e un sommelier non dovrebbe sprecarlo in ufficio."
        },
        author: {
          name: 'Patrick Toll',
          company: 'Naturhotel Pfösl',
          link: 'https://www.pfoesl.it/',
          profileUrl: '/imgs/testimonials/pfoesl-profile.png',
        },
      }
      // More testimonials...
    ],
  ],
]
</script>