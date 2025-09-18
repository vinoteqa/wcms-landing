<template>
    <div class="bg-white">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 class="text-center text-xl font-semibold text-gray-900">{{ $t('sections.logos.title') }}</h2>
            <div
                class="mx-auto mt-12 grid max-w-lg grid-cols-5 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-24 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <a v-for="logo in logos" :key="logo.name" :href="logo.link" target="_blank">
                    <img :key="logo.name" :src="logo.src" :alt="logo.name" width="200"
                        class="col-span-2 max-h-36 w-full object-contain lg:col-span-1" :class="logo.extraClasses" />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
const logos = [
    {
        name: 'Terra - The Magic Place',
        link: 'https://terra.place',
        src: '/logo-cloud/terra-the-magic-place.png',
        extraClasses: ''
    },
    {
        name: 'Ristorante La Ziria - Monaco Sport Hotel',
        link: 'https://www.monacosporthotel.com',
        src: '/logo-cloud/la-ziria.png',
        extraClasses: ''
    },
    {
        name: 'Alpin Panorama Hotel Hubertus',
        link: 'https://www.hotel-hubertus.com',
        src: '/logo-cloud/hubertus.png',
        extraClasses: ''
    },
    {
        name: 'Ristorante Laite',
        link: 'https://www.ristorantelaite.com',
        src: '/logo-cloud/laite.png',
        extraClasses: 'sm:col-start-2'
    },
    {
        name: 'Ristorante Da Aurelio',
        link: 'https://www.da-aurelio.it',
        src: '/logo-cloud/da-aurelio.png',
        extraClasses: 'col-start-2 sm:col-start-auto'
    }
]
</script>